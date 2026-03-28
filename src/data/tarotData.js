// src/data/tarotData.js

export const tarotGroups = [
  { key: "major", titleEn: "Major Arcana", titleZh: "大阿卡纳" },
  { key: "wands", titleEn: "Suit of Wands", titleZh: "权杖" },
  { key: "cups", titleEn: "Suit of Cups", titleZh: "圣杯" },
  { key: "swords", titleEn: "Suit of Swords", titleZh: "宝剑" },
  { key: "pentacles", titleEn: "Suit of Pentacles", titleZh: "星币" },
];

// -----------------------------
// helpers
// -----------------------------

function createCard({
  id,
  group,
  displayNumber,
  emoji,
  eyebrowEn,
  eyebrowZh,
  titleEn,
  titleZh,
  metaEn,
  metaZh,
  notesEn,
  notesZh,
}) {
  return [
    id,
    {
      group,
      displayNumber,
      emoji,
      eyebrowEn,
      eyebrowZh,
      titleEn,
      titleZh,
      metaEn,
      metaZh,
      ingrEn: [],
      ingrZh: [],
      stepsEn: [],
      stepsZh: [],
      notesEn,
      notesZh,
    },
  ];
}

// -----------------------------
// Major Arcana
// -----------------------------

const majorArcanaEntries = [
  createCard({
    id: "tarot-fool",
    group: "major",
    displayNumber: "0",
    emoji: "🤸",
    eyebrowEn: "Major Arcana · 0",
    eyebrowZh: "大阿卡纳 · 0",
    titleEn: "The Fool",
    titleZh: "愚者",
    metaEn: [
      ["Element", "Air"],
      ["Planet", "Uranus"],
      ["Number", "0 — infinite potential"],
    ],
    metaZh: [
      ["元素", "风"],
      ["行星", "天王星"],
      ["数字", "0 — 无限潜能"],
    ],
    notesEn:
      "The Fool stands at the edge of a cliff, about to step off. He is not stupid — he is innocent. He hasn't yet learned to be afraid. This is the card of beginnings, of pure potential, of the courage to start without knowing what comes next.\n\nUpright: new beginnings, spontaneity, a leap of faith, unlimited potential.\nReversed: recklessness, naivety, poor judgment, risk-taking without preparation.",
    notesZh:
      "愚者站在悬崖边缘，即将踏步而出。他并非愚蠢——他是纯真的。他还没有学会恐惧。这是关于开始、纯粹潜能、以及在未知中勇敢出发的牌。\n\n正位：新开始、自发性、信念的飞跃、无限潜能。\n逆位：鲁莽、幼稚、判断失误、未经准备的冒险。",
  }),

  createCard({
    id: "tarot-magician",
    group: "major",
    displayNumber: "I",
    emoji: "🪄",
    eyebrowEn: "Major Arcana · I",
    eyebrowZh: "大阿卡纳 · I",
    titleEn: "The Magician",
    titleZh: "魔术师",
    metaEn: [
      ["Element", "Air / Mercury"],
      ["Planet", "Mercury"],
      ["Number", "1 — unity, will"],
    ],
    metaZh: [
      ["元素", "风 / 水星"],
      ["行星", "水星"],
      ["数字", "1 — 统一，意志"],
    ],
    notesEn:
      "One hand points to the sky, one to the earth: 'As above, so below.' The Magician has all four suits of the tarot on his table — he has every tool he needs. The question is whether he will use them.\n\nUpright: willpower, skill, manifestation, resourcefulness. You have everything you need.\nReversed: manipulation, trickery, wasted talent, illusion.",
    notesZh:
      "一手指天，一手指地：‘如其在上，如其在下。’ 魔术师桌上摆着塔罗四个花色的象征，他已经拥有一切工具。问题只在于，他是否会真正使用它们。\n\n正位：意志力、技能、显化、足智多谋。你已具备所需的一切。\n逆位：操纵、欺骗、浪费天赋、幻觉。",
  }),

  createCard({
    id: "tarot-hpriestess",
    group: "major",
    displayNumber: "II",
    emoji: "🌙",
    eyebrowEn: "Major Arcana · II",
    eyebrowZh: "大阿卡纳 · II",
    titleEn: "The High Priestess",
    titleZh: "女祭司",
    metaEn: [
      ["Element", "Water"],
      ["Planet", "Moon"],
      ["Number", "2 — duality, intuition"],
    ],
    metaZh: [
      ["元素", "水"],
      ["行星", "月亮"],
      ["数字", "2 — 二元，直觉"],
    ],
    notesEn:
      "She sits between two pillars, guarding what cannot be understood by logic alone. The High Priestess speaks softly: not everything should be forced into clarity. Some truths must first be felt.\n\nUpright: intuition, inner knowing, mystery, silence, wisdom beneath the surface.\nReversed: blocked intuition, secrets, disconnection from inner voice.",
    notesZh:
      "她坐在两根柱子之间，守护着那些无法仅凭理性抵达的知识。女祭司轻声提醒：并不是所有真相都需要被立刻说清，有些东西只能先被感受。\n\n正位：直觉、内在知晓、神秘、沉静、表层之下的智慧。\n逆位：直觉受阻、秘密、与内心声音失联。",
  }),

  createCard({
    id: "tarot-empress",
    group: "major",
    displayNumber: "III",
    emoji: "🌾",
    eyebrowEn: "Major Arcana · III",
    eyebrowZh: "大阿卡纳 · III",
    titleEn: "The Empress",
    titleZh: "皇后",
    metaEn: [
      ["Element", "Earth"],
      ["Planet", "Venus"],
      ["Number", "3 — creation, abundance"],
    ],
    metaZh: [
      ["元素", "土"],
      ["行星", "金星"],
      ["数字", "3 — 创造，丰饶"],
    ],
    notesEn:
      "The Empress is fertile ground, beauty embodied, the principle of growth made visible. She creates not through force but through nourishment.\n\nUpright: abundance, creativity, sensuality, care, fertility.\nReversed: overindulgence, stagnation, dependence, creative block.",
    notesZh:
      "皇后是丰饶的土地，是具象化的美，也是生长本身。她不靠强迫去创造，而是靠滋养。\n\n正位：丰盛、创造力、感官之美、照料、孕育。\n逆位：放纵、停滞、依赖、创造受阻。",
  }),

  createCard({
    id: "tarot-emperor",
    group: "major",
    displayNumber: "IV",
    emoji: "👑",
    eyebrowEn: "Major Arcana · IV",
    eyebrowZh: "大阿卡纳 · IV",
    titleEn: "The Emperor",
    titleZh: "皇帝",
    metaEn: [
      ["Element", "Fire"],
      ["Planet", "Aries"],
      ["Number", "4 — order, authority"],
    ],
    metaZh: [
      ["元素", "火"],
      ["行星", "白羊"],
      ["数字", "4 — 秩序，权威"],
    ],
    notesEn:
      "The Emperor builds walls, boundaries, laws. He is structure, discipline, and the will to govern chaos. His gift is stability; his danger is rigidity.\n\nUpright: authority, structure, responsibility, protection, leadership.\nReversed: domination, inflexibility, control issues, harshness.",
    notesZh:
      "皇帝建立边界、法则与秩序。他象征结构、纪律，以及驾驭混乱的意志。他的礼物是稳定，他的危险是僵硬。\n\n正位：权威、结构、责任、保护、领导力。\n逆位：专断、僵化、控制欲、严苛。",
  }),

  createCard({
    id: "tarot-hierophant",
    group: "major",
    displayNumber: "V",
    emoji: "⛪",
    eyebrowEn: "Major Arcana · V",
    eyebrowZh: "大阿卡纳 · V",
    titleEn: "The Hierophant",
    titleZh: "教皇",
    metaEn: [
      ["Element", "Earth"],
      ["Planet", "Taurus"],
      ["Number", "5 — tradition, transmission"],
    ],
    metaZh: [
      ["元素", "土"],
      ["行星", "金牛"],
      ["数字", "5 — 传统，传承"],
    ],
    notesEn:
      "The Hierophant represents inherited systems — ritual, doctrine, custom, the wisdom of institutions. He can be a teacher or a cage.\n\nUpright: tradition, spiritual guidance, learning, ceremony, mentorship.\nReversed: dogma, rebellion, empty conformity, restrictive beliefs.",
    notesZh:
      "教皇代表继承而来的体系：仪式、教义、传统、制度中的智慧。他可以是导师，也可能成为牢笼。\n\n正位：传统、精神指引、学习、仪式、师承。\n逆位：教条、反叛、空洞服从、限制性的信念。",
  }),

  createCard({
    id: "tarot-lovers",
    group: "major",
    displayNumber: "VI",
    emoji: "💞",
    eyebrowEn: "Major Arcana · VI",
    eyebrowZh: "大阿卡纳 · VI",
    titleEn: "The Lovers",
    titleZh: "恋人",
    metaEn: [
      ["Element", "Air"],
      ["Planet", "Gemini"],
      ["Number", "6 — union, choice"],
    ],
    metaZh: [
      ["元素", "风"],
      ["行星", "双子"],
      ["数字", "6 — 联结，选择"],
    ],
    notesEn:
      "The Lovers is not only about romance. It is about alignment — the moment when desire, value, and choice must face one another honestly.\n\nUpright: love, harmony, intimacy, values-based choices, union.\nReversed: misalignment, temptation, indecision, fractured connection.",
    notesZh:
      "恋人并不只关乎爱情。它更关乎一致性——当欲望、价值与选择必须彼此诚实地相遇。\n\n正位：爱、和谐、亲密、基于价值的选择、结合。\n逆位：失衡、诱惑、犹疑、关系破裂。",
  }),

  createCard({
    id: "tarot-chariot",
    group: "major",
    displayNumber: "VII",
    emoji: "🏇",
    eyebrowEn: "Major Arcana · VII",
    eyebrowZh: "大阿卡纳 · VII",
    titleEn: "The Chariot",
    titleZh: "战车",
    metaEn: [
      ["Element", "Water"],
      ["Planet", "Cancer"],
      ["Number", "7 — drive, victory"],
    ],
    metaZh: [
      ["元素", "水"],
      ["行星", "巨蟹"],
      ["数字", "7 — 驱力，胜利"],
    ],
    notesEn:
      "The Chariot moves forward not because the road is simple, but because opposing forces are held in disciplined motion. Victory here is mastery of direction.\n\nUpright: determination, control, momentum, discipline, triumph.\nReversed: scattered will, aggression, burnout, lack of control.",
    notesZh:
      "战车向前，并不是因为道路简单，而是因为相反的力量被意志驯服并维持在运动之中。这里的胜利，是方向感的胜利。\n\n正位：决心、掌控、推进、纪律、凯旋。\n逆位：意志分散、攻击性、透支、失控。",
  }),

  createCard({
    id: "tarot-strength",
    group: "major",
    displayNumber: "VIII",
    emoji: "🦁",
    eyebrowEn: "Major Arcana · VIII",
    eyebrowZh: "大阿卡纳 · VIII",
    titleEn: "Strength",
    titleZh: "力量",
    metaEn: [
      ["Element", "Fire"],
      ["Planet", "Leo"],
      ["Number", "8 — courage, inner power"],
    ],
    metaZh: [
      ["元素", "火"],
      ["行星", "狮子"],
      ["数字", "8 — 勇气，内在力量"],
    ],
    notesEn:
      "Strength is not domination but gentleness powerful enough to calm what is wild. It is the courage to meet intensity without violence.\n\nUpright: courage, compassion, patience, inner strength, calm influence.\nReversed: self-doubt, suppressed anger, fragility, loss of confidence.",
    notesZh:
      "力量不是压制，而是一种足以安抚野性的温柔。它是面对强烈事物时仍不诉诸暴力的勇气。\n\n正位：勇气、慈悲、耐心、内在力量、平静的影响力。\n逆位：自我怀疑、被压抑的愤怒、脆弱、失去信心。",
  }),

  createCard({
    id: "tarot-hermit",
    group: "major",
    displayNumber: "IX",
    emoji: "🕯",
    eyebrowEn: "Major Arcana · IX",
    eyebrowZh: "大阿卡纳 · IX",
    titleEn: "The Hermit",
    titleZh: "隐者",
    metaEn: [
      ["Element", "Earth"],
      ["Planet", "Virgo"],
      ["Number", "9 — solitude, wisdom"],
    ],
    metaZh: [
      ["元素", "土"],
      ["行星", "处女"],
      ["数字", "9 — 独处，智慧"],
    ],
    notesEn:
      "The Hermit withdraws not to escape life but to see it more clearly. His lantern does not illuminate the whole road — only the next necessary step.\n\nUpright: introspection, solitude, wisdom, searching, quiet truth.\nReversed: isolation, withdrawal, loneliness, refusal to engage.",
    notesZh:
      "隐者退离人群，不是为了逃避生活，而是为了更清楚地看见生活。他的灯不会照亮整条路，只照亮下一步。\n\n正位：内省、独处、智慧、探寻、静默中的真相。\n逆位：孤立、封闭、寂寞、拒绝参与世界。",
  }),

  createCard({
    id: "tarot-wheel",
    group: "major",
    displayNumber: "X",
    emoji: "🎡",
    eyebrowEn: "Major Arcana · X",
    eyebrowZh: "大阿卡纳 · X",
    titleEn: "Wheel of Fortune",
    titleZh: "命运之轮",
    metaEn: [
      ["Element", "Fire"],
      ["Planet", "Jupiter"],
      ["Number", "10 — cycles, fate"],
    ],
    metaZh: [
      ["元素", "火"],
      ["行星", "木星"],
      ["数字", "10 — 循环，命运"],
    ],
    notesEn:
      "The wheel turns whether we are ready or not. Fortune is motion: rise, fall, chance, recurrence. The card reminds us that permanence is an illusion.\n\nUpright: change, turning point, luck, destiny, cycles.\nReversed: bad timing, resistance to change, setbacks, feeling stuck in a cycle.",
    notesZh:
      "命运之轮无论你是否准备好，都会转动。它代表起落、机缘、循环与回返，也提醒人：所谓永恒的稳定，本就是幻觉。\n\n正位：变化、转折、好运、命运、循环。\n逆位：时机不佳、抗拒变化、挫折、困在循环之中。",
  }),

  createCard({
    id: "tarot-justice",
    group: "major",
    displayNumber: "XI",
    emoji: "⚖️",
    eyebrowEn: "Major Arcana · XI",
    eyebrowZh: "大阿卡纳 · XI",
    titleEn: "Justice",
    titleZh: "正义",
    metaEn: [
      ["Element", "Air"],
      ["Planet", "Libra"],
      ["Number", "11 — balance, consequence"],
    ],
    metaZh: [
      ["元素", "风"],
      ["行星", "天秤"],
      ["数字", "11 — 平衡，因果"],
    ],
    notesEn:
      "Justice is not sentimentality. She weighs, cuts, clarifies. This card asks what is true, what is fair, and what consequences must be accepted.\n\nUpright: truth, accountability, fairness, law, ethical clarity.\nReversed: imbalance, avoidance, dishonesty, unfair treatment.",
    notesZh:
      "正义并不温情。她衡量、裁决、澄清。这张牌追问的是真相、公平，以及人是否愿意承担后果。\n\n正位：真相、负责、公平、法则、伦理清晰。\n逆位：失衡、逃避、不诚实、不公。",
  }),

  createCard({
    id: "tarot-hangedman",
    group: "major",
    displayNumber: "XII",
    emoji: "🙃",
    eyebrowEn: "Major Arcana · XII",
    eyebrowZh: "大阿卡纳 · XII",
    titleEn: "The Hanged Man",
    titleZh: "倒吊人",
    metaEn: [
      ["Element", "Water"],
      ["Planet", "Neptune"],
      ["Number", "12 — surrender, perspective"],
    ],
    metaZh: [
      ["元素", "水"],
      ["行星", "海王星"],
      ["数字", "12 — 悬置，视角"],
    ],
    notesEn:
      "Suspended between action and stillness, the Hanged Man teaches that insight often comes through pause, inversion, and surrender rather than force.\n\nUpright: surrender, waiting, sacrifice, new perspective, suspension.\nReversed: stalling, resistance, needless martyrdom, refusal to let go.",
    notesZh:
      "倒吊人停留在行动与静止之间。他提醒人：顿悟往往不是靠强行推进得来的，而是来自暂停、倒转和放手。\n\n正位：臣服、等待、牺牲、新视角、悬而未决。\n逆位：拖延、抗拒、无意义的自我牺牲、拒绝放下。",
  }),

  createCard({
    id: "tarot-death",
    group: "major",
    displayNumber: "XIII",
    emoji: "🦋",
    eyebrowEn: "Major Arcana · XIII",
    eyebrowZh: "大阿卡纳 · XIII",
    titleEn: "Death",
    titleZh: "死神",
    metaEn: [
      ["Element", "Water"],
      ["Planet", "Scorpio"],
      ["Number", "13 — ending, transformation"],
    ],
    metaZh: [
      ["元素", "水"],
      ["行星", "天蝎"],
      ["数字", "13 — 终结，转化"],
    ],
    notesEn:
      "Death rarely means literal death. It means the ending that makes continuation impossible in its old form. Transformation begins where attachment breaks.\n\nUpright: endings, transformation, release, transition, irrevocable change.\nReversed: clinging, stagnation, fear of endings, delayed transformation.",
    notesZh:
      "死神很少真的指向肉体的死亡。它更多意味着某种旧形式已无法继续，转化只能从断裂开始。\n\n正位：结束、转化、释放、过渡、不可逆的变化。\n逆位：执着、停滞、害怕结束、转化被延迟。",
  }),

  createCard({
    id: "tarot-temperance",
    group: "major",
    displayNumber: "XIV",
    emoji: "🌊",
    eyebrowEn: "Major Arcana · XIV",
    eyebrowZh: "大阿卡纳 · XIV",
    titleEn: "Temperance",
    titleZh: "节制",
    metaEn: [
      ["Element", "Fire"],
      ["Planet", "Sagittarius"],
      ["Number", "14 — balance, integration"],
    ],
    metaZh: [
      ["元素", "火"],
      ["行星", "射手"],
      ["数字", "14 — 平衡，融合"],
    ],
    notesEn:
      "Temperance pours one vessel into another, creating not compromise but alchemy. Opposites do not cancel each other here — they become something finer.\n\nUpright: moderation, balance, healing, integration, patience.\nReversed: excess, imbalance, impatience, fragmentation.",
    notesZh:
      "节制将一只杯中的液体倒入另一只杯中，形成的不是折中，而是炼金术。对立的事物在这里并不互相抵消，而是被调和成更细腻的存在。\n\n正位：适度、平衡、疗愈、整合、耐心。\n逆位：过度、失衡、急躁、碎裂。",
  }),

  createCard({
    id: "tarot-devil",
    group: "major",
    displayNumber: "XV",
    emoji: "⛓",
    eyebrowEn: "Major Arcana · XV",
    eyebrowZh: "大阿卡纳 · XV",
    titleEn: "The Devil",
    titleZh: "恶魔",
    metaEn: [
      ["Element", "Earth"],
      ["Planet", "Capricorn"],
      ["Number", "15 — bondage, desire"],
    ],
    metaZh: [
      ["元素", "土"],
      ["行星", "摩羯"],
      ["数字", "15 — 束缚，欲望"],
    ],
    notesEn:
      "The Devil shows the chains we participate in: obsession, compulsion, shame, pleasure that turns into captivity. Often the lock is open, yet we remain.\n\nUpright: attachment, temptation, addiction, shadow, material entrapment.\nReversed: release, confronting shadow, loosening bonds, reclaiming agency.",
    notesZh:
      "恶魔展示的是人主动参与其中的锁链：执迷、强迫、羞耻、以及最终反过来囚禁人的享乐。很多时候锁其实没有上，但人仍停留其中。\n\n正位：依附、诱惑、成瘾、阴影、物质性的束缚。\n逆位：松绑、直面阴影、解除控制、找回主动权。",
  }),

  createCard({
    id: "tarot-tower",
    group: "major",
    displayNumber: "XVI",
    emoji: "⚡",
    eyebrowEn: "Major Arcana · XVI",
    eyebrowZh: "大阿卡纳 · XVI",
    titleEn: "The Tower",
    titleZh: "塔",
    metaEn: [
      ["Element", "Fire"],
      ["Planet", "Mars"],
      ["Number", "16 — sudden change"],
    ],
    metaZh: [
      ["元素", "火"],
      ["行星", "火星"],
      ["数字", "16 — 突变"],
    ],
    notesEn:
      "People fall from a tower struck by lightning. It is terrifying and necessary. The Tower represents the sudden destruction of something built on false foundations. It is uncomfortable, but it is honest.\n\nUpright: sudden change, upheaval, chaos, revelation, awakening.\nReversed: avoidance of catastrophe, delay, resisting necessary change.\n\nPersonal note: I find this card appears at moments of breakthrough in my research — when an experiment fails spectacularly, it often points toward the real answer.",
    notesZh:
      "人们从被闪电击中的塔上坠落。这令人恐惧，也是必要的。塔牌代表建立在虚假基础上的事物突然崩塌。它令人不适，但它是诚实的。\n\n正位：突如其来的变化、动荡、混乱、启示、觉醒。\n逆位：避免灾难、延迟、抵制必要的改变。\n\n个人笔记：我发现这张牌常出现在研究突破的时刻——当实验壮观地失败时，它往往反而指向真正的答案。",
  }),

  createCard({
    id: "tarot-star",
    group: "major",
    displayNumber: "XVII",
    emoji: "⭐",
    eyebrowEn: "Major Arcana · XVII",
    eyebrowZh: "大阿卡纳 · XVII",
    titleEn: "The Star",
    titleZh: "星星",
    metaEn: [
      ["Element", "Air"],
      ["Planet", "Aquarius"],
      ["Number", "17 — hope, serenity"],
    ],
    metaZh: [
      ["元素", "风"],
      ["行星", "水瓶"],
      ["数字", "17 — 希望，宁静"],
    ],
    notesEn:
      "After the Tower, the Star appears. It is the quiet light that returns after devastation — not naive optimism, but hope that has survived ruin.\n\nUpright: hope, healing, inspiration, openness, spiritual calm.\nReversed: discouragement, disconnection, dimmed faith, emotional exhaustion.",
    notesZh:
      "在塔之后，星星出现。它是废墟之后重新归来的微光，不是天真的乐观，而是经历毁坏之后仍残存的希望。\n\n正位：希望、疗愈、灵感、敞开、精神上的宁静。\n逆位：沮丧、失联、信念暗淡、情绪枯竭。",
  }),

  createCard({
    id: "tarot-moon",
    group: "major",
    displayNumber: "XVIII",
    emoji: "🌕",
    eyebrowEn: "Major Arcana · XVIII",
    eyebrowZh: "大阿卡纳 · XVIII",
    titleEn: "The Moon",
    titleZh: "月亮",
    metaEn: [
      ["Element", "Water"],
      ["Planet", "Pisces"],
      ["Number", "18 — illusion, dream"],
    ],
    metaZh: [
      ["元素", "水"],
      ["行星", "双鱼"],
      ["数字", "18 — 幻象，梦境"],
    ],
    notesEn:
      "The Moon is the realm of dreams, fear, projection, memory, and unstable light. Here, not everything false is useless — illusion itself can reveal the psyche.\n\nUpright: intuition, dream, uncertainty, illusion, the unconscious.\nReversed: confusion lifting, anxiety, deception, emotional fog.",
    notesZh:
      "月亮属于梦、恐惧、投射、记忆与不稳定的光。这里并不是一切幻象都毫无价值——幻象本身也会暴露灵魂。\n\n正位：直觉、梦境、不确定、幻觉、潜意识。\n逆位：迷雾渐散、焦虑、欺骗、情绪混沌。",
  }),

  createCard({
    id: "tarot-sun",
    group: "major",
    displayNumber: "XIX",
    emoji: "☀️",
    eyebrowEn: "Major Arcana · XIX",
    eyebrowZh: "大阿卡纳 · XIX",
    titleEn: "The Sun",
    titleZh: "太阳",
    metaEn: [
      ["Element", "Fire"],
      ["Planet", "Sun"],
      ["Number", "19 — vitality, clarity"],
    ],
    metaZh: [
      ["元素", "火"],
      ["行星", "太阳"],
      ["数字", "19 — 生命力，清晰"],
    ],
    notesEn:
      "The Sun is joy without apology, truth without shadow, life in full brightness. It is the relief of seeing clearly and being seen clearly.\n\nUpright: joy, vitality, clarity, confidence, success, warmth.\nReversed: temporary dimness, delayed joy, self-doubt, blocked expression.",
    notesZh:
      "太阳是无需道歉的喜悦，是没有阴影的真相，是明亮到极致的生命力。它意味着既能清楚看见，也能被清楚看见。\n\n正位：喜悦、生命力、清晰、自信、成功、温暖。\n逆位：短暂黯淡、快乐延迟、自我怀疑、表达受阻。",
  }),

  createCard({
    id: "tarot-judgement",
    group: "major",
    displayNumber: "XX",
    emoji: "📯",
    eyebrowEn: "Major Arcana · XX",
    eyebrowZh: "大阿卡纳 · XX",
    titleEn: "Judgement",
    titleZh: "审判",
    metaEn: [
      ["Element", "Fire"],
      ["Planet", "Pluto"],
      ["Number", "20 — awakening, reckoning"],
    ],
    metaZh: [
      ["元素", "火"],
      ["行星", "冥王星"],
      ["数字", "20 — 觉醒，清算"],
    ],
    notesEn:
      "Judgement is the call that cannot be ignored. It is a reckoning with the past, a rising into a truer self, a decision to answer what life is asking of you.\n\nUpright: awakening, renewal, absolution, reckoning, higher calling.\nReversed: self-doubt, avoidance of calling, refusal to change, unresolved past.",
    notesZh:
      "审判是一声无法忽略的召唤。它意味着与过去对峙、向更真实的自我苏醒，以及决定是否回应生命对你的要求。\n\n正位：觉醒、更新、宽恕、清算、更高召唤。\n逆位：自我怀疑、逃避召唤、拒绝改变、过去未被解决。",
  }),

  createCard({
    id: "tarot-world",
    group: "major",
    displayNumber: "XXI",
    emoji: "🌍",
    eyebrowEn: "Major Arcana · XXI",
    eyebrowZh: "大阿卡纳 · XXI",
    titleEn: "The World",
    titleZh: "世界",
    metaEn: [
      ["Element", "Earth"],
      ["Planet", "Saturn"],
      ["Number", "21 — completion, wholeness"],
    ],
    metaZh: [
      ["元素", "土"],
      ["行星", "土星"],
      ["数字", "21 — 完成，圆满"],
    ],
    notesEn:
      "The World is completion — not perfection, but wholeness. A cycle closes here, and because it closes fully, something new may begin honestly.\n\nUpright: completion, integration, achievement, wholeness, fulfillment.\nReversed: unfinished lessons, delay, fragmentation, inability to close a cycle.",
    notesZh:
      "世界代表完成——不是完美，而是圆满。一个循环在这里真正闭合，也正因如此，新的开始才能诚实地出现。\n\n正位：完成、整合、成就、圆满、实现。\n逆位：课题未尽、延迟、碎裂、无法结束一个循环。",
  }),
];

