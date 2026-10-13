export type WorkLanguage = 'zh' | 'en'

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export type WorkItem = WorkListItem

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export type WorksCopy = WorksLang

export const WORKS: Record<WorkLanguage, WorksLang> = {
  "zh": {
    "title": "项目经历",
    "closeLabel": "返回",
    "openLabel": "展开作品",
    "hint": "继续下滑",
    "awardsLabel": "项目成果",
    "visitLabel": "查看完整项目",
    "detailPlaceholder": "项目详情",
    "phImageLabel": "项目预览",
    "phButtonLabel": "打开项目",
    countLabel: (n: number) => `${n} 个项目`,
    "sections": [
      {
        "id": "project-1",
        "no": "01",
        "title": "营销策划与数据复盘",
        "tagline": "市场调研｜营销执行｜渠道推广｜AI分析",
        "items": [
          {
            "name": "AI 产品营销策划与渠道复盘",
            "meta": "AI Product Marketing & Channel Review",
            "slug": "ai-news-dashboard",
            "tags": [
              "调研与策划：梳理用户需求，协助拉新方案与科技活动",
              "材料与沟通：100+条内容，覆盖产品、教程及行业FAQ",
              "数据与推广：AI看板定位流失，比较内容并调整预算",
              "结果与复盘：新增注册较前周+50%，首次创建率相对约+15%"
            ]
          }
        ]
      },
      {
        "id": "project-2",
        "no": "02",
        "title": "客户合作与项目推进",
        "tagline": "客户需求｜商务合同｜进度跟踪｜AI SOP",
        "items": [
          {
            "name": "AI 教育产品客户合作与项目推进",
            "meta": "AI Education Client Cooperation & Project Delivery",
            "slug": "ai-education-partnership",
            "tags": [
              "客户跟进：梳理需求、试用条件，维护台账与待办",
              "商务支持：核对协议、跟进版本和审批，归档交接",
              "项目推进：准备演示与会议，按负责人和期限跟进",
              "AI流程：将重复工作整理为SOP、清单及常用模板"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "新品推广与渠道协同",
        "tagline": "市场调研｜社媒内容｜渠道传播｜效果复盘",
        "items": [
          {
            "name": "ZUS Coffee 新品推广与渠道协同",
            "meta": "ZUS Coffee Product Launch & Channel Coordination",
            "slug": "zus-everywhere",
            "tags": [
              "推广调研：结合用户偏好与竞品表现提炼新品卖点",
              "内容执行：参与50条Instagram内容制作与发布",
              "渠道协同：对齐线上首发与FamilyMart物料、排期",
              "复盘优化：15+次内容复盘，账号粉丝增长1.1w+"
            ]
          }
        ]
      }
    ]
  },
  "en": {
    "title": "Project Experience",
    "closeLabel": "Back",
    "openLabel": "Open case",
    "hint": "Scroll to continue",
    "awardsLabel": "Outcomes",
    "visitLabel": "View full case",
    "detailPlaceholder": "Project details",
    "phImageLabel": "Project preview",
    "phButtonLabel": "Open project",
    countLabel: (n: number) => `${n} projects`,
    "sections": [
      {
        "id": "project-1",
        "no": "01",
        "title": "Campaign Planning & Data Review",
        "tagline": "Research · Campaigns · Channels · AI Analysis",
        "items": [
          {
            "name": "AI Product Marketing & Channel Review",
            "meta": "Research, Marketing Materials & Performance Review",
            "slug": "ai-news-dashboard",
            "tags": [
              "Research: Clarified needs and supported acquisition plans and events",
              "Communication: 100+ posts, product guides and industry FAQs",
              "Data: Used an AI dashboard to review drop-offs and channel spending",
              "Review: +50% registrations and approximately +15% relative first-topic creation rate"
            ]
          }
        ]
      },
      {
        "id": "project-2",
        "no": "02",
        "title": "Client Cooperation & Project Delivery",
        "tagline": "Clients · Contracts · Delivery · AI SOPs",
        "items": [
          {
            "name": "AI Education Client Cooperation & Project Delivery",
            "meta": "Needs, Business Documents & Project Coordination",
            "slug": "ai-education-partnership",
            "tags": [
              "Clients: Clarified requirements and trials; maintained follow-up records",
              "Business: Checked contracts and tracked approvals, versions and filing",
              "Delivery: Prepared demos and meetings; tracked owners and deadlines",
              "AI: Organized recurring tasks into SOPs, checklists and templates"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "Product Launch & Channel Coordination",
        "tagline": "Research · Content · Channels · Review",
        "items": [
          {
            "name": "ZUS Coffee Product Launch & Channel Coordination",
            "meta": "Market Research, Instagram & Retail Communication",
            "slug": "zus-everywhere",
            "tags": [
              "Research: Used customer and competitor insights to identify messages",
              "Content: Supported 50 Instagram posts from production to publishing",
              "Channels: Aligned launch assets and schedules with FamilyMart",
              "Review: 15+ reviews; 11k+ account-level follower growth"
            ]
          }
        ]
      }
    ]
  }
}

export const WORKS_CONTENT = WORKS

export const SECTION_COVERS: Record<string, string> = {
  'project-1': `${import.meta.env.BASE_URL}works/covers/sohu-dashboard.png`,
  'project-2': `${import.meta.env.BASE_URL}works/covers/ai-partnership.jpg`,
  'project-4': `${import.meta.env.BASE_URL}works/covers/zus-everywhere.jpg`,
}
