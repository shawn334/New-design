/**
 * Translia Brand Constants & Bilingual Copy
 */

export const BRAND_COLORS = {
  primary: '#076DB0', // Translia Blue
  secondary: '#0284C7', // Sky Blue
  accent: '#38BDF8', // Light Blue
  dark: '#0F172A',
  deep: '#020617',
};

export const SITE_CONTENT = {
  en: {
    nav: [
      { name: 'Services', href: '/services' },
      { name: 'How We Work', href: '/how' },
      { name: 'Industries', href: '/industries' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    hero: {
      badge: 'Multilingual Content Workflows',
      title1: 'CONTENT ALIGNED.',
      title2: 'MARKETS IN SYNC.',
      subtitle: 'Translia keeps your web, product, and marketing content consistent across 30+ languages — so your teams stop firefighting and start shipping.',
      cta: 'Get a Free Review →',
      secondaryCta: 'See how it works',
    },
    stats: [
      { label: 'Languages', value: '100+' },
      { label: 'In the field', value: '15yr' },
      { label: 'Less rework', value: '50%' },
      { label: 'Faster updates', value: '2×' },
    ],
    problem: {
      badge: 'The Real Problem',
      title: 'Content breaks down before translation does',
      subtitle: 'Source content keeps moving. Review loops multiply. Languages drift out of sync. Your team spends more time coordinating than creating.',
      items: [
        {
          id: '01',
          title: 'Review Drag',
          description: 'Every update triggers another review cycle. Reviewers correct the same terms again. Rework compounds silently across languages.',
          icon: 'Zap',
        },
        {
          id: '02',
          title: 'Language Drift',
          description: 'Five markets, five slightly different versions. Nobody knows which one is current. Launch dates slip.',
          icon: 'Globe',
        },
        {
          id: '03',
          title: 'Coordination Tax',
          description: 'PMs chase translators. Translators chase context. The actual content waits in a queue.',
          icon: 'BarChart',
        },
      ],
    },
    approach: {
      badge: 'Our Approach',
      title: 'Every language, always publish-ready',
      description: 'We combine structured coordination, terminology discipline, and technology-assisted quality checks into a workflow built for content that never stops changing.',
      flow: [
        { title: 'Context', desc: 'Scope & refs' },
        { title: 'Align', desc: 'Terms & style' },
        { title: 'Produce', desc: 'Controlled workflow' },
        { title: 'Review', desc: 'Multi-stage QA' },
        { title: 'Deliver', desc: 'Ready to publish' },
      ],
      metrics: [
        { value: '50%', label: 'Fewer review rounds' },
        { value: '33%', label: 'Less rework on updates' },
        { value: '100+', label: 'Languages delivered' },
      ]
    },
    services_summary: {
      badge: 'Services',
      title: 'Content keeps changing. We keep it aligned.',
      subtitle: 'From product pages to help centers to live events — we support multilingual content that can\'t afford to fall behind.',
      items: [
        {
          title: 'Multilingual Web & Product Content',
          badge: 'Core',
          description: 'Websites, product pages, landing pages, campaign assets. We support the update rhythm, not just the first delivery. Structured workflows reduce time-to-publish across all language versions.',
          icon: 'Layers',
        },
        {
          title: 'Brand & Marketing Localization',
          badge: 'Premium',
          description: 'When messaging needs to be culturally resonant, not just linguistically correct. We adapt campaigns, slogans, and social content while preserving your brand intent across markets.',
          icon: 'MessageSquare',
        },
        {
          title: 'Knowledge & Help Content',
          badge: 'Support',
          description: 'Help centers, FAQs, and product docs. We keep terminology aligned with your product UI and deliver consistently updated translations directly into your support platform.',
          icon: 'BookOpen',
        },
        {
          title: 'Interpreting & Live Subtitles',
          badge: 'Live',
          description: 'Cross-border meetings, town halls, and events. Consecutive and simultaneous interpretation, plus real-time subtitles powered by our event technology partnership.',
          icon: 'Video',
        },
      ]
    },
    industries_summary: {
      badge: 'Industries',
      title: 'Deeper where language really matters',
      items: [
        {
          id: 'ev',
          title: 'EV & Automotive',
          description: 'Infotainment UI, owner\'s manuals, dealer training, and compliance docs for Chinese EV brands expanding globally.',
          icon: 'Zap',
        },
        {
          id: 'consumer',
          title: 'Consumer Brands',
          description: 'E-commerce listings, social media, and brand campaigns adapted for SEA, Europe, and the Middle East.',
          icon: 'ShoppingBag',
        },
        {
          id: 'manufacturing',
          title: 'Manufacturing',
          description: 'Technical manuals, safety data sheets, and B2B portals where precision is non-negotiable.',
          icon: 'ShieldCheck',
        },
      ]
    },
    proof: {
      badge: 'Proof',
      title: 'Workflow control. Concrete results.',
      items: [
        {
          id: 'electronics',
          title: 'Global electronics brand',
          category: 'Digital Content',
          date: '12+ Languages',
          description: 'Supported multilingual website and product content with monthly update cycles. Reduced reviewer corrections by 40% within 6 months.',
          image: 'https://picsum.photos/seed/electronics/800/600',
        },
        {
          id: 'fashion',
          title: 'Luxury fashion house',
          category: 'Brand Content',
          date: '5 Languages',
          description: 'Brand-sensitive marketing localization for seasonal campaigns. Maintained voice consistency meeting tight launch windows.',
          image: 'https://picsum.photos/seed/fashion/800/600',
        },
        {
          id: 'bpo',
          title: 'Global BPO partner',
          category: 'Channel Delivery',
          date: '3+ Years',
          description: 'Recurring multilingual delivery across 4 concurrent brand workstreams. Monthly billing and structured quality reporting.',
          image: 'https://picsum.photos/seed/bpo/800/600',
        },
      ]
    },
    faq: {
      title: 'Questions teams ask us every week',
      items: [
        {
          q: 'How do you handle data security?',
          a: 'We sign NDAs, follow client-specific data handling requirements, and support restricted processing workflows. Our workflow adapts to your compliance needs.'
        },
        {
          q: 'Do you use AI in your workflow?',
          a: 'We use technology to improve efficiency and consistency throughout delivery. Human review remains central to every project.'
        },
        {
          q: 'What makes you different from other translation companies?',
          a: 'Most translation companies sell words. We manage workflows. The difference shows up in fewer review rounds and multilingual content that stays aligned across markets.'
        },
        {
          q: 'What\'s the minimum project size?',
          a: 'We\'re built for recurring content workflows, not one-off projects. Happy to start small and scale as trust builds.'
        },
        {
          q: 'Can you work within our existing vendor framework?',
          a: 'Yes. We work within PO-controlled procurement, structured channel relationships, and multi-vendor environments.'
        },
        {
          q: 'Do you support Chinese companies going global?',
          a: 'With teams in Beijing and Hong Kong, we support Chinese brands expanding to Europe, SEA, the Middle East, and Latin America.'
        }
      ]
    },
    cta: {
      title1: 'Is multilingual content',
      title2: 'costing more than it should?',
      subtitle: 'We\'ll give you an honest assessment — no pitch, no obligation.',
      button: 'Get a Free Review →',
    },
    services_page: {
      hero: {
        title: 'Content aligned across markets',
        subtitle: 'Four service lines for teams whose content keeps changing.'
      },
      packages: [
        {
          id: '01',
          label: 'Core',
          title: 'Multilingual Web & Product Content',
          for: 'Websites, product pages, landing pages, campaign assets, and customer-facing content that changes often.',
          typical: 'Corporate websites, product pages, landing pages, app store descriptions, release notes, help docs.',
          deliver: 'Translated & reviewed content in your original file format. Terminology-controlled output. Structured review to reduce revision rounds. Ongoing support for update cycles.',
          bestFor: 'Teams managing multilingual content across 5+ markets with weekly/monthly updates.'
        },
        {
          id: '02',
          label: 'Premium',
          title: 'Brand & Marketing Localization',
          for: 'When messaging needs to be culturally resonant, not just linguistically correct.',
          typical: 'Brand slogans, campaign headlines, social media copy, investor presentations, press releases, brand naming research.',
          deliver: 'Adapted messaging preserving intent and impact. Multiple creative options per key phrase. Cultural review by native-market professionals. Style guides.',
          bestFor: 'Teams entering new markets or running global campaigns with regional adaptation.'
        },
        {
          id: '03',
          label: 'Support',
          title: 'Knowledge & Help Content',
          for: 'Help centers, FAQs, product docs, onboarding guides — the content that costs your support team when it drifts.',
          typical: 'Help center articles, FAQ pages, onboarding guides, product documentation, in-app tooltips.',
          deliver: 'Consistently updated translations. Terminology alignment with your product. Structured delivery into your CMS or help platform. Version tracking.',
          bestFor: 'SaaS products, global platforms, teams with recurring documentation updates.'
        },
        {
          id: '04',
          label: 'Live',
          title: 'Interpreting & Live Subtitles',
          for: 'Cross-border meetings, town halls, conferences, and events.',
          typical: 'Executive meetings, earnings calls, product launches, training sessions, conferences, live subtitles for broadcasts.',
          deliver: 'Consecutive and simultaneous interpretation. Real-time subtitles. Remote and on-site support. Powered by our event technology partnership.',
          bestFor: 'Teams with regular cross-border communication or events reaching multilingual audiences.'
        }
      ],
      cta: {
        title: 'Not sure which service fits?',
        subtitle: 'Tell us where things break down — we\'ll tell you honestly what helps.',
        button: 'Talk to Us →'
      }
    },
    how_page: {
      hero: {
        title: 'It\'s a workflow problem',
        subtitle: 'Quality breaks at the workflow level, not the translation level. Terminology drifts, context gets lost, and nobody owns the process.'
      },
      process: {
        badge: 'The Process',
        title: 'Five things we do before content starts to drift',
        steps: [
          {
            title: 'Start with content context',
            description: 'We understand your content type, markets, terminology priorities, and where rework usually comes from. A product UI update ≠ a CEO letter.'
          },
          {
            title: 'Build control into the workflow',
            description: 'We add checkpoints: terminology alignment, reference guidance, structured review. The difference between one review round and four.'
          },
          {
            title: 'Keep human judgment at the center',
            description: 'Technology improves speed and consistency. When brand tone or regulatory nuance matters, humans make the final call. Human-led, technology-enabled.'
          },
          {
            title: 'Support content that keeps changing',
            description: 'Your partner remembers your terminology, understands your rhythm, keeps up as source content evolves.'
          },
          {
            title: 'Designed for cross-border teams',
            description: 'Beijing + Hong Kong. We bridge China-based teams going outward and global brands adapting for Greater China and Asia.'
          }
        ]
      },
      tech: {
        badge: 'Technology Note',
        title: 'Technology that makes the workflow more reliable',
        description: 'Our production workflow includes technology-assisted quality checks, terminology validation, and consistency controls. We don\'t sell tools. We sell outcomes: fewer review rounds, less rework, content that stays aligned.',
        note: '"When clients ask \'do you use AI?\' — we use technology where it makes delivery better, and human review where judgment matters."',
        cards: [
          {
            title: 'Human-led',
            description: 'Every project has human accountability. Technology assists — it doesn\'t replace judgment.'
          },
          {
            title: 'Controlled workflow',
            description: 'Multi-stage review with terminology discipline built in from the start, not patched in after complaints.'
          },
          {
            title: 'Policy-aware',
            description: 'For clients with strict data handling requirements, we support restricted processing workflows.'
          }
        ]
      },
      credentials: {
        badge: 'Operational Credentials',
        title: 'These are trust signals, not the main story',
        cards: [
          {
            title: 'ISO 17100 Certified',
            description: 'Structured service framework covering qualified resources, review steps, and controlled delivery.'
          },
          {
            title: 'ISO 18587 Certified',
            description: 'Controlled post-editing standard for structured revision workflows.'
          },
          {
            title: 'Beijing + Hong Kong',
            description: 'Operational presence supporting China-based teams and international stakeholders in one workflow.'
          }
        ]
      },
      cta: {
        title: 'Workflow friction is fixable',
        subtitle: 'Let\'s look at where the friction lives.',
        button: 'Talk to Translia →'
      }
    },
    industries_page: {
      hero: {
        title: 'Language is operational risk',
        subtitle: 'When terminology, compliance, or brand perception drive outcomes, translation is a business-critical function — not a commodity.'
      },
      sections: [
        {
          badge: '⚡ EV & Automotive',
          title: 'Chinese EV brands are expanding fast. Localization often lags behind.',
          context: 'Six of the top ten global EV sellers are now Chinese. Every one needs infotainment UI, owner\'s manuals, safety warnings, dealer materials, campaigns, and regulatory docs — in 30+ languages.',
          content: [
            'Vehicle UI strings and infotainment systems',
            'Owner\'s manuals and safety documentation',
            'Dealer training materials',
            'Marketing campaigns and website localization',
            'Regulatory compliance documents (CE, ECE, local type approval)',
            'Voice command system localization'
          ],
          why: 'We understand both the Chinese source context and European/SEA target requirements. Structured workflows handle volume and terminology precision. We\'ve built trilingual automotive terminology resources covering key competitor brands.'
        },
        {
          badge: '🛍 Consumer Brands Going Global',
          title: 'Your brand works in Chinese. Will it land elsewhere?',
          context: 'Chinese DTC brands expanding to SEA, Europe, and the Middle East face cultural blind spots — not just language gaps.',
          content: [
            'Brand name adaptation and cultural screening',
            'E-commerce listings (Amazon, Shopee, Lazada)',
            'Social media content localization',
            'Influencer brief adaptation',
            'Packaging copy and brand style guides'
          ],
          why: 'We don\'t just translate your marketing — we adapt it. Our team understands the cultural gap between Chinese marketing styles and what resonates in Southeast Asian, European, and Middle Eastern markets. We catch the things that make your brand look foreign instead of global.'
        },
        {
          badge: '🏭 Manufacturing & Industrial',
          title: 'Technical content leaves no room for ambiguity',
          context: 'A wrong torque spec or mistranslated safety warning has real consequences. Precision is non-negotiable.',
          content: [
            'Technical manuals and service documentation',
            'CE/UL compliance documentation',
            'B2B portal localization',
            'Safety data sheets (SDS/MSDS)',
            'Training materials for global technicians'
          ],
          why: 'High-volume, terminology-sensitive content is where our structured workflows shine brightest. We build and maintain glossaries, enforce consistency across document sets, and handle recurring updates without starting from scratch each time.'
        }
      ],
      cta: {
        title: 'Working in one of these industries?',
        subtitle: 'Let\'s talk about your specific content challenges.',
        button: 'Talk to Us →'
      }
    },
    about: {
      hero: {
        title: 'Multilingual content, every market',
        subtitle: 'The real problem is rarely "we need a translator." It\'s "this content needs to work across 12 markets next week."'
      },
      who: {
        title: 'Multilingual content, built to scale',
        p1: 'We help brands, enterprise teams, and channel partners keep multilingual web, product, and support content aligned, current, and easier to manage.',
        p2: 'We\'ve been doing this for 15 years — not because the technology hasn\'t changed (it has, dramatically) — but because the fundamental problem hasn\'t: fast-changing content is hard to keep aligned across languages, and that problem gets worse as businesses expand.',
        cards: [
          {
            title: 'What we value',
            description: 'Results over methodology. Human judgment over automation hype. Workflow control over word count. We measure success by whether your content launches on time — not words processed per hour.'
          },
          {
            title: 'Who we work best with',
            description: 'Teams with content that keeps changing. Multiple languages that need to stay aligned. Update pressure that never lets up. If multilingual content is a recurring operational challenge — we\'re built for that.'
          }
        ]
      },
      operate: [
        {
          title: 'Beijing + Hong Kong',
          description: 'Dual presence lets us serve both China-based companies expanding globally and international brands adapting for Greater China and Asia.'
        },
        {
          title: 'Human-led, technology-enabled',
          description: 'We invest in technology that makes our workflow faster. But we never pretend it replaces experienced judgment for brand-sensitive localization.'
        },
        {
          title: 'Built for partners, not projects',
          description: 'Our strongest relationships are multi-year engagements where we become part of your content operations — not a vendor you re-evaluate every quarter.'
        }
      ],
      models: {
        title: 'Two ways to work with us',
        items: [
          {
            title: 'Through a channel partner',
            description: 'We work within BPO and enterprise service frameworks. PO-controlled scope, structured reporting, consistent quality across recurring workstreams. Primary model.'
          },
          {
            title: 'Direct engagement',
            description: 'For brands and enterprise teams who want a direct content workflow partner. We start with your challenges, build a delivery model that fits your rhythm, scale from there.'
          }
        ]
      },
      cta: {
        title: 'Talk about your actual workflow',
        subtitle: 'We\'ll tell you plainly if we\'re the right fit.',
        button: 'Talk to Translia →'
      }
    },
    contact: {
      hero: {
        title: 'Let\'s fix your workflow'
      },
      review: {
        title: 'Free content review',
        description: 'Share your current multilingual content workflow and we\'ll give you an honest assessment of where the friction is — and whether we\'re the right partner to fix it.',
        nextStepsTitle: 'What happens next:',
        steps: [
          'You submit the form',
          'We review within 2 business days',
          'We schedule a 30-minute call to walk through our findings',
          'You decide if it makes sense to work together'
        ],
        directContact: 'Direct contact:',
        email: 'hi@translia.com',
        beijing: {
          city: 'Beijing:',
          address: 'B110, DoBe WE International Hub, No.91 Fahuasi Street, Dongcheng District, Beijing 100061, China',
          phone: '+86-(0)10-67122138'
        },
        hongkong: {
          city: 'Hong Kong:',
          address: '2/F, Lee Fung Commercial Building, 32-36 Des Voeux Rd W, Sheung Wan, Hong Kong',
          phone: '+852-4407-2994'
        }
      },
      form: {
        company: 'Company',
        name: 'Name',
        email: 'Email',
        contentType: 'What kind of content?',
        options: [
          'Website & product content',
          'Brand & marketing',
          'Support & knowledge',
          'Interpreting & live subtitles',
          'Other'
        ],
        message: 'Tell us what\'s not working',
        submit: 'Send →'
      }
    },
    footer: {
      tagline: 'Multilingual content workflows, kept launch-ready across markets.',
      links: [
        { name: 'Services', href: '/services' },
        { name: 'How We Work', href: '/how' },
        { name: 'Industries', href: '/industries' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
      ],
      legal: [
        { name: 'Privacy', href: '#' },
        { name: 'Cookies', href: '#' },
      ],
      rights: '© 2026 Translia Limited',
    }
  },
  zh: {
    nav: [
      { name: '服务', href: '/services' },
      { name: '工作方式', href: '/how' },
      { name: '行业', href: '/industries' },
      { name: '关于我们', href: '/about' },
      { name: '联系我们', href: '/contact' },
    ],
    hero: {
      badge: '多语言内容工作流',
      title1: '内容对齐。',
      title2: '市场同步。',
      subtitle: 'Translia 确保您的网站、产品和营销内容在 30 多种语言中保持一致 — 让您的团队停止救火，开始发布。',
      cta: '获取免费评估 →',
      secondaryCta: '了解工作原理',
    },
    stats: [
      { label: '支持语言', value: '100+' },
      { label: '行业经验', value: '15年' },
      { label: '减少返工', value: '50%' },
      { label: '更新速度', value: '2×' },
    ],
    problem: {
      badge: '真正的问题',
      title: '内容在翻译之前就已经崩溃',
      items: [
        {
          id: '01',
          title: '审查拖延',
          description: '每次更新都会触发另一个审查周期。审查人员再次纠正相同的术语。返工在各种语言中无声地复合。',
          icon: 'Zap',
        },
        {
          id: '02',
          title: '语言漂移',
          description: '五个市场，五个略有不同的版本。没有人知道哪个是最新的。发布日期推迟。',
          icon: 'Globe',
        },
        {
          id: '03',
          title: '协调税',
          description: '项目经理追逐翻译人员。翻译人员追逐上下文。实际内容在队列中等待。',
          icon: 'BarChart',
        },
      ],
    },
    approach: {
      badge: '我们的方法',
      title: '每种语言，随时准备发布',
      description: '我们不仅翻译 — 我们管理工作流，使每种语言版本保持一致、最新并准备好发布。',
      items: [
        {
          title: '术语控制',
          description: '所有语言使用一个批准的术语表。每次更新都会自动引用它。',
          icon: 'BookOpen',
        },
        {
          title: '结构化审查',
          description: '内置检查点在漂移复合之前捕获它。一轮审查，而不是四轮。',
          icon: 'ShieldCheck',
        },
        {
          title: '更新节奏',
          description: '当您的源更改时，我们会跟踪它。每种语言都保持最新，而无需从头开始。',
          icon: 'Activity',
        },
      ]
    },
    services_summary: {
      badge: '服务',
      title: '内容不断变化。我们保持一致。',
      items: [
        {
          title: '多语言网站和产品内容',
          description: '核心',
          icon: 'Layers',
        },
        {
          title: '品牌和营销本地化',
          description: '高级',
          icon: 'MessageSquare',
        },
        {
          title: '知识和帮助内容',
          description: '支持',
          icon: 'BookOpen',
        },
        {
          title: '口译和实时字幕',
          description: '实时',
          icon: 'Video',
        },
      ]
    },
    industries_summary: {
      badge: '行业',
      title: '在语言真正重要的地方更深入',
      items: [
        {
          id: 'ev',
          title: '电动汽车和汽车',
          description: '⚡',
          icon: 'Cpu',
        },
        {
          id: 'consumer',
          title: '消费品牌走向全球',
          description: '🛍',
          icon: 'ShoppingBag',
        },
        {
          id: 'manufacturing',
          title: '制造和工业',
          description: '🏭',
          icon: 'ShieldCheck',
        },
      ]
    },
    proof: {
      badge: '证明',
      title: '工作流控制。具体结果。',
      items: [
        {
          id: 'electronics',
          title: '全球电子品牌',
          category: '数字内容',
          date: '12+ 语言',
          description: '支持多语言网站和产品内容，每月更新周期。在 6 个月内将审查人员的更正减少了 40%。',
          image: 'https://picsum.photos/seed/electronics/800/600',
        },
        {
          id: 'fashion',
          title: '奢侈时装屋',
          category: '品牌内容',
          date: '5 种语言',
          description: '针对季节性活动的品牌敏感营销本地化。在紧迫的发布窗口内保持语音一致性。',
          image: 'https://picsum.photos/seed/fashion/800/600',
        },
        {
          id: 'bpo',
          title: '全球 BPO 合作伙伴',
          category: '渠道交付',
          date: '3+ 年',
          description: '跨 4 个并发品牌工作流的定期多语言交付。每月计费和结构化质量报告。',
          image: 'https://picsum.photos/seed/bpo/800/600',
        },
      ]
    },
    faq: {
      title: '团队每周问我们的问题',
      items: [
        {
          q: '你们如何处理数据安全？',
          a: '我们签署 NDA，遵循客户特定的数据处理要求，并支持受限的处理工作流。我们的工作流适应您的合规需求。'
        },
        {
          q: '你们在工作流中使用 AI 吗？',
          a: '我们使用技术来提高整个交付过程的效率和一致性。人工审查仍然是每个项目的核心。'
        },
        {
          q: '是什么让你们与其他翻译公司不同？',
          a: '大多数翻译公司出售文字。我们管理工作流。区别在于审查轮次更少，多语言内容在各个市场保持一致。'
        },
        {
          q: '最小项目规模是多少？',
          a: '我们专为定期内容工作流而建，而不是一次性项目。很乐意从小规模开始，随着信任的建立而扩展。'
        },
        {
          q: '你们能在我们现有的供应商框架内工作吗？',
          a: '是的。我们在 PO 控制的采购、结构化渠道关系和多供应商环境中工作。'
        },
        {
          q: '你们支持中国公司走向全球吗？',
          a: '我们在北京和香港设有团队，支持中国品牌扩展到欧洲、东南亚、中东和拉丁美洲。'
        }
      ]
    },
    cta: {
      title1: '多语言内容',
      title2: '成本是否过高？',
      subtitle: '我们将为您提供诚实的评估 — 没有推销，没有义务。',
      button: '获取免费评估 →',
    },
    services_page: {
      hero: {
        title: '跨市场内容对齐',
        subtitle: '为内容不断变化的团队提供四条服务线。'
      },
      packages: [
        {
          id: '01',
          label: '核心',
          title: '多语言网站和产品内容',
          for: '网站、产品页面、登陆页面、活动资产和经常变化的面向客户的内容。',
          typical: '企业网站、产品页面、登陆页面、应用商店描述、发行说明、帮助文档。',
          deliver: '以您的原始文件格式翻译和审查内容。术语控制的输出。结构化审查以减少修订轮次。持续支持更新周期。',
          bestFor: '管理 5 个以上市场的多语言内容并每周/每月更新的团队。'
        },
        {
          id: '02',
          label: '高级',
          title: '品牌和营销本地化',
          for: '当信息需要在文化上产生共鸣，而不仅仅是语言上正确时。',
          typical: '品牌口号、活动标题、社交媒体文案、投资者演示、新闻稿、品牌命名研究。',
          deliver: '调整信息以保留意图和影响。每个关键短语有多个创意选项。由本地市场专业人员进行文化审查。风格指南。',
          bestFor: '进入新市场或开展具有区域适应性的全球活动的团队。'
        },
        {
          id: '03',
          label: '支持',
          title: '知识和帮助内容',
          for: '帮助中心、常见问题解答、产品文档、入职指南 — 当内容漂移时会让您的支持团队付出代价的内容。',
          typical: '帮助中心文章、常见问题解答页面、入职指南、产品文档、应用内工具提示。',
          deliver: '持续更新的翻译。与您的产品保持术语一致。结构化交付到您的 CMS 或帮助平台。版本跟踪。',
          bestFor: 'SaaS 产品、全球平台、定期更新文档的团队。'
        },
        {
          id: '04',
          label: '实时',
          title: '口译和实时字幕',
          for: '跨境会议、市政厅、会议和活动。',
          typical: '高管会议、财报电话会议、产品发布、培训课程、会议、广播的实时字幕。',
          deliver: '交替传译和同声传译。实时字幕。远程和现场支持。由我们的活动技术合作伙伴提供支持。',
          bestFor: '定期进行跨境沟通或活动覆盖多语言受众的团队。'
        }
      ],
      cta: {
        title: '不确定哪种服务适合？',
        subtitle: '告诉我们哪里出了问题 — 我们会诚实地告诉您什么有帮助。',
        button: '联系我们 →'
      }
    },
    how_page: {
      hero: {
        title: '这是一个工作流问题',
        subtitle: '质量在工作流层面崩溃，而不是翻译层面。术语漂移，上下文丢失，没有人拥有这个过程。'
      },
      process: {
        badge: '流程',
        title: '在内容开始漂移之前我们做的五件事',
        steps: [
          {
            title: '从内容上下文开始',
            description: '我们了解您的内容类型、市场、术语优先级以及返工通常来自哪里。产品 UI 更新 ≠ CEO 信件。'
          },
          {
            title: '将控制内置到工作流中',
            description: '我们添加检查点：术语对齐、参考指南、结构化审查。一轮审查和四轮审查的区别。'
          },
          {
            title: '将人类判断置于中心',
            description: '技术提高了速度和一致性。当品牌基调或监管细微差别很重要时，人类做出最终决定。以人为本，技术支持。'
          },
          {
            title: '支持不断变化的内容',
            description: '您的合作伙伴记住您的术语，了解您的节奏，随着源内容的发展跟上步伐。'
          },
          {
            title: '专为跨境团队设计',
            description: '北京 + 香港。我们连接向外发展的中国团队和为大中华区及亚洲进行调整的全球品牌。'
          }
        ]
      },
      tech: {
        badge: '技术说明',
        title: '使工作流更可靠的技术',
        description: '我们的生产工作流包括技术辅助的质量检查、术语验证和一致性控制。我们不出售工具。我们出售结果：更少的审查轮次，更少的返工，保持一致的内容。',
        note: '"当客户问\'你们使用 AI 吗？\' — 我们在技术能使交付更好的地方使用技术，在判断很重要的地方使用人工审查。"',
        cards: [
          {
            title: '以人为本',
            description: '每个项目都有人类责任。技术辅助 — 它不取代判断。'
          },
          {
            title: '受控工作流',
            description: '多阶段审查，从一开始就内置术语纪律，而不是在投诉后修补。'
          },
          {
            title: '策略感知',
            description: '对于具有严格数据处理要求的客户，我们支持受限的处理工作流。'
          }
        ]
      },
      credentials: {
        badge: '运营资质',
        title: '这些是信任信号，而不是主要故事',
        cards: [
          {
            title: 'ISO 17100 认证',
            description: '涵盖合格资源、审查步骤和受控交付的结构化服务框架。'
          },
          {
            title: 'ISO 18587 认证',
            description: '用于结构化修订工作流的受控译后编辑标准。'
          },
          {
            title: '北京 + 香港',
            description: '在一个工作流中支持中国团队和国际利益相关者的运营存在。'
          }
        ]
      },
      cta: {
        title: '工作流摩擦是可以解决的',
        subtitle: '让我们看看摩擦存在于哪里。',
        button: '联系 Translia →'
      }
    },
    industries_page: {
      hero: {
        title: '语言是运营风险',
        subtitle: '当术语、合规性或品牌认知驱动结果时，翻译是一项关键业务功能 — 而不是商品。'
      },
      sections: [
        {
          badge: '⚡ 电动汽车和汽车',
          title: '中国电动汽车品牌扩张迅速。本地化往往落后。',
          context: '全球前十大电动汽车销售商中有六家现在是中国企业。每一家都需要信息娱乐 UI、用户手册、安全警告、经销商材料、活动和监管文档 — 涵盖 30 多种语言。',
          content: [
            '车辆 UI 字符串和信息娱乐系统',
            '用户手册和安全文档',
            '经销商培训材料',
            '营销活动和网站本地化',
            '监管合规文档（CE、ECE、本地型式认证）',
            '语音命令系统本地化'
          ],
          why: '我们了解中国源上下文和欧洲/东南亚目标要求。结构化工作流处理数量和术语精度。我们建立了涵盖主要竞争对手品牌的三语汽车术语资源。'
        },
        {
          badge: '🛍 消费品牌走向全球',
          title: '您的品牌在中国运作良好。它会在其他地方落地吗？',
          context: '扩展到东南亚、欧洲和中东的中国 DTC 品牌面临文化盲点 — 而不仅仅是语言差距。',
          content: [
            '品牌名称调整和文化筛选',
            '电子商务列表（亚马逊、Shopee、Lazada）',
            '社交媒体内容本地化',
            '影响者简报调整',
            '包装文案和品牌风格指南'
          ],
          why: '我们不只是翻译您的营销内容 — 我们对其进行调整。我们的团队了解中国营销风格与东南亚、欧洲和中东市场产生共鸣的内容之间的文化差距。我们捕捉那些让您的品牌看起来像外国品牌而不是全球品牌的东西。'
        },
        {
          badge: '🏭 制造和工业',
          title: '技术内容不容许含糊不清',
          context: '错误的扭矩规格或误译的安全警告会产生实际后果。精度是不容谈判的。',
          content: [
            '技术手册和服务文档',
            'CE/UL 合规文档',
            'B2B 门户本地化',
            '安全数据表（SDS/MSDS）',
            '全球技术人员培训材料'
          ],
          why: '大批量、对术语敏感的内容是我们的结构化工作流最耀眼的地方。我们建立和维护词汇表，强制执行文档集之间的一致性，并处理重复更新，而无需每次都从头开始。'
        }
      ],
      cta: {
        title: '在这些行业之一工作？',
        subtitle: '让我们谈谈您的具体内容挑战。',
        button: '联系我们 →'
      }
    },
    about: {
      hero: {
        title: '多语言内容，每个市场',
        subtitle: '真正的问题很少是“我们需要一个翻译”。而是“这些内容下周需要在 12 个市场发挥作用”。'
      },
      who: {
        title: '多语言内容，为扩展而建',
        p1: '我们帮助品牌、企业团队和渠道合作伙伴保持多语言网站、产品和支持内容的一致性、最新且更易于管理。',
        p2: '我们已经这样做了 15 年 — 不是因为技术没有改变（它已经发生了巨大变化） — 而是因为根本问题没有改变：快速变化的内容很难在各种语言中保持一致，并且随着业务的扩展，这个问题会变得更糟。',
        cards: [
          {
            title: '我们重视什么',
            description: '结果胜于方法。人类判断胜于自动化炒作。工作流控制胜于字数统计。我们通过您的内容是否按时发布来衡量成功 — 而不是每小时处理的字数。'
          },
          {
            title: '我们最适合与谁合作',
            description: '内容不断变化的团队。需要保持一致的多种语言。永不松懈的更新压力。如果多语言内容是一项经常性的运营挑战 — 我们就是为此而建的。'
          }
        ]
      },
      operate: [
        {
          title: '北京 + 香港',
          description: '双重存在使我们能够服务于向全球扩张的中国公司以及为大中华区和亚洲进行调整的国际品牌。'
        },
        {
          title: '以人为本，技术支持',
          description: '我们投资于使我们的工作流更快的技术。但我们从不假装它取代了对品牌敏感的本地化的经验判断。'
        },
        {
          title: '为合作伙伴而建，而不是项目',
          description: '我们最牢固的关系是多年合作，我们成为您内容运营的一部分 — 而不是您每季度重新评估的供应商。'
        }
      ],
      models: {
        title: '与我们合作的两种方式',
        items: [
          {
            title: '通过渠道合作伙伴',
            description: '我们在 BPO 和企业服务框架内工作。PO 控制的范围，结构化报告，跨定期工作流的一致质量。主要模式。'
          },
          {
            title: '直接参与',
            description: '对于想要直接内容工作流合作伙伴的品牌和企业团队。我们从您的挑战开始，建立适合您节奏的交付模型，并从中扩展。'
          }
        ]
      },
      cta: {
        title: '谈谈您的实际工作流',
        subtitle: '如果我们合适，我们会直截了当地告诉您。',
        button: '联系 Translia →'
      }
    },
    contact: {
      hero: {
        title: '让我们修复您的工作流'
      },
      review: {
        title: '免费内容审查',
        description: '分享您当前的多语言内容工作流，我们将为您提供诚实的评估，指出摩擦在哪里 — 以及我们是否是解决它的合适合作伙伴。',
        nextStepsTitle: '接下来会发生什么：',
        steps: [
          '您提交表格',
          '我们在 2 个工作日内审查',
          '我们安排 30 分钟的电话会议来介绍我们的发现',
          '您决定合作是否有意义'
        ],
        directContact: '直接联系：',
        email: 'hi@translia.com',
        beijing: {
          city: '北京：',
          address: '中国北京市东城区法华寺街91号德必天坛WE国际文化创意中心B110室 100061',
          phone: '+86-(0)10-67122138'
        },
        hongkong: {
          city: '香港：',
          address: '香港上环德辅道西32-36号利丰大厦2楼',
          phone: '+852-4407-2994'
        }
      },
      form: {
        company: '公司',
        name: '姓名',
        email: '电子邮件',
        contentType: '什么类型的内容？',
        options: [
          '网站和产品内容',
          '品牌和营销',
          '支持和知识',
          '口译和实时字幕',
          '其他'
        ],
        message: '告诉我们什么不起作用',
        submit: '发送 →'
      }
    },
    footer: {
      tagline: '多语言内容工作流，在各个市场保持发布准备。',
      links: [
        { name: '服务', href: '/services' },
        { name: '工作方式', href: '/how' },
        { name: '行业', href: '/industries' },
        { name: '关于我们', href: '/about' },
        { name: '联系我们', href: '/contact' },
      ],
      legal: [
        { name: '隐私', href: '#' },
        { name: 'Cookie', href: '#' },
      ],
      rights: '© 2026 Translia Limited',
    }
  }
};
