/**
 * Zaokit CC — Internationalisation (i18n)
 *
 * Auto-detects browser language (zh-* → zh, else → en).
 * Persists choice in localStorage. Walks DOM for [data-i18n] attributes.
 */

const I18N = (() => {
  const locales = {
    zh: {
      'meta.title': 'Zaokit Claude API 服务 - 企业级、可开票的合规接入方案',
      'meta.description': 'Zaokit 提供正规商业渠道的 Claude API 代理服务。支持 Claude 4.7 Opus / Sonnet / Haiku 模型，企业级高并发、高可用，支持开具正规增值税发票，完美解决企业接入合规与报销痛点。',

      'skip': '跳到正文',
      'brand.aria': 'Zaokit 主页',
      'menu.aria': '打开导航菜单',

      'nav.home': '首页',
      'nav.advantages': '核心优势',
      'nav.pricing': '计费方案',
      'nav.features': '功能特性',
      'nav.process': '接入流程',
      'nav.faq': '常见问题',

      'hero.eyebrow': '正规商务渠道 · 企业级合规接入',
      'hero.h1.line1': '解锁 Claude 的强大能力，',
      'hero.h1.line2': '解决合规与报销痛点。',
      'hero.desc': 'Zaokit 为国内企业提供高性能、高可用的 Claude API 代理服务。100% 兼容官方接口协议，支持全系列模型。最重要的是：我们提供对公结算并开具正规增值税发票。',
      'hero.cta.primary': '联系客户经理',
      'hero.cta.secondary': '查看计费方案',
      'hero.meta.invoice': '支持开具增值税专票/普票',
      'hero.meta.models': '包含 Claude 4.7 Opus / Sonnet / Haiku',

      'hero.card.title': '为什么企业选择我们',
      'hero.card.1.title': '合规无忧的财务流程',
      'hero.card.1.desc': '告别代充和灰色渠道，签订正规商务合同，公对公转账，提供合规发票，让财务审计不再头疼。',
      'hero.card.2.title': '原生级别的开发体验',
      'hero.card.2.desc': 'API 请求结构与 Anthropic 官方完全一致，只需修改 Base URL 即可无缝切换，无需重写现有代码。',
      'hero.card.3.title': '企业级的稳定保障',
      'hero.card.3.desc': '多重路由、并发隔离池与故障转移机制，保障高频调用场景下的极速响应与可用性。',

      'stat.sla.label': 'SLA 承诺可用性',
      'stat.latency.label': '首字响应延迟',
      'stat.compat.label': 'API 兼容性',
      'stat.support.label': '技术支持响应',

      'adv.tag': '核心优势',
      'adv.title': '专为 B2B 场景打造的接入体验',
      'adv.1.title': '阳光财务与合规',
      'adv.1.desc': '全流程透明合法。支持先签订采购合同后对公打款，根据实际开票抬头开具增值税专用/普通发票，扫清企业使用海外 AI 的财务阻碍。',
      'adv.2.title': '极速稳定的网络层',
      'adv.2.desc': '通过优化的海外专线直连 Anthropic 节点。自动化的多账号池负载均衡，有效避免单一账号触发并发限制（Rate Limits）导致的请求失败。',
      'adv.3.title': '数据安全与隐私',
      'adv.3.desc': '作为透明代理层，我们坚守不记录、不缓存任何 prompt 及生成内容的底线。您的所有对话数据直达模型厂商，满足企业级隐私要求。',

      'pricing.tag': '计费方案',
      'pricing.title': '透明、灵活的充值模式',
      'pricing.desc': '按 Token 消耗实时计费，无隐形费用，无月租。汇率透明，充值金额永不过期。',
      'pricing.basic.name': '基础起步',
      'pricing.basic.price': '¥1,000',
      'pricing.basic.unit': ' /次',
      'pricing.basic.note': '适合小型团队与测试验证',
      'pricing.basic.f1': '按实际 Token 消耗扣费',
      'pricing.basic.f2': '提供增值税普通发票',
      'pricing.basic.f3': '基础并发配额',
      'pricing.basic.f4': '工作日邮件支持',
      'pricing.basic.btn': '选择方案',
      'pricing.std.badge': '最受欢迎',
      'pricing.std.name': '企业标准',
      'pricing.std.price': '¥5,000',
      'pricing.std.unit': ' /次',
      'pricing.std.note': '适合规模化生产环境部署',
      'pricing.std.f1': '按实际 Token 消耗扣费',
      'pricing.std.f2': '提供增值税专用/普通发票',
      'pricing.std.f3': '专属高并发独立通道',
      'pricing.std.f4': '优先技术支持响应',
      'pricing.std.f5': '专属客户经理跟进',
      'pricing.std.btn': '联系采购',
      'pricing.ent.name': '定制大客户',
      'pricing.ent.price': '¥20,000+',
      'pricing.ent.note': '超大并发与特殊业务需求',
      'pricing.ent.f1': '阶梯优惠折扣费率',
      'pricing.ent.f2': '签订年度框架协议',
      'pricing.ent.f3': '私有化独占节点配置',
      'pricing.ent.f4': '7x24 小时紧急响应',
      'pricing.ent.f5': '技术专家驻场支持可选',
      'pricing.ent.btn': '定制方案',

      'process.tag': '接入流程',
      'process.title': '4 步完成合规接入',
      'process.1.title': '1. 需求确认与测试',
      'process.1.desc': '联系我们提供基本业务场景，获取少量免费测试额度和接口文档，验证兼容性与速度。',
      'process.2.title': '2. 商务合同签署',
      'process.2.desc': '确认采购方案后，双方签署服务采购合同。明确服务等级与合规开票细节。',
      'process.3.title': '3. 对公打款与开票',
      'process.3.desc': '企业对公账户转账，款项确认后我们即刻开具对应的增值税发票并邮寄/发送电子版。',
      'process.4.title': '4. 获取 Key 并上线',
      'process.4.desc': '发放正式生产环境的 API Key 和专属 Endpoint，您的系统即可稳定调用大模型能力。',

      'invoice.title': '关于开票的重要说明',
      'invoice.desc': 'Zaokit 开具的是正规且合法的服务类目发票。无论是技术服务费还是软件咨询费，均支持开具 6% 的增值税专用发票（一般纳税人可抵扣）或增值税普通发票。扫除由于"代充"和"个人转账"带来的企业税务风险隐患。',
      'invoice.badge': '合规抵扣',

      'features.tag': '功能特性',
      'features.title': '专为开发者与工程团队准备',
      'features.f1': '支持 Claude 4.7 Opus / Sonnet / Haiku 全系列',
      'features.f2': '完美支持 Server-Sent Events (SSE) 流式输出响应',
      'features.f3': '支持 Function Calling (工具调用) 与 Vision 多模态输入',
      'features.f4': '通过统一计费面板实时监控 Token 消耗及账单情况',
      'features.f5': '支持 LangChain / LlamaIndex 等主流开发框架无缝集成',
      'features.f6': '接口级防重放攻击与基础 CC 防护',
      'features.panel.title': '极简的代码集成',
      'features.panel.desc': '如果您已经在使用官方 SDK（如 Python 或 Node.js），只需一行代码将 Base URL 修改为我们提供的 Endpoint 即可：',
      'features.panel.note': '无任何学习成本，即插即用。',

      'faq.tag': 'FAQ',
      'faq.title': '常见问题解答',
      'faq.1.q': 'Q1：你们的计费标准和官方一样吗？',
      'faq.1.a': '我们按照模型官方公开的 Token 定价进行计算，由于我们需要承担专线网络成本、发票税费以及账号池维护成本，综合费率会有一定的溢价。具体报价请联系客户经理获取最新的阶梯价格表。',
      'faq.2.q': 'Q2：支持 OpenAI 的 ChatGPT 接口吗？',
      'faq.2.a': '支持。我们同样提供 OpenAI 全系列模型（如 GPT-4o, GPT-4-turbo, o1 等）的合规代理服务，且共用同一套额度和计费系统，让您的多模型混用策略更易管理。',
      'faq.3.q': 'Q3：调用会有并发（RPM/TPM）限制吗？',
      'faq.3.a': '基础方案会有软性的并发限流机制以保障整体稳定性。如果是企业级客户，我们会分配专属的账号池资源，可以突破官方默认的 Tier 限制，满足高并发生产环境需求。',
      'faq.4.q': 'Q4：如果中途遇到不可抗力封号，我的余额怎么办？',
      'faq.4.a': '这是我们作为企业服务商提供的核心价值之一：我们将屏蔽底层的风控风险。任何账号层面的问题均由我们通过冗余账号池自动处理，对您的调用透明且无感，您的账户余额永远有效且安全。',

      'cta.title': '准备好为您的企业引入顶级 AI 能力了吗？',
      'cta.desc': '告别繁琐的账号注册与支付障碍，建立合规透明的财务通道。立即联系我们获取测试额度及专属采购方案。',
      'cta.email': '发送邮件咨询',
      'cta.wechat': '添加微信沟通',
      'cta.wechat.alert': '微信添加：winnielove2020（请备注：API咨询）',

      'footer.brand': 'Zaokit AI Services',
      'footer.note': '专注为大中华区企业提供安全、稳定、可开票的海外顶尖 AI 大模型 API 接入方案。',
      'footer.nav': '快速导航',
      'footer.nav.adv': '核心优势',
      'footer.nav.pricing': '计费方案',
      'footer.nav.features': '功能特性',
      'footer.nav.faq': '常见问题',
      'footer.contact': '联系我们',
      'footer.wechat': '微信：winnielove2020',
      'footer.hours': '工作时间：周一至周五 10:00 - 19:00',
      'footer.related': '相关产品',
      'footer.related.th': 'AI Token Hub · 企业算力总闸',
      'footer.related.cx': 'Zaokit CX · Codex API 服务',
      'footer.related.app': 'Zaokit · AI 创作入口',

      'lang.label': 'EN',
    },

    en: {
      'meta.title': 'Zaokit Claude API — Enterprise-Grade, Invoiceable, Compliant Access',
      'meta.description': 'Zaokit provides compliant Claude API proxy services via legitimate commercial channels. Supporting Claude 4.7 Opus / Sonnet / Haiku, enterprise-grade high concurrency, with official VAT invoicing.',

      'skip': 'Skip to content',
      'brand.aria': 'Zaokit Home',
      'menu.aria': 'Open navigation menu',

      'nav.home': 'Home',
      'nav.advantages': 'Advantages',
      'nav.pricing': 'Pricing',
      'nav.features': 'Features',
      'nav.process': 'Get Started',
      'nav.faq': 'FAQ',

      'hero.eyebrow': 'Legitimate Channel · Enterprise Compliant Access',
      'hero.h1.line1': 'Unlock the power of Claude,',
      'hero.h1.line2': 'solve compliance headaches.',
      'hero.desc': 'Zaokit provides high-performance, highly available Claude API proxy services for enterprises. 100% compatible with the official Anthropic protocol, supporting the full model lineup. Most importantly: we offer B2B settlements and issue official VAT invoices.',
      'hero.cta.primary': 'Contact Sales',
      'hero.cta.secondary': 'View Pricing',
      'hero.meta.invoice': 'VAT invoice support',
      'hero.meta.models': 'Claude 4.7 Opus / Sonnet / Haiku',

      'hero.card.title': 'Why enterprises choose us',
      'hero.card.1.title': 'Hassle-free compliant billing',
      'hero.card.1.desc': 'No more grey-market top-ups. Sign a formal B2B contract, bank-to-bank transfer, receive proper invoices — finance audits made painless.',
      'hero.card.2.title': 'Native-level developer experience',
      'hero.card.2.desc': 'API request structure is 100% identical to official Anthropic. Just change the Base URL to switch over — no code rewrite needed.',
      'hero.card.3.title': 'Enterprise-grade reliability',
      'hero.card.3.desc': 'Multi-route failover, isolated concurrency pools, and automatic traffic rerouting ensure ultra-fast response and high availability under heavy loads.',

      'stat.sla.label': 'SLA uptime guarantee',
      'stat.latency.label': 'Time to first token',
      'stat.compat.label': 'API compatibility',
      'stat.support.label': 'Support response',

      'adv.tag': 'Advantages',
      'adv.title': 'Built for B2B scenarios',
      'adv.1.title': 'Transparent financials & compliance',
      'adv.1.desc': 'Fully transparent and legal. Sign procurement contracts, pay via corporate bank transfer, and receive VAT invoices — removing all financial barriers to using overseas AI.',
      'adv.2.title': 'Ultra-fast stable network',
      'adv.2.desc': 'Optimized international dedicated lines connect directly to Anthropic endpoints. Automated multi-account pool load balancing prevents single-account rate limit failures.',
      'adv.3.title': 'Data security & privacy',
      'adv.3.desc': 'As a transparent proxy layer, we never log or cache any prompts or generated content. All conversation data goes directly to the model provider, meeting enterprise privacy requirements.',

      'pricing.tag': 'Pricing',
      'pricing.title': 'Transparent, flexible top-up model',
      'pricing.desc': 'Pay-as-you-go by token consumption. No hidden fees, no monthly subscription. Transparent exchange rates, credits never expire.',
      'pricing.basic.name': 'Starter',
      'pricing.basic.price': '¥1,000',
      'pricing.basic.unit': ' /top-up',
      'pricing.basic.note': 'For small teams & testing',
      'pricing.basic.f1': 'Pay by actual token consumption',
      'pricing.basic.f2': 'Regular VAT invoice',
      'pricing.basic.f3': 'Basic concurrency quota',
      'pricing.basic.f4': 'Weekday email support',
      'pricing.basic.btn': 'Choose Plan',
      'pricing.std.badge': 'Most Popular',
      'pricing.std.name': 'Enterprise Standard',
      'pricing.std.price': '¥5,000',
      'pricing.std.unit': ' /top-up',
      'pricing.std.note': 'For production environments at scale',
      'pricing.std.f1': 'Pay by actual token consumption',
      'pricing.std.f2': 'VAT special / regular invoice',
      'pricing.std.f3': 'Dedicated high-concurrency channel',
      'pricing.std.f4': 'Priority technical support',
      'pricing.std.f5': 'Dedicated account manager',
      'pricing.std.btn': 'Contact Sales',
      'pricing.ent.name': 'Custom Enterprise',
      'pricing.ent.price': '¥20,000+',
      'pricing.ent.note': 'Ultra-high concurrency & special needs',
      'pricing.ent.f1': 'Volume discount tiers',
      'pricing.ent.f2': 'Annual framework agreement',
      'pricing.ent.f3': 'Private dedicated nodes',
      'pricing.ent.f4': '7×24 emergency response',
      'pricing.ent.f5': 'Optional on-site tech expert',
      'pricing.ent.btn': 'Custom Plan',

      'process.tag': 'Get Started',
      'process.title': '4 steps to compliant access',
      'process.1.title': '1. Requirements & Testing',
      'process.1.desc': 'Contact us with your business scenario. Get free test credits and API docs to verify compatibility and speed.',
      'process.2.title': '2. Sign Contract',
      'process.2.desc': 'Once the plan is confirmed, both parties sign a procurement contract. SLA and invoicing details clearly defined.',
      'process.3.title': '3. Payment & Invoicing',
      'process.3.desc': 'Corporate bank transfer. Upon confirmation, we immediately issue the corresponding VAT invoice and deliver digitally or by mail.',
      'process.4.title': '4. Get Your Key & Go Live',
      'process.4.desc': 'Receive your production API Key and dedicated endpoint. Your system can now stably call LLM capabilities.',

      'invoice.title': 'Important note on invoicing',
      'invoice.desc': 'Zaokit issues legitimate service-category invoices. Whether for technical service fees or software consulting fees, we support 6% VAT special invoices (deductible for general taxpayers) and regular VAT invoices. Eliminating tax risks from grey-market payments and personal transfers.',
      'invoice.badge': 'Tax compliant',

      'features.tag': 'Features',
      'features.title': 'Built for developers & engineering teams',
      'features.f1': 'Full Claude 4.7 Opus / Sonnet / Haiku lineup',
      'features.f2': 'Full Server-Sent Events (SSE) streaming support',
      'features.f3': 'Function Calling (tool use) & Vision multimodal input',
      'features.f4': 'Real-time token consumption & billing dashboard',
      'features.f5': 'Seamless LangChain / LlamaIndex integration',
      'features.f6': 'API-level replay protection & basic CC defense',
      'features.panel.title': 'Dead-simple code integration',
      'features.panel.desc': 'If you\'re already using the official SDK (Python or Node.js), just change the Base URL to our endpoint:',
      'features.panel.note': 'Zero learning curve. Plug and play.',

      'faq.tag': 'FAQ',
      'faq.title': 'Frequently Asked Questions',
      'faq.1.q': 'Q1: Is your pricing the same as the official rates?',
      'faq.1.a': 'We calculate based on the model\'s official published token pricing. Due to costs for dedicated network lines, invoice taxes, and account pool maintenance, there is a modest premium. Contact our account manager for the latest tiered pricing sheet.',
      'faq.2.q': 'Q2: Do you support OpenAI\'s ChatGPT APIs?',
      'faq.2.a': 'Yes. We also provide compliant proxy services for the full OpenAI model lineup (GPT-4o, GPT-4-turbo, o1, etc.), sharing the same credits and billing system, making multi-model strategies easier to manage.',
      'faq.3.q': 'Q3: Are there concurrency (RPM/TPM) limits?',
      'faq.3.a': 'The Starter plan has soft rate-limiting to ensure overall stability. Enterprise clients get dedicated account pool resources that can exceed official Tier limits, meeting high-concurrency production needs.',
      'faq.4.q': 'Q4: What happens to my balance if there\'s an account issue?',
      'faq.4.a': 'This is one of our core values as an enterprise provider: we shield you from underlying risk. Any account-level issues are handled automatically through our redundant account pool — transparent and seamless to your calls. Your balance is always safe and valid.',

      'cta.title': 'Ready to bring top-tier AI to your enterprise?',
      'cta.desc': 'Say goodbye to complicated account registration and payment barriers. Establish a compliant, transparent financial channel. Contact us now for test credits and a tailored procurement plan.',
      'cta.email': 'Send Email',
      'cta.wechat': 'Add on WeChat',
      'cta.wechat.alert': 'Add WeChat: winnielove2020 (note: API inquiry)',

      'footer.brand': 'Zaokit AI Services',
      'footer.note': 'Providing secure, stable, and invoiceable access to the world\'s leading AI model APIs for enterprises.',
      'footer.nav': 'Quick Links',
      'footer.nav.adv': 'Advantages',
      'footer.nav.pricing': 'Pricing',
      'footer.nav.features': 'Features',
      'footer.nav.faq': 'FAQ',
      'footer.contact': 'Contact',
      'footer.wechat': 'WeChat: winnielove2020',
      'footer.hours': 'Hours: Mon–Fri 10:00–19:00 (UTC+8)',
      'footer.related': 'Related Products',
      'footer.related.th': 'AI Token Hub · Compute Management',
      'footer.related.cx': 'Zaokit CX · Codex API Service',
      'footer.related.app': 'Zaokit · AI Creation Portal',

      'lang.label': '中文',
    },
  };

  const STORAGE_KEY = 'zaokit_cc_lang';
  let currentLang = 'zh';

  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && locales[saved]) return saved;
    const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return nav.startsWith('zh') ? 'zh' : 'en';
  }

  function t(key) {
    return (locales[currentLang] && locales[currentLang][key]) || (locales.zh[key]) || key;
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      el.setAttribute('aria-label', t(el.dataset.i18nAria));
    });
    document.title = t('meta.title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
    const langBtn = document.getElementById('lang-switch');
    if (langBtn) langBtn.textContent = t('lang.label');
  }

  function init() {
    currentLang = detectLang();
    applyTranslations();
  }

  function switchLang() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem(STORAGE_KEY, currentLang);
    applyTranslations();
  }

  function getLang() { return currentLang; }
  function getWechatAlert() { return t('cta.wechat.alert'); }

  return { init, switchLang, getLang, t, getWechatAlert };
})();