const majorArcana = Object.fromEntries(majorArcanaEntries);

// -----------------------------
// Minor Arcana config
// -----------------------------

const suitConfig = {
  wands: {
    suitKey: "wands",
    titleEn: "Wands",
    titleZh: "权杖",
    elementEn: "Fire",
    elementZh: "火",
    emoji: "🪄",
    themesEn: "will, action, ambition, creative force",
    themesZh: "意志、行动、野心、创造力",
  },
  cups: {
    suitKey: "cups",
    titleEn: "Cups",
    titleZh: "圣杯",
    elementEn: "Water",
    elementZh: "水",
    emoji: "🏆",
    themesEn: "emotion, love, intuition, relationship",
    themesZh: "情感、爱、直觉、关系",
  },
  swords: {
    suitKey: "swords",
    titleEn: "Swords",
    titleZh: "宝剑",
    elementEn: "Air",
    elementZh: "风",
    emoji: "🗡️",
    themesEn: "thought, conflict, truth, language",
    themesZh: "思想、冲突、真相、语言",
  },
  pentacles: {
    suitKey: "pentacles",
    titleEn: "Pentacles",
    titleZh: "星币",
    elementEn: "Earth",
    elementZh: "土",
    emoji: "🪙",
    themesEn: "material life, work, body, stability",
    themesZh: "物质生活、工作、身体、稳定",
  },
};

