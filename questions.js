var QUESTIONS = [
  {
    id: 1,
    scenario: "你正在参加一场高端酒会，突然有人当众羞辱你，说你不配出现在这里。你的第一反应是？",
    options: [
      {
        text: "直接端起红酒泼对方一脸，然后冷笑说'现在你也不配了'",
        tag: "drama",
        scores: { dominance: 2, emotion: 1, mask: -1, fate: 2, drama: 3 }
      },
      {
        text: "微微一笑，说'谢谢提醒'，然后暗中记下这笔账",
        tag: "drama",
        scores: { dominance: 1, emotion: -1, mask: 2, fate: 1, drama: 1 }
      },
      {
        text: "冷静回应'每个人都有自己的位置'，然后优雅离场",
        tag: "normal",
        scores: { dominance: 0, emotion: -1, mask: 1, fate: -1, drama: -2 }
      }
    ]
  },
  {
    id: 2,
    scenario: "你发现你最信任的人一直在背后背叛你。你会怎么做？",
    options: [
      {
        text: "当场揭穿，当着所有人的面手撕对方，让ta身败名裂",
        tag: "drama",
        scores: { dominance: 2, emotion: 2, mask: -2, fate: 2, drama: 3 }
      },
      {
        text: "假装不知道，暗中收集证据，在最关键的时机一击致命",
        tag: "drama",
        scores: { dominance: 1, emotion: -1, mask: 2, fate: 1, drama: 1 }
      },
      {
        text: "找对方私下谈话，弄清原因后再决定下一步",
        tag: "normal",
        scores: { dominance: 0, emotion: 1, mask: 0, fate: -1, drama: -2 }
      }
    ]
  },
  {
    id: 3,
    scenario: "家族要求你替你姐妹嫁入豪门，对方据说是个冷酷无情的人。你的选择是？",
    options: [
      {
        text: "嫁！进去之后先装小白花，等站稳脚跟再翻盘",
        tag: "drama",
        scores: { dominance: 1, emotion: 0, mask: 3, fate: 2, drama: 2 }
      },
      {
        text: "坚决拒绝，然后自己想办法解决家族危机",
        tag: "normal",
        scores: { dominance: 2, emotion: 1, mask: -1, fate: 1, drama: -1 }
      },
      {
        text: "表面答应，实则暗中联系对方说明真相，寻求合作",
        tag: "drama",
        scores: { dominance: 1, emotion: -1, mask: 2, fate: 0, drama: 1 }
      }
    ]
  },
  {
    id: 4,
    scenario: "你明明是项目的核心贡献者，功劳却被别人抢走了。你会？",
    options: [
      {
        text: "当众掀桌，把所有证据甩在对方脸上，让全场目瞪口呆",
        tag: "drama",
        scores: { dominance: 2, emotion: 2, mask: -2, fate: 2, drama: 3 }
      },
      {
        text: "冷冷看着对方表演，然后说'好戏看完了，该我上场了'",
        tag: "drama",
        scores: { dominance: 2, emotion: 0, mask: 1, fate: 1, drama: 2 }
      },
      {
        text: "冷静整理证据，通过正规渠道申诉维权",
        tag: "normal",
        scores: { dominance: 0, emotion: -1, mask: 0, fate: -1, drama: -2 }
      }
    ]
  },
  {
    id: 5,
    scenario: "你看到一个弱者正在被欺负，周围人都选择无视。你会？",
    options: [
      {
        text: "大步走上前，一把推开欺负人的人，说'有本事冲我来'",
        tag: "drama",
        scores: { dominance: 2, emotion: 2, mask: -2, fate: 1, drama: 2 }
      },
      {
        text: "默默记下一切，事后找到弱者提供帮助和资源",
        tag: "normal",
        scores: { dominance: 0, emotion: 1, mask: 1, fate: 0, drama: -1 }
      },
      {
        text: "先保护弱者离开，然后用自己的方式让欺负人的人付出代价",
        tag: "drama",
        scores: { dominance: 1, emotion: 1, mask: 1, fate: 1, drama: 1 }
      }
    ]
  },
  {
    id: 6,
    scenario: "你被人冤枉做了坏事，所有人都指责你。你会？",
    options: [
      {
        text: "大闹一场，把真正的坏人揪出来，让所有人闭嘴",
        tag: "drama",
        scores: { dominance: 2, emotion: 2, mask: -1, fate: 2, drama: 3 }
      },
      {
        text: "沉默不语，暗中调查真相，等证据确凿再一锤定音",
        tag: "drama",
        scores: { dominance: 1, emotion: -1, mask: 2, fate: 1, drama: 1 }
      },
      {
        text: "耐心解释，用事实和时间证明自己的清白",
        tag: "normal",
        scores: { dominance: -1, emotion: 0, mask: 0, fate: -2, drama: -2 }
      }
    ]
  },
  {
    id: 7,
    scenario: "你无意中发现了家族的一个惊天秘密，一旦公开将引发地震。你会？",
    options: [
      {
        text: "立刻在家族聚会上公开，看着所有人震惊的表情暗爽",
        tag: "drama",
        scores: { dominance: 2, emotion: 1, mask: -2, fate: 2, drama: 3 }
      },
      {
        text: "悄悄利用这个信息差，为自己谋取最大利益",
        tag: "drama",
        scores: { dominance: 1, emotion: -1, mask: 3, fate: 0, drama: 1 }
      },
      {
        text: "找当事人私下沟通，了解全貌后再做决定",
        tag: "normal",
        scores: { dominance: 0, emotion: 0, mask: 0, fate: -1, drama: -2 }
      }
    ]
  },
  {
    id: 8,
    scenario: "你的前任突然回来求复合，声泪俱下说当初是不得已。你的反应是？",
    options: [
      {
        text: "冷笑一声，说'你以为这是短剧吗？追妻火葬场？晚了'",
        tag: "drama",
        scores: { dominance: 2, emotion: 1, mask: -1, fate: 1, drama: 3 }
      },
      {
        text: "表面温柔地说'让我考虑一下'，实则已经开始布局复仇",
        tag: "drama",
        scores: { dominance: 1, emotion: -1, mask: 3, fate: 0, drama: 2 }
      },
      {
        text: "冷静分析当初分手的原因，判断是否真的值得给第二次机会",
        tag: "normal",
        scores: { dominance: 0, emotion: -1, mask: 0, fate: -1, drama: -2 }
      }
    ]
  },
  {
    id: 9,
    scenario: "你突然获得了一笔巨额财富，而曾经看不起你的人还在眼前。你会？",
    options: [
      {
        text: "立刻在他们面前炫富，把曾经受过的气加倍还回去",
        tag: "drama",
        scores: { dominance: 2, emotion: 2, mask: -1, fate: 1, drama: 3 }
      },
      {
        text: "低调处理，用这笔钱布局更大的棋局，让他们日后仰望",
        tag: "drama",
        scores: { dominance: 1, emotion: -1, mask: 2, fate: 1, drama: 1 }
      },
      {
        text: "理性规划，投资未来，过好自己的生活",
        tag: "normal",
        scores: { dominance: 0, emotion: -1, mask: 0, fate: -1, drama: -2 }
      }
    ]
  },
  {
    id: 10,
    scenario: "有人当着众人的面小看你，说你永远不可能成功。你会？",
    options: [
      {
        text: "歪嘴一笑，说'是吗？那你记住今天这句话'，然后转身离开",
        tag: "drama",
        scores: { dominance: 2, emotion: 0, mask: 1, fate: 2, drama: 3 }
      },
      {
        text: "当场展示实力，让所有人看到你真正的能力",
        tag: "drama",
        scores: { dominance: 2, emotion: 1, mask: -1, fate: 1, drama: 2 }
      },
      {
        text: "不争辩，默默努力，用结果说话",
        tag: "normal",
        scores: { dominance: -1, emotion: -1, mask: 0, fate: 0, drama: -2 }
      }
    ]
  },
  {
    id: 11,
    scenario: "家族逼你做一件违背良心的事，威胁说不做就断绝关系。你会？",
    options: [
      {
        text: "撕破脸皮，当场宣布脱离家族，头也不回地离开",
        tag: "drama",
        scores: { dominance: 2, emotion: 2, mask: -2, fate: 3, drama: 3 }
      },
      {
        text: "表面答应，暗中寻找破局之法，最终反客为主",
        tag: "drama",
        scores: { dominance: 1, emotion: -1, mask: 3, fate: 1, drama: 1 }
      },
      {
        text: "尝试与家族沟通，寻找双方都能接受的方案",
        tag: "normal",
        scores: { dominance: -1, emotion: 1, mask: 0, fate: -2, drama: -2 }
      }
    ]
  },
  {
    id: 12,
    scenario: "你面前有两条路：一条安全但平庸，一条危险但可能逆天改命。你选？",
    options: [
      {
        text: "危险的路！人生不搏一回跟咸鱼有什么区别？",
        tag: "drama",
        scores: { dominance: 1, emotion: 2, mask: -1, fate: 3, drama: 2 }
      },
      {
        text: "先走安全的路积蓄力量，等时机成熟再走那条险路",
        tag: "drama",
        scores: { dominance: 0, emotion: -1, mask: 2, fate: 1, drama: 0 }
      },
      {
        text: "选择安全的路，稳扎稳打才是正道",
        tag: "normal",
        scores: { dominance: -1, emotion: -1, mask: 0, fate: -2, drama: -2 }
      }
    ]
  },
  {
    id: 13,
    scenario: "一个萌娃突然拉着你的衣角说'帮帮我'，看起来很可怜。你会？",
    options: [
      {
        text: "二话不说带着萌娃去找欺负ta的人算账，大杀四方",
        tag: "drama",
        scores: { dominance: 2, emotion: 2, mask: -2, fate: 1, drama: 3 }
      },
      {
        text: "先把萌娃安顿好，然后暗中调查，用最稳妥的方式解决问题",
        tag: "normal",
        scores: { dominance: 0, emotion: 1, mask: 1, fate: 0, drama: -1 }
      },
      {
        text: "蹲下来认真听萌娃说完，然后制定一个既能帮ta又能让自己获益的计划",
        tag: "drama",
        scores: { dominance: 1, emotion: 1, mask: 1, fate: 1, drama: 1 }
      }
    ]
  },
  {
    id: 14,
    scenario: "命运给了你一手烂牌，所有人都觉得你完了。你的最后一句话是？",
    options: [
      {
        text: "'我命由我不由天！'然后歪嘴一笑，绝地翻盘",
        tag: "drama",
        scores: { dominance: 2, emotion: 2, mask: -1, fate: 3, drama: 3 }
      },
      {
        text: "'好戏才刚开始。'然后不动声色地翻出底牌",
        tag: "drama",
        scores: { dominance: 1, emotion: -1, mask: 2, fate: 2, drama: 2 }
      },
      {
        text: "'没关系，慢慢来。'然后脚踏实地一步步扭转局面",
        tag: "normal",
        scores: { dominance: -1, emotion: 0, mask: 0, fate: 0, drama: -2 }
      }
    ]
  },
  {
    id: 15,
    scenario: "你在豪门宴会上被安排坐在最末位，明显是被故意羞辱。你会？",
    options: [
      {
        text: "直接站起来把主位的椅子搬到末位坐下，说'这里风景更好'",
        tag: "drama",
        scores: { dominance: 2, emotion: 1, mask: -1, fate: 2, drama: 3 }
      },
      {
        text: "安然坐下，暗中观察每个人的表情，记住谁在看笑话",
        tag: "drama",
        scores: { dominance: 1, emotion: -1, mask: 2, fate: 0, drama: 1 }
      },
      {
        text: "礼貌离席，不跟这些人一般见识",
        tag: "normal",
        scores: { dominance: 0, emotion: 0, mask: 0, fate: -1, drama: -2 }
      }
    ]
  },
  {
    id: 16,
    scenario: "你发现你的闺蜜/兄弟一直在你背后说你的坏话。你会？",
    options: [
      {
        text: "在ta最得意的时候当众揭穿，让所有人看清ta的真面目",
        tag: "drama",
        scores: { dominance: 2, emotion: 2, mask: -2, fate: 1, drama: 3 }
      },
      {
        text: "假装不知道，开始有计划地疏远，同时收集更多证据",
        tag: "drama",
        scores: { dominance: 1, emotion: -1, mask: 2, fate: 0, drama: 1 }
      },
      {
        text: "直接找ta摊牌，问清楚到底怎么回事",
        tag: "normal",
        scores: { dominance: 0, emotion: 1, mask: -1, fate: -1, drama: -2 }
      }
    ]
  },
  {
    id: 17,
    scenario: "拍卖会上，你看中的东西被一个嚣张的人恶意抬价。你会？",
    options: [
      {
        text: "直接喊出一个天价，让全场震惊，让对方知难而退",
        tag: "drama",
        scores: { dominance: 2, emotion: 1, mask: -1, fate: 2, drama: 3 }
      },
      {
        text: "放弃这件，暗中调查对方底细，从别的地方让ta加倍偿还",
        tag: "drama",
        scores: { dominance: 1, emotion: -1, mask: 2, fate: 1, drama: 1 }
      },
      {
        text: "理性评估价值，超过就果断放弃",
        tag: "normal",
        scores: { dominance: 0, emotion: -1, mask: 0, fate: -1, drama: -2 }
      }
    ]
  },
  {
    id: 18,
    scenario: "你的婆婆/丈母娘当着亲戚的面数落你，说你配不上ta家孩子。你的反应？",
    options: [
      {
        text: "当场怼回去：'您家孩子配得上我吗？'",
        tag: "drama",
        scores: { dominance: 2, emotion: 2, mask: -2, fate: 2, drama: 3 }
      },
      {
        text: "微笑着说'您说得对'，然后暗中让配偶去处理",
        tag: "drama",
        scores: { dominance: 0, emotion: -1, mask: 2, fate: 0, drama: 1 }
      },
      {
        text: "保持沉默，事后跟伴侣认真沟通",
        tag: "normal",
        scores: { dominance: -1, emotion: 0, mask: 0, fate: -1, drama: -2 }
      }
    ]
  },
  {
    id: 19,
    scenario: "你发现有人在暗中模仿你的一切，从穿衣风格到说话方式。你会？",
    options: [
      {
        text: "故意在公开场合说些离谱的话，看ta也跟着学，然后当众揭穿",
        tag: "drama",
        scores: { dominance: 2, emotion: 1, mask: -1, fate: 1, drama: 3 }
      },
      {
        text: "无视，因为模仿者永远超越不了原创",
        tag: "normal",
        scores: { dominance: 0, emotion: -1, mask: 0, fate: 0, drama: -1 }
      },
      {
        text: "暗中设个局，让模仿者在关键时刻露出马脚",
        tag: "drama",
        scores: { dominance: 1, emotion: -1, mask: 2, fate: 1, drama: 2 }
      }
    ]
  },
  {
    id: 20,
    scenario: "你的对手在公开场合挑衅你，说要跟你比一场。你会？",
    options: [
      {
        text: "接受挑战，并且当众放话：'输了的人跪下道歉'",
        tag: "drama",
        scores: { dominance: 2, emotion: 2, mask: -2, fate: 2, drama: 3 }
      },
      {
        text: "淡淡一笑：'不急，等你有资格再说'",
        tag: "drama",
        scores: { dominance: 2, emotion: 0, mask: 1, fate: 1, drama: 2 }
      },
      {
        text: "评估实力差距，有把握就比，没把握就不浪费时间",
        tag: "normal",
        scores: { dominance: 0, emotion: -1, mask: 0, fate: -1, drama: -2 }
      }
    ]
  },
  {
    id: 21,
    scenario: "你得知自己其实是某豪门失散多年的孩子，但现在的家庭也养了你多年。你会？",
    options: [
      {
        text: "立刻回豪门认亲，然后带着资源回来报答养父母",
        tag: "drama",
        scores: { dominance: 2, emotion: 1, mask: -1, fate: 2, drama: 2 }
      },
      {
        text: "两边都不放弃，暗中布局让两个家族都成为你的后盾",
        tag: "drama",
        scores: { dominance: 1, emotion: -1, mask: 2, fate: 1, drama: 2 }
      },
      {
        text: "慎重考虑，跟两边都坦诚沟通后再做决定",
        tag: "normal",
        scores: { dominance: 0, emotion: 1, mask: 0, fate: -1, drama: -2 }
      }
    ]
  },
  {
    id: 22,
    scenario: "你在公司被领导当成了替罪羊，背了一个大黑锅。你会？",
    options: [
      {
        text: "在全员大会上甩出证据，让领导当场下不来台",
        tag: "drama",
        scores: { dominance: 2, emotion: 2, mask: -2, fate: 2, drama: 3 }
      },
      {
        text: "默默收集证据，等领导升职的关键时刻一击致命",
        tag: "drama",
        scores: { dominance: 1, emotion: -1, mask: 2, fate: 1, drama: 2 }
      },
      {
        text: "走正规流程申诉，维护自己的权益",
        tag: "normal",
        scores: { dominance: 0, emotion: -1, mask: 0, fate: -1, drama: -2 }
      }
    ]
  },
  {
    id: 23,
    scenario: "你暗恋的人突然对你表白，但你发现ta可能是因为赌输了才来的。你会？",
    options: [
      {
        text: "当众接受，然后狠狠羞辱ta：'你以为我稀罕？'",
        tag: "drama",
        scores: { dominance: 2, emotion: 2, mask: -1, fate: 1, drama: 3 }
      },
      {
        text: "假装不知道真相，接受后慢慢让ta真正爱上你",
        tag: "drama",
        scores: { dominance: 1, emotion: 1, mask: 2, fate: 0, drama: 1 }
      },
      {
        text: "直接问清楚，如果是真的就接受，不是就拒绝",
        tag: "normal",
        scores: { dominance: 0, emotion: 0, mask: -1, fate: -1, drama: -2 }
      }
    ]
  },
  {
    id: 24,
    scenario: "你发现你的竞争对手正在使用不正当手段。你会？",
    options: [
      {
        text: "当场揭发，让所有人看看ta的丑陋嘴脸",
        tag: "drama",
        scores: { dominance: 2, emotion: 1, mask: -2, fate: 2, drama: 3 }
      },
      {
        text: "暗中录下证据，等最关键的时刻拿出来一击毙命",
        tag: "drama",
        scores: { dominance: 1, emotion: -1, mask: 2, fate: 1, drama: 2 }
      },
      {
        text: "向相关机构举报，让制度来处理",
        tag: "normal",
        scores: { dominance: 0, emotion: -1, mask: 0, fate: -1, drama: -2 }
      }
    ]
  },
  {
    id: 25,
    scenario: "你被人陷害入狱，三年后终于沉冤昭雪出狱。你出来的第一件事是？",
    options: [
      {
        text: "直接去找陷害你的人，当着ta的面说'我回来了'",
        tag: "drama",
        scores: { dominance: 2, emotion: 2, mask: -1, fate: 3, drama: 3 }
      },
      {
        text: "先低调调查这三年里谁落井下石，然后逐个清算",
        tag: "drama",
        scores: { dominance: 1, emotion: -1, mask: 2, fate: 2, drama: 2 }
      },
      {
        text: "重新开始生活，用法律手段追责",
        tag: "normal",
        scores: { dominance: 0, emotion: -1, mask: 0, fate: 0, drama: -2 }
      }
    ]
  },
  {
    id: 26,
    scenario: "你参加一个选秀节目，评委明显偏心对手，给你打了超低分。你会？",
    options: [
      {
        text: "当场质疑评委的公正性，要求公开评分标准",
        tag: "drama",
        scores: { dominance: 2, emotion: 2, mask: -2, fate: 2, drama: 3 }
      },
      {
        text: "用实力碾压，让观众的呼声逼评委改分",
        tag: "drama",
        scores: { dominance: 1, emotion: 1, mask: -1, fate: 1, drama: 2 }
      },
      {
        text: "赛后申诉，用规则维护自己的权益",
        tag: "normal",
        scores: { dominance: 0, emotion: -1, mask: 0, fate: -1, drama: -2 }
      }
    ]
  },
  {
    id: 27,
    scenario: "你发现你的配偶/伴侣一直在偷偷转移财产，准备离婚。你会？",
    options: [
      {
        text: "立刻冻结所有账户，然后反将一军，让ta净身出户",
        tag: "drama",
        scores: { dominance: 2, emotion: 1, mask: -1, fate: 2, drama: 3 }
      },
      {
        text: "假装不知道，暗中把财产转移回来，再额外多转一些",
        tag: "drama",
        scores: { dominance: 1, emotion: -1, mask: 3, fate: 1, drama: 2 }
      },
      {
        text: "咨询律师，用法律手段保护自己的财产",
        tag: "normal",
        scores: { dominance: 0, emotion: -1, mask: 0, fate: -1, drama: -2 }
      }
    ]
  },
  {
    id: 28,
    scenario: "你在路上偶遇一个算命先生，说你有'帝王之相'，但需要经历大劫。你会？",
    options: [
      {
        text: "大笑三声：'大劫？我命由我不由天！'",
        tag: "drama",
        scores: { dominance: 2, emotion: 2, mask: -1, fate: 3, drama: 3 }
      },
      {
        text: "微微一笑：'那就看看，谁劫谁。'",
        tag: "drama",
        scores: { dominance: 1, emotion: 0, mask: 1, fate: 2, drama: 2 }
      },
      {
        text: "一笑而过，不信这些",
        tag: "normal",
        scores: { dominance: 0, emotion: -1, mask: 0, fate: -1, drama: -2 }
      }
    ]
  },
  {
    id: 29,
    scenario: "你最好的朋友被人欺负了，哭着来找你。你会？",
    options: [
      {
        text: "二话不说拉着朋友去找那个人算账，绝不善罢甘休",
        tag: "drama",
        scores: { dominance: 2, emotion: 2, mask: -2, fate: 1, drama: 3 }
      },
      {
        text: "先安慰朋友，然后暗中调查，让对方付出惨痛代价",
        tag: "drama",
        scores: { dominance: 1, emotion: 1, mask: 1, fate: 1, drama: 1 }
      },
      {
        text: "帮朋友分析情况，一起想最好的解决办法",
        tag: "normal",
        scores: { dominance: 0, emotion: 1, mask: 0, fate: -1, drama: -2 }
      }
    ]
  },
  {
    id: 30,
    scenario: "你站在人生的十字路口，一边是安稳的平凡生活，一边是充满未知的冒险之旅。你的选择？",
    options: [
      {
        text: "冒险！人生苦短，不疯魔不成活！",
        tag: "drama",
        scores: { dominance: 1, emotion: 2, mask: -1, fate: 3, drama: 2 }
      },
      {
        text: "先体验冒险，留好后路，随时可以回来",
        tag: "drama",
        scores: { dominance: 0, emotion: 0, mask: 2, fate: 1, drama: 1 }
      },
      {
        text: "选择安稳，平凡也是一种幸福",
        tag: "normal",
        scores: { dominance: -1, emotion: -1, mask: 0, fate: -2, drama: -2 }
      }
    ]
  }
];
