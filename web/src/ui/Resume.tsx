import { motion } from 'framer-motion'
import { FOCUS_POINTS } from '../data/focusPoints'

// 履历数据（双语）。英文为译稿，可按需润色。
interface ResumeEntry {
  period: string
  place: string
  role?: string
  points?: string[]
}
const RESUME: Record<'en' | 'zh', { title: string; entries: ResumeEntry[] }> = {
  "en": {
    "title": "Resume 简历",
    "entries": [
      {
        "period": "2021.09–2024.10",
        "place": "Universiti Kebangsaan Malaysia (QS130)",
        "role": "Bachelor · Business Administration",
        "points": [
          "Coursework: Marketing Management, Economics and Business Mathematics, Business Statistics, Organizational Behaviour, International Business, Business Communication and Operations Management."
        ]
      },
      {
        "period": "2023.12–2024.06",
        "place": "Zuspresso (M) Sdn. Bhd.",
        "role": "Overseas Social Media Operations Intern",
        "points": [
          "Market research and product promotion: Reviewed customer preferences, social feedback and competitor content to identify product messages and inform launch themes, content planning and channel communication.",
          "Social content execution: Supported 50 Instagram posts through planning, shooting, editing, English copy, hashtags and asset organization.",
          "Channel coordination and review: Supported online launch and FamilyMart communication with materials, store information and schedules. Completed 15+ reviews to inform content updates; the account gained 11k+ followers during the project period."
        ]
      },
      {
        "period": "2024.10–2025.05",
        "place": "Xuanhua Intelligence · Beijing",
        "role": "Business Assistant Intern",
        "points": [
          "Client needs and business follow-up: Supported university and Southeast Asia AI education cooperation by clarifying needs, trials and cooperation terms, preparing product information and proposals, and maintaining a client register and follow-up list.",
          "Contracts and business documents: Checked service scope, cooperation terms and payment milestones in Chinese and English agreements, consolidated revisions, tracked versions and coordinated approval, stamping, filing and handoff with business and finance teams.",
          "Project coordination: Prepared university demos, pilots and meetings; confirmed attendees, accounts and training materials, recorded owners and deadlines, and consolidated weekly progress and unresolved product issues.",
          "AI-assisted workflows: Organized recurring client follow-up and document preparation into SOPs, checklists and reusable templates."
        ]
      },
      {
        "period": "2025.08–Present (Graduation Feb 2027)",
        "place": "University of Sydney (QS28)",
        "role": "Master · Marketing",
        "points": [
          "Coursework: Marketing Analytics, Consumer Behaviour, Marketing Research, Customer Analytics and CRM, B2B Marketing and New Product Marketing."
        ]
      },
      {
        "period": "2025.12–2026.02",
        "place": "Beijing Sohu New Media",
        "role": "AI Product Operations Intern",
        "points": [
          "Research and campaign planning: Used feedback and pricing surveys to understand needs, usage scenarios, willingness to pay and price acceptance. Supported selected online acquisition plans and offline technology events.",
          "Data analysis: Tracked core metrics and used AI to build a lightweight operations dashboard that identified user journey drop-off points.",
          "Marketing materials and customer communication: Created 100+ WeChat, Xiaohongshu and community content pieces covering product information, features, industry cases and FAQs; used audience and engagement data to guide content and supported finance and AI creator screening and publishing.",
          "Channel promotion and review: Coordinated promotion across digital channels and events, compared titles, covers and content through A/B variants, and adjusted spending using performance. Registrations rose 50% versus the prior week; first-topic creation rate rose approximately 15% relatively."
        ]
      }
    ]
  },
  "zh": {
    "title": "Resume 简历",
    "entries": [
      {
        "period": "2021.09–2024.10",
        "place": "马来西亚国立大学（QS130）",
        "role": "本科（工商管理专业）",
        "points": [
          "主修课程：营销管理、经济与商业数学、商业统计、组织行为、国际商务、商务沟通、运营管理。"
        ]
      },
      {
        "period": "2023.12–2024.06",
        "place": "Zuspresso (M) Sdn. Bhd.",
        "role": "海外新媒体运营实习生",
        "points": [
          "市场调研与产品推广：参与 ZUS Coffee 新品推广前期调研，结合目标客户偏好、社媒反馈及竞品内容表现，整理产品卖点与用户关注点，为新品宣传主题、内容安排及渠道传播提供建议。",
          "社媒内容执行：协助完成50条 Instagram 内容发布，参与选题、拍摄、剪辑、英文文案、hashtag 与素材整理。",
          "渠道协同与数据复盘：配合产品线上首发及 FamilyMart 线下渠道传播，协助整理宣传素材、门店信息与发布排期；每周跟踪数据，累计输出15+次内容复盘；推动后续内容优化，协同带动账号粉丝增长1.1w+。"
        ]
      },
      {
        "period": "2024.10–2025.05",
        "place": "北京织知玄华智能科技有限公司",
        "role": "商务助理实习生",
        "points": [
          "客户需求与商务跟进：围绕高校及东南亚 AI 教育产品合作，协助梳理客户需求、试用安排及合作条件，准备产品介绍与合作方案；通过邮件和会议跟进反馈，维护客户台账及待办清单，支持合作沟通与后续洽谈。",
          "合同核对与商务资料管理：协助跟进国内及东南亚合作协议，核对中英文合同中的服务范围、合作条件及付款节点，汇总修改意见并跟进版本确认；对接业务、财务完成审批、盖章及归档，支持协议签署与项目交接。",
          "项目协调与进度管理：协助推进高校产品演示、试点及合作会议，提前确认参会人员、演示账号和培训材料；会后整理纪要，明确责任人与完成时间，跟进产品使用问题，每周汇总项目进度及待办事项，支持按计划交付。",
          "AI 辅助与流程整理：利用 AI 将客户跟进及资料准备中的重复工作整理为 SOP，配套检查清单和常用模板。"
        ]
      },
      {
        "period": "2025.08–至今（2027.02毕业）",
        "place": "悉尼大学(QS28)",
        "role": "硕士（市场营销专业）",
        "points": [
          "主修课程：营销分析、消费者行为、市场研究、客户分析与CRM、B2B营销、新产品营销。"
        ]
      },
      {
        "period": "2025.12–2026.02",
        "place": "北京搜狐新媒体信息有限公司",
        "role": "AI 产品运营实习生",
        "points": [
          "市场调研与营销策划：通过用户反馈及价格问卷梳理客户需求，分析产品使用场景、付费意愿与价格接受度，为产品推广及触达策略提供依据；协助制定部分线上拉新方案，参与线下科技活动筹备，推进产品推广与活动执行。",
          "数据分析：跟踪核心运营指标，运用 AI 辅助搭建轻量级运营分析看板，识别用户路径中的流失节点。",
          "营销材料与客户沟通：根据用户反馈整理高频需求，累计输出100+条公众号、小红书及社群内容，覆盖产品介绍、功能说明及行业案例FAQ；使用粉丝画像与互动数据调整内容重点，参与金融、AI垂类博主筛选及推广材料准备与上线跟踪。",
          "渠道推广与效果复盘：协同小红书、公众号、科技活动及社群渠道开展产品推广，对标题、首图和内容开展A/B测试，依据投放效果调整渠道预算；投放期新增注册数较前一周提升50%，首次专题创建率相对提升约15%。"
        ]
      }
    ]
  }
}