const ranks = [
  {
    key: "ace",
    nameEn: "Ace",
    short: "A",
    nameZh: "王牌",
    rankType: "pip",
  },
  {
    key: "two",
    nameEn: "Two",
    short: "2",
    nameZh: "二",
    rankType: "pip",
  },
  {
    key: "three",
    nameEn: "Three",
    short: "3",
    nameZh: "三",
    rankType: "pip",
  },
  {
    key: "four",
    nameEn: "Four",
    short: "4",
    nameZh: "四",
    rankType: "pip",
  },
  {
    key: "five",
    nameEn: "Five",
    short: "5",
    nameZh: "五",
    rankType: "pip",
  },
  {
    key: "six",
    nameEn: "Six",
    short: "6",
    nameZh: "六",
    rankType: "pip",
  },
  {
    key: "seven",
    nameEn: "Seven",
    short: "7",
    nameZh: "七",
    rankType: "pip",
  },
  {
    key: "eight",
    nameEn: "Eight",
    short: "8",
    nameZh: "八",
    rankType: "pip",
  },
  {
    key: "nine",
    nameEn: "Nine",
    short: "9",
    nameZh: "九",
    rankType: "pip",
  },
  {
    key: "ten",
    nameEn: "Ten",
    short: "10",
    nameZh: "十",
    rankType: "pip",
  },
  {
    key: "page",
    nameEn: "Page",
    short: "P",
    nameZh: "侍从",
    rankType: "court",
  },
  {
    key: "knight",
    nameEn: "Knight",
    short: "N",
    nameZh: "骑士",
    rankType: "court",
  },
  {
    key: "queen",
    nameEn: "Queen",
    short: "Q",
    nameZh: "王后",
    rankType: "court",
  },
  {
    key: "king",
    nameEn: "King",
    short: "K",
    nameZh: "国王",
    rankType: "court",
  },
];

