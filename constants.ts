import { ServicePackage, ProcessStep, NoticeItem } from './types';

export const WECHAT_ID = "O_oyuh";

export const SERVICES: ServicePackage[] = [
  {
    title: "✨ 简易指引",
    price: "¥29.9",
    cardCount: "3-5张牌",
    description: "针对【单一是非题】或【二选一】。快速给出一个倾向性结论，不涉及深度分析。",
    iconType: 'lightbulb'
  },
  {
    title: "🔍 现状解析",
    price: "¥59.9",
    cardCount: "3-5张牌",
    description: "看感情发展、对方想法、事业运势等。通过经典牌阵，为你解读当下的能量状态与近景趋势。",
    iconType: 'cards'
  },
  {
    title: "🌟 深度透视 / 四季运势", 
    price: "¥69.9",
    cardCount: "7-9张牌",
    description: "包含深度单事解析（细节更丰富）；或开启季度运势，预见未来三个月的感情/事业/财富走向。",
    iconType: 'star'
  },
  {
    title: "🧭 终极全览 / 年度运势",
    price: "¥99.9",
    cardCount: "10-12张牌",
    description: "凯尔特十字牌阵。全方位透视事件长线走向、潜在阻碍与核心关注点，适合深度复盘。",
    iconType: 'compass'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "添加微信并选购",
    description: "明确你想探讨的核心问题，选择套餐。"
  },
  {
    id: 2,
    title: "转账确认",
    description: "确认订单后，为你开启专属能量链接（统一先款后测）。"
  },
  {
    id: 3,
    title: "案主提问",
    description: "提供性别/年龄及简要的背景描述。"
  },
  {
    id: 4,
    title: "解读与反馈",
    description: "展示牌阵，提供详尽的文字解析，可补充细节并追问。"
  }
];

export const NOTICES: NoticeItem[] = [
  {
    title: "五不测",
    content: "不测生死疾病、法律诉讼、投机赌博、他人隐私及违反公序良俗之问。"
  },
  {
    title: "专注当下",
    content: "简练的背景和积极的互动反馈有助于塔罗师更精准地捕捉现状。"
  },
  {
    title: "止于塔罗",
    content: "解读结束后请给彼此留出消化建议的空间。我是你的塔罗向导，而非心理咨询师或日常陪聊。"
  },
  {
    title: "正向显化",
    content: "塔罗并非定论，请积极相信美好的发生。"
  }
];