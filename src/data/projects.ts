export interface Project {
  id: string;
  name: string;
  nameAr: string;
  slug: string;
  tagline: string;
  description: string;
  fullDescription: string;
  category: string;
  date: string;
  image: string;
  technologies: string[];
  features: { title: string; description: string }[];
  aiCapabilities: { title: string; description: string }[];
  architecture: { title: string; description: string }[];
  workflow: { step: number; title: string; description: string }[];
  gallery: string[];
  color: string;
  gradient: string;
}

export const categories = [
  { id: 'all', name: 'جميع المشاريع', icon: '⊕' },
  { id: 'ai', name: 'ذكاء اصطناعي', icon: '🤖' },
  { id: 'web', name: 'تطوير ويب', icon: '🌐' },
  { id: 'mobile', name: 'تطبيقات موبايل', icon: '📱' },
  { id: 'trading', name: 'تداول وتحليل', icon: '📊' },
];

export const projects: Project[] = [
  {
    id: '1',
    name: 'TADWERA',
    nameAr: 'تدويرة',
    slug: 'tadwera',
    tagline: 'سوق ذكي مدعوم بالذكاء الاصطناعي للمستعمل والخردة',
    description:
      'منصة تجارة إلكترونية ذكية تعتمد على الذكاء الاصطناعي لبيع وشراء المستعمل والخردة في مصر، مع تصنيف تلقائي للمنتجات وبحث بصري ومحادثة ذكية.',
    fullDescription:
      'تدويرة هي منصة تجارة إلكترونية متكاملة مبنية بتقنيات حديثة تشمل Next.js 14 و Django REST Framework، تتيح للمستخدمين بيع وشراء المنتجات المستعملة والخردة بسهولة وأمان. تعتمد المنصة على نماذج الذكاء الاصطناعي المتقدمة مثل YOLOv8 للتصنيف البصري التلقائي للمنتجات، وتقنيات RAG (Retrieval-Augmented Generation) لتشغيل شات بوت ذكي يساعد المستخدمين في البحث والاستفسارات. كما توفر المنصة بحثًا دلاليًا (Semantic Search) باستخدام نماذج التضمين (Embedding Models) والبحث المتجهي (Vector Search) لتوفير نتائج بحث أكثر دقة وذكاءً.',
    category: 'ai',
    date: '2026-10-15',
    image: '/images/projects/tadwera.png',
    technologies: [
      'Next.js 14',
      'React.js',
      'Python',
      'Django REST Framework',
      'PostgreSQL',
      'YOLOv8',
      'OpenCV',
      'LangChain',
      'LangGraph',
      'RAG',
      'Vector Search',
      'Embedding Models',
      'Docker',
      'Nginx',
      'REST APIs',
    ],
    features: [
      {
        title: 'منصة تجارة إلكترونية متكاملة',
        description:
          'سوق رقمي شامل لبيع وشراء المنتجات المستعملة والخردة مع نظام إدارة منتجات متقدم.',
      },
      {
        title: 'إدارة المنتجات',
        description:
          'نظام شامل لإضافة وتعديل وحذف المنتجات مع دعم الصور المتعددة والتصنيفات.',
      },
      {
        title: 'التصنيف الذكي بالذكاء الاصطناعي',
        description:
          'تصنيف تلقائي للمنتجات باستخدام نماذج الرؤية الحاسوبية YOLOv8.',
      },
      {
        title: 'البحث البصري',
        description:
          'إمكانية البحث عن المنتجات باستخدام الصور بدلاً من النصوص.',
      },
      {
        title: 'شات بوت ذكي (RAG)',
        description:
          'مساعد ذكي مبني على تقنية RAG يساعد المستخدمين في البحث والاستفسارات.',
      },
      {
        title: 'البحث الدلالي',
        description:
          'بحث متقدم يفهم معنى الاستعلامات وليس فقط الكلمات المفتاحية.',
      },
      {
        title: 'توصيات المنتجات',
        description:
          'نظام توصيات ذكي يقترح منتجات مناسبة بناءً على سلوك المستخدم.',
      },
      {
        title: 'مراسلة البائع والمشتري',
        description:
          'نظام تراسل مباشر بين البائعين والمشترين داخل المنصة.',
      },
      {
        title: 'إدارة المستخدمين والمسؤولين',
        description:
          'لوحة تحكم شاملة لإدارة المستخدمين والصلاحيات والمحتوى.',
      },
    ],
    aiCapabilities: [
      {
        title: 'التصنيف البصري بـ YOLOv8',
        description:
          'استخدام نموذج YOLOv8 المتقدم لاكتشاف وتصنيف المنتجات تلقائيًا من الصور المرفوعة.',
      },
      {
        title: 'الرؤية الحاسوبية - OpenCV',
        description:
          'معالجة الصور وتحسينها باستخدام مكتبة OpenCV لتحسين دقة التصنيف.',
      },
      {
        title: 'شات بوت RAG',
        description:
          'محادثة ذكية مدعومة بتقنية Retrieval-Augmented Generation باستخدام LangChain و LangGraph.',
      },
      {
        title: 'البحث المتجهي والتضمين',
        description:
          'تحويل النصوص والصور إلى متجهات رقمية للبحث الدلالي العميق.',
      },
    ],
    architecture: [
      {
        title: 'الواجهة الأمامية',
        description: 'Next.js 14 مع React.js لواجهة مستخدم تفاعلية وسريعة مع SSR و SSG.',
      },
      {
        title: 'الواجهة الخلفية',
        description:
          'Django REST Framework مع Python لبناء API قوية وآمنة.',
      },
      {
        title: 'قاعدة البيانات',
        description: 'PostgreSQL لتخزين البيانات مع دعم البحث المتجهي.',
      },
      {
        title: 'البنية التحتية',
        description: 'Docker للحاويات و Nginx كخادم عكسي للتوزيع.',
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'رفع المنتج',
        description: 'يقوم البائع برفع صور المنتج والتفاصيل.',
      },
      {
        step: 2,
        title: 'التصنيف التلقائي',
        description: 'يقوم YOLOv8 بتصنيف المنتج وتحديد فئته تلقائيًا.',
      },
      {
        step: 3,
        title: 'الفهرسة والتضمين',
        description: 'يتم تحويل بيانات المنتج إلى متجهات للبحث الدلالي.',
      },
      {
        step: 4,
        title: 'البحث والاكتشاف',
        description:
          'يمكن للمشترين البحث نصيًا أو بصريًا أو عبر الشات بوت.',
      },
      {
        step: 5,
        title: 'التواصل والشراء',
        description: 'تواصل مباشر بين البائع والمشتري لإتمام الصفقة.',
      },
    ],
    gallery: ['/images/projects/tadwera.png'],
    color: '#22c55e',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    id: '2',
    name: 'BAWABET AL-ARABY',
    nameAr: 'بوابة العربي',
    slug: 'bawabet-al-araby',
    tagline: 'نظام فحص مركبات صوتي مدعوم بالذكاء الاصطناعي',
    description:
      'نظام ذكي لفحص ومتابعة المركبات يعمل بالأوامر الصوتية بالعامية المصرية، مع تكامل مباشر مع ملفات Excel و Google Sheets.',
    fullDescription:
      'بوابة العربي هو نظام متطور لفحص ومتابعة المركبات وحجز المواعيد، يعتمد بشكل أساسي على التفاعل الصوتي بالذكاء الاصطناعي. يستخدم النظام تقنية Deepgram Nova-3 للتعرف على الكلام بالعامية المصرية في الوقت الحقيقي، و ElevenLabs لتوليد الردود الصوتية الطبيعية. يتيح النظام للمفتشين إجراء عمليات الفحص بالكامل باستخدام الأوامر الصوتية دون الحاجة للكتابة، مع تكامل مباشر مع ملفات Excel و Google Sheets لاستيراد وتصدير بيانات اللوحات والمركبات.',
    category: 'ai',
    date: '2026-09-20',
    image: '/images/projects/bawabet.png',
    technologies: [
      'Deepgram Nova-3',
      'ElevenLabs',
      'Speech-to-Text (STT)',
      'Voice Activity Detection (VAD)',
      'Natural Language Processing',
      'Python',
      'Excel Integration',
      'Google Sheets Integration',
      'REST APIs',
    ],
    features: [
      {
        title: 'تفاعل صوتي في الوقت الحقيقي',
        description:
          'محادثة صوتية مباشرة مع النظام لتنفيذ عمليات الفحص والاستعلام.',
      },
      {
        title: 'التعرف على العامية المصرية',
        description:
          'دعم كامل للتعرف على الكلام بالعامية المصرية باستخدام Deepgram Nova-3.',
      },
      {
        title: 'الأوامر الصوتية',
        description:
          'تنفيذ العمليات بالكامل عبر الأوامر الصوتية دون الحاجة للكتابة.',
      },
      {
        title: 'النسخ الحي',
        description:
          'عرض نص المحادثة الصوتية في الوقت الحقيقي أثناء التحدث.',
      },
      {
        title: 'البحث عن لوحات المركبات',
        description:
          'البحث السريع عن بيانات المركبات باستخدام أرقام اللوحات.',
      },
      {
        title: 'استرجاع بيانات المركبات',
        description:
          'عرض كافة تفاصيل المركبة وتاريخ الفحوصات والمخالفات.',
      },
      {
        title: 'رفع ملفات Excel',
        description:
          'استيراد بيانات اللوحات والمركبات من ملفات Excel مباشرة.',
      },
      {
        title: 'تكامل Google Sheets',
        description:
          'ربط مباشر مع Google Sheets لتحديث البيانات تلقائيًا.',
      },
      {
        title: 'سير عمل فحص ذكي',
        description:
          'إجراءات فحص مؤتمتة مدعومة بالذكاء الاصطناعي.',
      },
      {
        title: 'معالجة صوتية سريعة',
        description:
          'زمن استجابة منخفض جدًا لمعالجة الأوامر الصوتية.',
      },
    ],
    aiCapabilities: [
      {
        title: 'Deepgram Nova-3',
        description:
          'أحدث نموذج للتعرف على الكلام يدعم العامية المصرية بدقة عالية.',
      },
      {
        title: 'ElevenLabs',
        description:
          'توليد ردود صوتية طبيعية وواقعية بأصوات عربية.',
      },
      {
        title: 'Voice Activity Detection',
        description:
          'اكتشاف تلقائي للنشاط الصوتي لتحسين تجربة المحادثة.',
      },
      {
        title: 'معالجة اللغات الطبيعية',
        description:
          'فهم وتحليل الأوامر الصوتية لاستخراج المعلومات المطلوبة.',
      },
    ],
    architecture: [
      {
        title: 'محرك الصوت',
        description:
          'Deepgram Nova-3 للتحويل من صوت لنص، و ElevenLabs للتحويل من نص لصوت.',
      },
      {
        title: 'المعالجة الخلفية',
        description: 'Python لمعالجة البيانات والتكامل مع الخدمات الخارجية.',
      },
      {
        title: 'تكامل البيانات',
        description:
          'ربط مباشر مع Excel و Google Sheets لإدارة البيانات.',
      },
      {
        title: 'واجهة API',
        description: 'REST APIs لربط جميع مكونات النظام.',
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'بدء المحادثة الصوتية',
        description: 'يبدأ المفتش المحادثة الصوتية مع النظام.',
      },
      {
        step: 2,
        title: 'التعرف على الكلام',
        description:
          'يحول Deepgram الكلام إلى نص مع دعم العامية المصرية.',
      },
      {
        step: 3,
        title: 'معالجة الأوامر',
        description: 'يحلل النظام الأوامر ويستخرج المعلومات المطلوبة.',
      },
      {
        step: 4,
        title: 'تنفيذ العمليات',
        description:
          'يتم البحث عن المركبة وعرض البيانات أو تسجيل الفحص.',
      },
      {
        step: 5,
        title: 'الرد الصوتي',
        description:
          'يولد ElevenLabs ردًا صوتيًا طبيعيًا بنتائج العملية.',
      },
    ],
    gallery: ['/images/projects/bawabet.png'],
    color: '#06b6d4',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: '3',
    name: 'SAQR',
    nameAr: 'صقر',
    slug: 'saqr',
    tagline: 'منصة تداول ذكية مدعومة بالذكاء الاصطناعي',
    description:
      'منصة تداول متقدمة تعتمد على أنظمة الوكلاء الذكية متعددة العوامل (Multi-Agent AI) مع مجلس ذكاء اصطناعي من سبع جولات واختبار تاريخي لعشر سنوات.',
    fullDescription:
      'صقر هي منصة تداول ذكية متطورة تعتمد على مفهوم Agentic AI وأنظمة الوكلاء المتعددة (Multi-Agent Systems) لاتخاذ قرارات تداول مدروسة. تتميز المنصة بمجلس ذكاء اصطناعي (AI Council) يتكون من سبع جولات تحليلية، وثلاث استراتيجيات تداول (محافظة، معتدلة، عدوانية). تشمل المنصة اختبارًا تاريخيًا لعشر سنوات (7 سنوات تدريب و 3 سنوات اختبار)، ونظام تداول ورقي (Paper Trading) للمحاكاة، مع نظام موافقة بشرية قبل التداول الحقيقي (Human-in-the-Loop) لضمان السلامة والتحكم الكامل.',
    category: 'trading',
    date: '2026-11-01',
    image: '/images/projects/saqr.jpg',
    technologies: [
      'Agentic AI',
      'Multi-Agent Systems',
      'AI Council',
      'Algorithmic Trading',
      'Historical Backtesting',
      'Paper Trading',
      'Human-in-the-Loop',
      'Risk Management',
      'Approval-Based Live Trading',
    ],
    features: [
      {
        title: 'مجلس ذكاء اصطناعي من 7 جولات',
        description:
          'نظام تحليل متعدد المراحل يمر بسبع جولات قبل اتخاذ قرار التداول.',
      },
      {
        title: 'ثلاث استراتيجيات تداول',
        description:
          'استراتيجية محافظة ومعتدلة وعدوانية لتناسب مختلف ملفات المخاطر.',
      },
      {
        title: 'اختبار تاريخي لعشر سنوات',
        description:
          'اختبار الاستراتيجيات على بيانات تاريخية لـ 10 سنوات (7 تدريب / 3 اختبار).',
      },
      {
        title: 'التداول الورقي',
        description:
          'محاكاة التداول الحقيقي بدون مخاطرة مالية لاختبار الأداء.',
      },
      {
        title: 'الموافقة البشرية قبل التداول',
        description:
          'نظام Human-in-the-Loop يتطلب موافقة المتداول قبل تنفيذ الصفقات الحقيقية.',
      },
      {
        title: 'ضوابط سلامة التداول',
        description:
          'حدود مخاطر وإيقاف خسائر تلقائي لحماية رأس المال.',
      },
      {
        title: 'قرارات تداول مبنية على الذكاء الاصطناعي',
        description:
          'تحليل شامل للسوق باستخدام وكلاء ذكاء اصطناعي متخصصين.',
      },
    ],
    aiCapabilities: [
      {
        title: 'الذكاء الاصطناعي الوكيل (Agentic AI)',
        description:
          'وكلاء ذكاء اصطناعي مستقلون يعملون معًا لتحليل الأسواق.',
      },
      {
        title: 'أنظمة متعددة الوكلاء',
        description:
          'تعاون بين عدة وكلاء متخصصين في جوانب مختلفة من التحليل.',
      },
      {
        title: 'مجلس الذكاء الاصطناعي',
        description:
          'آلية توافقية من 7 جولات لاتخاذ قرارات تداول مدروسة.',
      },
      {
        title: 'إدارة المخاطر الذكية',
        description:
          'تقييم تلقائي للمخاطر وتعديل الاستراتيجيات وفقًا لظروف السوق.',
      },
    ],
    architecture: [
      {
        title: 'طبقة الوكلاء',
        description:
          'وكلاء متخصصون في التحليل الفني والأساسي وتحليل المشاعر.',
      },
      {
        title: 'مجلس القرار',
        description: 'نظام من 7 جولات يجمع آراء الوكلاء ويصدر القرار النهائي.',
      },
      {
        title: 'محرك التداول',
        description:
          'تنفيذ الصفقات مع دعم التداول الورقي والحقيقي.',
      },
      {
        title: 'نظام الاختبار التاريخي',
        description: 'محرك backtesting لاختبار الاستراتيجيات على بيانات 10 سنوات.',
      },
    ],
    workflow: [
      {
        step: 1,
        title: 'جمع البيانات',
        description: 'جمع بيانات السوق الحية والتاريخية من مصادر متعددة.',
      },
      {
        step: 2,
        title: 'تحليل الوكلاء',
        description:
          'يحلل كل وكيل البيانات من زاويته المتخصصة.',
      },
      {
        step: 3,
        title: 'مجلس الذكاء الاصطناعي',
        description: 'تمر التوصيات بـ 7 جولات تقييم في مجلس AI.',
      },
      {
        step: 4,
        title: 'الموافقة البشرية',
        description: 'يراجع المتداول القرار ويوافق أو يرفض التنفيذ.',
      },
      {
        step: 5,
        title: 'تنفيذ التداول',
        description:
          'تنفيذ الصفقة مع مراقبة مستمرة وضوابط إيقاف الخسائر.',
      },
    ],
    gallery: ['/images/projects/saqr.jpg'],
    color: '#10b981',
    gradient: 'from-emerald-500 to-green-600',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return projects;
  return projects.filter((p) => p.category === category);
}