const minorCardMeanings = {
  wands: {
    ace: {
      en: "A spark. The beginning of desire, energy, invention, or a new undertaking that asks to be acted upon.",
      zh: "火花初现。它象征欲望、能量、创造冲动或新事业的开端，关键在于是否真正去行动。",
    },
    two: {
      en: "Vision before movement. Expansion, planning, distance, and the moment of looking beyond what is already built.",
      zh: "行动之前的远望。它关乎扩张、规划、眺望更远的地方，以及走出既有边界的念头。",
    },
    three: {
      en: "Momentum after commitment. Growth, enterprise, and the first signs that effort is beginning to travel outward.",
      zh: "投入之后的推进。它象征成长、事业扩展，以及努力开始产生外部回应。",
    },
    four: {
      en: "Stability in fire. Celebration, homecoming, temporary rest, and the joy of reaching a meaningful threshold.",
      zh: "火元素中的稳定。它是庆祝、归属、阶段性完成，以及抵达某个值得停下来欢庆的节点。",
    },
    five: {
      en: "Competing wills. Friction, rivalry, scattered effort, and the heat generated when many desires occupy the same space.",
      zh: "意志之间的碰撞。它意味着摩擦、竞争、分散的努力，以及多种欲望同时争夺空间时产生的热度。",
    },
    six: {
      en: "Recognition and visible success. A moment of triumph, reputation, or being carried forward by public affirmation.",
      zh: "被看见的成功。它意味着胜利、声望，或因为外界认可而获得推进。",
    },
    seven: {
      en: "Holding the high ground. Defense, conviction, and the exhaustion of maintaining one's position against pressure.",
      zh: "守住高地。它关乎防守、立场与信念，也关乎在压力之下坚持自我的疲惫。",
    },
    eight: {
      en: "Acceleration. Messages, movement, rapid development, and a period in which events advance faster than expected.",
      zh: "加速。它象征消息、移动、快速进展，以及事情比预想更快展开的阶段。",
    },
    nine: {
      en: "Resilience under strain. Weariness, persistence, and the guarded strength that appears after repeated tests.",
      zh: "疲惫中的韧性。它意味着在一再试炼之后形成的警觉、坚持与不肯轻易退让。",
    },
    ten: {
      en: "Burdened fire. Responsibility, overload, and the heaviness of carrying too much for too long.",
      zh: "被负担压住的火。它意味着责任、超载，以及长期独自承担过多重量的疲惫。",
    },
    page: {
      en: "A messenger of fire. Curiosity, creative impulse, youthful boldness, and the first urge to explore something alive.",
      zh: "火的使者。它象征好奇心、创造冲动、年轻的大胆，以及想要去试一试的热情。",
    },
    knight: {
      en: "Fire in motion. Passion, pursuit, daring, and action that may be inspiring but unstable.",
      zh: "流动中的火。它意味着激情、追逐、冒险，也意味着一种耀眼却未必稳定的行动力。",
    },
    queen: {
      en: "Mature fire. Charisma, independence, magnetism, warmth, and the ability to animate others without losing selfhood.",
      zh: "成熟的火。它是魅力、独立、吸引力、温暖，以及在照亮他人时仍保有自我的能力。",
    },
    king: {
      en: "Directed fire. Leadership, command, vision, entrepreneurial force, and the disciplined use of ambition.",
      zh: "被引导的火。它象征领导力、统御、远见、事业心，以及对野心的有意识运用。",
    },
  },

  cups: {
    ace: {
      en: "An opening of the heart. New feeling, tenderness, spiritual receptivity, and the beginning of emotional flow.",
      zh: "心的开启。它象征新的情感、温柔、灵性上的接纳，以及情绪开始流动。",
    },
    two: {
      en: "Mutuality. Attraction, partnership, emotional mirroring, and the fragile beauty of sincere connection.",
      zh: "相互回应。它关乎吸引、伙伴关系、情感映照，以及真诚连接的脆弱与美。",
    },
    three: {
      en: "Shared joy. Friendship, celebration, reunion, and emotional abundance made communal.",
      zh: "共同的欢愉。它象征友情、庆祝、重聚，以及被分享出来的情感丰盛。",
    },
    four: {
      en: "Emotional withdrawal. Apathy, contemplation, dissatisfaction, and the refusal of what no longer nourishes.",
      zh: "情感上的撤退。它意味着冷淡、沉思、不满足，以及对无法再滋养自己的事物失去兴趣。",
    },
    five: {
      en: "Loss and grief. Mourning what has been spilled, while not yet seeing what remains.",
      zh: "失落与哀伤。它是对已经失去之物的凝视，也是尚未看见仍然留存之物的阶段。",
    },
    six: {
      en: "Memory and tenderness. Nostalgia, innocence, past affection, and the sweetness of what once felt safe.",
      zh: "记忆与柔情。它关乎怀旧、纯真、旧日情感，以及曾经令人安心的温柔。",
    },
    seven: {
      en: "Seductive possibility. Fantasy, projection, emotional dispersion, and the danger of wanting too many unreal things.",
      zh: "诱人的可能性。它象征幻想、投射、情感分散，以及被太多虚幻选项吸引的危险。",
    },
    eight: {
      en: "Leaving in search of depth. Voluntary departure, emotional maturity, and the recognition that something familiar is no longer enough.",
      zh: "为了更深的东西而离开。它关乎主动告别、情感成熟，以及意识到熟悉之物已不再足够。",
    },
    nine: {
      en: "Fulfillment and pleasure. Emotional satisfaction, comfort, and the enjoyment of desire made visible.",
      zh: "满足与愉悦。它象征情感上的满足、舒适，以及愿望被实现后的享受。",
    },
    ten: {
      en: "Emotional completion. Harmony, family, belonging, and the rare vision of relational fullness.",
      zh: "情感上的圆满。它关乎和谐、家庭、归属，以及关系层面难得的完整感。",
    },
    page: {
      en: "A messenger of feeling. Sensitivity, intuition, imagination, and the early language of the heart.",
      zh: "情感的使者。它象征敏感、直觉、想象力，以及心开始说话时最初的语言。",
    },
    knight: {
      en: "The romantic movement of feeling. Charm, invitation, emotional pursuit, and the poetic side of desire.",
      zh: "情感的主动推进。它关乎浪漫、邀请、追求，以及欲望中偏诗意的一面。",
    },
    queen: {
      en: "Mature water. Emotional intelligence, compassion, receptivity, and deep interior listening.",
      zh: "成熟的水。它象征情感智慧、共情、接纳，以及深度倾听内心与他人的能力。",
    },
    king: {
      en: "Governed feeling. Emotional steadiness, wisdom, care, and the ability to remain deep without becoming chaotic.",
      zh: "被驾驭的情感。它意味着稳定、智慧、照料，以及在情绪深处仍保持平衡的能力。",
    },
  },

  swords: {
    ace: {
      en: "A blade of clarity. Truth, decision, mental breakthrough, and the sharp beginning of discernment.",
      zh: "清晰之刃。它象征真相、决断、思维突破，以及分辨力的锋利开端。",
    },
    two: {
      en: "Stalemate. Suspension, guarded indecision, and the effort required to keep conflict temporarily balanced.",
      zh: "僵局。它关乎暂停、防御性的犹豫，以及勉强维持平衡所需的紧绷。",
    },
    three: {
      en: "Pain that cannot be prettified. Heartbreak, rupture, grief, and truth received as wound.",
      zh: "无法被粉饰的痛。它象征心碎、断裂、哀伤，以及以伤口形式抵达的真相。",
    },
    four: {
      en: "Mental rest after strain. Recovery, retreat, silence, and the necessity of stepping back from battle.",
      zh: "紧绷之后的休止。它意味着恢复、退避、沉默，以及从冲突中暂时抽离的必要。",
    },
    five: {
      en: "Conflict without grace. Defeat, hollow victory, humiliation, and the cost of winning badly.",
      zh: "失去体面的冲突。它关乎失败、空洞的胜利、羞辱，以及以错误方式获胜的代价。",
    },
    six: {
      en: "Transition through difficulty. Movement away from pain, not into certainty but into relative calm.",
      zh: "穿越困难的过渡。它意味着离开痛苦，不一定走向确定，但至少走向较为平静的水域。",
    },
    seven: {
      en: "Evasion and strategy. Secrecy, cunning, partial truths, and the ethics of indirect action.",
      zh: "规避与策略。它关乎隐秘、机巧、半真半假的叙事，以及迂回行动的伦理问题。",
    },
    eight: {
      en: "Constriction of mind. Limitation, fear, internal imprisonment, and the belief that there is no exit.",
      zh: "思想上的束缚。它象征限制、恐惧、内在囚禁，以及误以为自己没有出口。",
    },
    nine: {
      en: "Night thought. Anxiety, guilt, mental torment, and the amplification of suffering in solitude.",
      zh: "深夜的思绪。它意味着焦虑、愧疚、精神折磨，以及独处时被放大的痛苦。",
    },
    ten: {
      en: "The end of a mental ordeal. Collapse, betrayal, finality, and the harsh mercy of a thing being over.",
      zh: "精神苦难的终点。它关乎崩塌、背叛、终结，以及某件事终于结束时残酷却真实的解脱。",
    },
    page: {
      en: "A messenger of thought. Curiosity, vigilance, observation, and the first sharpening of the mind.",
      zh: "思想的使者。它象征好奇、警觉、观察，以及思维开始变得锋利。",
    },
    knight: {
      en: "Directed intellect in attack. Speed, argument, conviction, urgency, and the danger of force without reflection.",
      zh: "冲锋中的理智。它关乎速度、论辩、确信、急迫，也关乎未经理性反省的冲动。",
    },
    queen: {
      en: "Clear-sighted intelligence. Discernment, honesty, distance, and compassion stripped of illusion.",
      zh: "清醒的智慧。它象征分辨力、诚实、适度距离，以及去除幻象后的清明与悲悯。",
    },
    king: {
      en: "Mastery of reason. Authority of mind, law, principle, analysis, and the disciplined use of truth.",
      zh: "理性的掌控者。它意味着思维权威、法则、原则、分析，以及对真相的自觉运用。",
    },
  },

  pentacles: {
    ace: {
      en: "Material beginning. Opportunity, embodiment, practical seed, and the arrival of something that can be built.",
      zh: "物质层面的开始。它象征机会、落地、现实中的种子，以及某种可以被慢慢建造的事物。",
    },
    two: {
      en: "Balancing resources. Adaptation, multitasking, fluctuation, and the dance of managing finite reality.",
      zh: "资源的平衡。它关乎适应、多线处理、起伏变化，以及在有限现实中保持运转。",
    },
    three: {
      en: "Craft and collaboration. Skill, apprenticeship, visible effort, and building something with others.",
      zh: "技艺与协作。它象征能力、学习、可被看见的劳动，以及与他人共同建造。",
    },
    four: {
      en: "Holding tightly. Security, control, possession, and the fear beneath material self-protection.",
      zh: "紧握不放。它关乎安全、控制、占有，以及物质性自我保护之下的恐惧。",
    },
    five: {
      en: "Material hardship. Scarcity, exclusion, vulnerability, and the pain of feeling abandoned in need.",
      zh: "现实层面的匮乏。它意味着贫乏、被排除、脆弱，以及在困境中感到无人回应的痛。",
    },
    six: {
      en: "Giving and receiving. Exchange, generosity, power imbalance, and the ethics of material support.",
      zh: "给予与接受。它关乎交换、慷慨、权力不对等，以及支持与施予中的伦理。",
    },
    seven: {
      en: "Long-term cultivation. Patience, assessment, delayed reward, and the realism of gradual growth.",
      zh: "长期耕耘。它象征耐心、评估、延迟回报，以及对缓慢成长的现实认识。",
    },
    eight: {
      en: "Dedicated labor. Repetition, mastery, discipline, and the dignity of refining craft over time.",
      zh: "专注的劳动。它关乎重复、熟练、纪律，以及在时间中打磨技艺的尊严。",
    },
    nine: {
      en: "Earned independence. Refinement, self-sufficiency, cultivated pleasure, and the beauty of stable achievement.",
      zh: "挣得的独立。它象征精致、自足、被细致经营过的愉悦，以及稳定成果所带来的美。",
    },
    ten: {
      en: "Legacy and lasting structure. Family wealth, continuity, inheritance, and material life extended across generations.",
      zh: "传承与持久结构。它关乎家族财富、延续、继承，以及跨代展开的物质生活。",
    },
    page: {
      en: "A messenger of earth. Study, diligence, practicality, and the first serious gesture toward making something real.",
      zh: "土地的使者。它象征学习、认真、务实，以及第一次真正想把事情做实的姿态。",
    },
    knight: {
      en: "Steady effort. Reliability, patience, persistence, and work accomplished through consistency rather than brilliance.",
      zh: "稳定的努力。它意味着可靠、耐心、坚持，以及靠持续而非炫目完成的工作。",
    },
    queen: {
      en: "Nurturing material intelligence. Care, grounded abundance, embodiment, and the art of sustaining life well.",
      zh: "带有滋养性的现实智慧。它象征照料、踏实的丰盛、与身体和现实的连接，以及把生活照顾好的能力。",
    },
    king: {
      en: "Mastery of the material realm. Stability, stewardship, prosperity, and wise command over resources.",
      zh: "对现实世界的掌控。它关乎稳定、管理、丰裕，以及对资源成熟而审慎的运用。",
    },
  },
};

