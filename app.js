(function() {
  var QUIZ_COUNT = 10;
  var currentQuestion = 0;
  var answers = [];
  var isTransitioning = false;
  var selectedQuestions = [];

  var landingPage = document.getElementById('landing-page');
  var quizPage = document.getElementById('quiz-page');
  var resultPage = document.getElementById('result-page');
  var startBtn = document.getElementById('start-btn');
  var progressFill = document.getElementById('progress-fill');
  var progressText = document.getElementById('progress-text');
  var questionText = document.getElementById('question-text');
  var optionsContainer = document.getElementById('options-container');
  var restartBtn = document.getElementById('restart-btn');
  var shareBtn = document.getElementById('share-btn');

  function shuffleArray(arr) {
    var shuffled = arr.slice();
    for (var i = shuffled.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
    }
    return shuffled;
  }

  function pickRandomQuestions() {
    var shuffled = shuffleArray(QUESTIONS);
    return shuffled.slice(0, QUIZ_COUNT);
  }

  startBtn.addEventListener('click', function() {
    currentQuestion = 0;
    answers = [];
    selectedQuestions = pickRandomQuestions();
    showPage('quiz');
    renderQuestion();
  });

  restartBtn.addEventListener('click', function() {
    currentQuestion = 0;
    answers = [];
    selectedQuestions = [];
    showPage('landing');
  });

  shareBtn.addEventListener('click', function() {
    var result = calculateResult(answers, selectedQuestions);
    var role = result.role;
    var shareText = '我在短剧里是【' + role.name + '】！' + role.catchphrase + '\n\n快来测测你在短剧里是什么角色！';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareText).then(function() {
        showShareToast('已复制到剪贴板，快去分享吧！');
      });
    } else {
      var textarea = document.createElement('textarea');
      textarea.value = shareText;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showShareToast('已复制到剪贴板，快去分享吧！');
    }
  });

  function showPage(page) {
    landingPage.classList.remove('active');
    quizPage.classList.remove('active');
    resultPage.classList.remove('active');

    if (page === 'landing') {
      landingPage.classList.add('active');
    } else if (page === 'quiz') {
      quizPage.classList.add('active');
    } else if (page === 'result') {
      resultPage.classList.add('active');
    }
  }

  function renderQuestion() {
    if (currentQuestion >= selectedQuestions.length) {
      showResult();
      return;
    }

    var q = selectedQuestions[currentQuestion];
    var progress = (currentQuestion / selectedQuestions.length) * 100;
    progressFill.style.width = progress + '%';
    progressText.textContent = (currentQuestion + 1) + ' / ' + selectedQuestions.length;

    questionText.style.opacity = '0';
    questionText.style.transform = 'translateY(20px)';
    optionsContainer.style.opacity = '0';
    optionsContainer.style.transform = 'translateY(20px)';

    setTimeout(function() {
      questionText.textContent = q.scenario;

      optionsContainer.innerHTML = '';
      q.options.forEach(function(option, index) {
        var btn = document.createElement('button');
        btn.className = 'option-btn';

        var textSpan = document.createElement('span');
        textSpan.className = 'option-text';
        textSpan.textContent = option.text;
        btn.appendChild(textSpan);

        btn.addEventListener('click', function() {
          if (isTransitioning) return;
          isTransitioning = true;
          btn.classList.add('selected');

          answers.push({
            questionId: q.id,
            selectedText: option.text,
            scores: option.scores
          });

          setTimeout(function() {
            currentQuestion++;
            isTransitioning = false;
            renderQuestion();
          }, 400);
        });

        optionsContainer.appendChild(btn);
      });

      questionText.style.opacity = '1';
      questionText.style.transform = 'translateY(0)';

      setTimeout(function() {
        optionsContainer.style.opacity = '1';
        optionsContainer.style.transform = 'translateY(0)';
      }, 150);
    }, 200);
  }

  function showResult() {
    var result = calculateResult(answers, selectedQuestions);
    var role = result.role;

    progressFill.style.width = '100%';
    progressText.textContent = selectedQuestions.length + ' / ' + selectedQuestions.length;

    setTimeout(function() {
      showPage('result');

      document.getElementById('result-name').textContent = role.name;
      document.getElementById('result-code').textContent = role.code;
      document.getElementById('result-catchphrase').textContent = '「' + role.catchphrase + '」';

      var descContainer = document.getElementById('result-description');
      descContainer.innerHTML = '';
      role.description.forEach(function(para) {
        var p = document.createElement('p');
        p.textContent = para;
        descContainer.appendChild(p);
      });

      renderRadarChart(result.percentages);
    }, 500);
  }

  function renderRadarChart(percentages) {
    var canvas = document.getElementById('radar-chart');
    var ctx = canvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1;

    var size = Math.min(canvas.parentElement.offsetWidth, 320);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    ctx.scale(dpr, dpr);

    var centerX = size / 2;
    var centerY = size / 2;
    var radius = size * 0.35;

    var dimensions = [
      { key: 'dominance', label: '主动权' },
      { key: 'emotion', label: '情感深度' },
      { key: 'mask', label: '社交面具' },
      { key: 'fate', label: '命运走向' },
      { key: 'drama', label: '戏剧性' }
    ];

    var numDims = dimensions.length;
    var angleStep = (Math.PI * 2) / numDims;
    var startAngle = -Math.PI / 2;

    ctx.clearRect(0, 0, size, size);

    for (var level = 1; level <= 4; level++) {
      var r = radius * (level / 4);
      ctx.beginPath();
      for (var i = 0; i < numDims; i++) {
        var angle = startAngle + i * angleStep;
        var x = centerX + r * Math.cos(angle);
        var y = centerY + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.15)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    for (var i = 0; i < numDims; i++) {
      var angle = startAngle + i * angleStep;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    ctx.beginPath();
    for (var i = 0; i < numDims; i++) {
      var angle = startAngle + i * angleStep;
      var value = percentages[dimensions[i].key] / 100;
      var r = radius * value;
      var x = centerX + r * Math.cos(angle);
      var y = centerY + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();

    var gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    gradient.addColorStop(0, 'rgba(255, 215, 0, 0.3)');
    gradient.addColorStop(1, 'rgba(180, 50, 50, 0.3)');
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.strokeStyle = 'rgba(255, 215, 0, 0.8)';
    ctx.lineWidth = 2;
    ctx.stroke();

    for (var i = 0; i < numDims; i++) {
      var angle = startAngle + i * angleStep;
      var value = percentages[dimensions[i].key] / 100;
      var r = radius * value;
      var x = centerX + r * Math.cos(angle);
      var y = centerY + r * Math.sin(angle);

      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#ffd700';
      ctx.fill();

      var labelR = radius + 24;
      var lx = centerX + labelR * Math.cos(angle);
      var ly = centerY + labelR * Math.sin(angle);
      ctx.fillStyle = '#e0d0b0';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(dimensions[i].label, lx, ly);
    }
  }

  function showShareToast(message) {
    var toast = document.getElementById('share-toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(function() {
      toast.classList.remove('show');
    }, 2500);
  }

  showPage('landing');
})();