// 履历条目依次对应 glb 里的聚焦锚点（相机停靠点），顺序须与 entries 一致。
// 名单是唯一真源，见 data/focusPoints.ts（Scene.tsx 也从那里取）。
const POINT_ORDER = FOCUS_POINTS

const EASE = [0.22, 1, 0.36, 1]
const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}
const itemV = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

function Entry({ entry, index }: { entry: ResumeEntry; index: number }) {
  return (
    <motion.div
      className="tl-entry"
      data-point={POINT_ORDER[index]}
      variants={containerV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
    >
      <motion.span className="tl-dot" variants={itemV} aria-hidden="true" />
      {/* tl-body 包住文字内容（点保持在外做时间轴标记）：移动端可给它加卡片衬底，
          且它紧贴内容高度，不含 tl-entry 用于排布的大 padding。
          用普通 div（非 motion）：framer 变体经 React context 穿透它，叶子元素仍是
          tl-entry 的直接 stagger 子级，入场动画与包裹前完全一致。 */}
      <div className="tl-body">
        <motion.div className="tl-period" variants={itemV}>
          {entry.period}
        </motion.div>
        <motion.div className="tl-head" variants={itemV}>
          <h3 className="tl-place">{entry.place}</h3>
        </motion.div>
        {entry.role && (
          <motion.div className="tl-role" variants={itemV}>
            {entry.role}
          </motion.div>
        )}
        {entry.points && (
          <motion.ul className="tl-points" variants={itemV}>
            {entry.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.div>
  )
}

export default function Resume({ lang }: { lang: 'en' | 'zh' }) {
  const data = RESUME[lang]
  return (
    <section className="resume" lang={lang}>
      <motion.h2
        className="resume-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {data.title}
      </motion.h2>
      <div className="timeline">
        {data.entries.map((e, i) => (
          <Entry key={i} entry={e} index={i} />
        ))}
      </div>
      <div className="resume-summary">
        <h3>{lang === 'zh' ? '综合评价' : 'Profile & Skills'}</h3>
        <dl>
          {(lang === 'zh' ? [
            ['个人标签', '具备市场调研、客户沟通及商务项目协作经历，英语可作为工作语言。'],
            ['营销与客户', '能结合客户需求整理产品卖点及推广材料，跟踪用户反馈与营销效果，支持客户沟通、产品介绍及推广方案调整。'],
            ['商务协作', '合同信息核对、合作进度跟踪、跨部门沟通、资料交接与归档，协同推进问题处理及项目落地。'],
            ['AI 工具', '具备运用 AI 辅助搭建运营看板、分析数据的经验，并能梳理重复性工作，形成 SOP、检查清单和常用模板。'],
            ['数据分析', 'Excel、SPSS、SQL（基础）'],
            ['内容运营', '小红书、Instagram内容策划、Canva、剪映、Figma（基础）、公众号'],
          ] : [
            ['Profile', 'Market research, client communication and business project coordination experience; English as a working language.'],
            ['Marketing & Clients', 'Turn client needs into product messages and marketing materials, review feedback and performance, and support campaign updates.'],
            ['Business Coordination', 'Contract checks, cooperation tracking, cross-team communication, document handoff and filing.'],
            ['AI Tools', 'AI-assisted operations dashboards, data analysis, SOPs, checklists and reusable templates.'],
            ['Data Analysis', 'Excel, SPSS, SQL (basic)'],
            ['Content Operations', 'Xiaohongshu, Instagram, Canva, Jianying, Figma (basic), WeChat Official Accounts'],
          ]).map(([label, copy]) => <div key={label}><dt>{label}</dt><dd>{copy}</dd></div>)}
        </dl>
        <div className="resume-contact">
          <span>{lang === 'zh' ? '求职地点：上海' : 'Location: Shanghai'}</span>
          <a href="mailto:1286212012@qq.com">1286212012@qq.com</a>
          <a href="tel:18633929971">18633929971</a>
        </div>
      </div>
    </section>
  )
}