function buildMinorCard(suit, rank) {
  const meaning = minorCardMeanings[suit.suitKey][rank.key];

  const titleEn = `${rank.nameEn} of ${suit.titleEn}`;
  const titleZh =
    rank.rankType === "court"
      ? `${suit.titleZh}${rank.nameZh}`
      : `${suit.titleZh}${rank.nameZh}`;

  const id = `tarot-${rank.key}-${suit.suitKey}`;

  return [
    id,
    {
      group: suit.suitKey,
      displayNumber: rank.short,
      emoji: suit.emoji,
      eyebrowEn: `${suit.titleEn} · ${rank.nameEn}`,
      eyebrowZh: `${suit.titleZh} · ${rank.nameZh}`,
      titleEn,
      titleZh,
      metaEn: [
        ["Suit", suit.titleEn],
        ["Element", suit.elementEn],
        ["Theme", suit.themesEn],
      ],
      metaZh: [
        ["花色", suit.titleZh],
        ["元素", suit.elementZh],
        ["主题", suit.themesZh],
      ],
      ingrEn: [],
      ingrZh: [],
      stepsEn: [],
      stepsZh: [],
      notesEn:
        `${meaning.en}\n\n` +
        `As a ${suit.titleEn.toLowerCase()} card, it belongs to the realm of ${suit.themesEn}. ` +
        `In readings, this card usually speaks through ordinary life rather than overwhelming destiny. ` +
        `Its meaning depends on context, but it often asks how this suit's energy is being expressed, blocked, matured, or transformed.\n\n` +
        `Upright: the constructive expression of ${suit.themesEn}.\n` +
        `Reversed: blockage, distortion, excess, or immaturity in this area.`,
      notesZh:
        `${meaning.zh}\n\n` +
        `作为${suit.titleZh}牌，它属于“${suit.themesZh}”这一领域。与大阿卡纳相比，小阿卡纳更多对应日常生活中的具体处境，而不是命运层面的巨大转折。` +
        `它的含义会随语境而变化，但通常都在追问：这一花色的能量，是如何被表达、压抑、成熟，或者扭曲的。\n\n` +
        `正位：这一花色能量的建设性表达。\n` +
        `逆位：这一领域中的阻塞、失衡、过度或不成熟。`,
    },
  ];
}

const minorArcana = Object.fromEntries(
  Object.values(suitConfig).flatMap((suit) => ranks.map((rank) => buildMinorCard(suit, rank)))
);

// -----------------------------
// all cards
// -----------------------------

export const recipes = {
  ...majorArcana,
  ...minorArcana,
};

// 给页面渲染卡面用
export const tarotItems = Object.entries(recipes).map(([id, card]) => ({
  id,
  group: card.group,
  displayNumber: card.displayNumber,
  emoji: card.emoji,
  titleEn: card.titleEn,
  titleZh: card.titleZh,
}));

export default recipes;