# TECH GRAD 🎓

منصة متطورة لعرض وتوثيق مشاريع التخرج الأكاديمية والتكنولوجية لطلاب كليات الحاسبات والمعلومات والمعاهد العليا لعلوم الحاسب.

---

## 🚀 كيفية تشغيل المشروع (Quick Start)

1. الدخول إلى مجلد المشروع:
```bash
cd d:\tech_grad\website
```

2. تشغيل السيرفر المحلي في وضع التطوير (Development):
```bash
npm run dev
```
افتح المتصفح على: `http://localhost:3000`

3. لبناء النسخة النهائية للإنتاج (Production Build):
```bash
npm run build
```

4. لتشغيل نسخة الإنتاج (Production Run):
```bash
npm run start
```

---

## 📁 هيكلية المشروع (Project Architecture)

```
d:\tech_grad\website\
├── src\
│   ├── app\
│   │   ├── layout.tsx              # الإطار العام مع الخطوط وNavbar وFooter
│   │   ├── globals.css             # أنماط Tailwind CSS v4 والتخصيصات
│   │   ├── page.tsx                # الصفحة الرئيسية (Hero, Featured Projects, Services, Skills, About)
│   │   ├── contact\
│   │   │   └── page.tsx            # صفحة التواصل المباشر مع واتساب والنموذج الكامل
│   │   └── projects\
│   │       ├── page.tsx            # صفحة معرض المشاريع مع البحث والتصفية بالتخصص
│   │       └── [slug]\
│   │           └── page.tsx        # الصفحة التفصيلية لكل مشروع بشكل ديناميكي (SSG)
│   ├── components\
│   │   ├── Navbar.tsx              # شريط التنقل المتجاوب بالكامل مع EN و CTA
│   │   ├── Footer.tsx              # الفوتر الكامل مع روابط الخدمات ومعلومات الاتصال المباشرة
│   │   ├── ProjectCard.tsx         # بطاقة المشروع المتطابقة مع التصميم المرجعي
│   │   └── WhatsAppButton.tsx      # زر واتساب العائم في الزاوية اليسرى
│   └── data\
│       └── projects.ts             # الهيكل المركزي الموحد لكافة بيانات المشاريع
└── public\
    └── images\
        └── projects\               # صور المشاريع (Tadwera, Bawabet, Saqr, Rehon)
```

---

## 🛠️ المشاريع المدمجة (Integrated Projects)

### 1. تدويرة (TADWERA)
- **الوصف:** سوق ذكي مدعوم بالذكاء الاصطناعي لبيع وشراء المستعمل والخردة في مصر.
- **التقنيات:** Next.js 14, React.js, Python, Django REST Framework, PostgreSQL, YOLOv8, OpenCV, LangChain, LangGraph, RAG, Vector Search, Embedding Models, Docker, Nginx, REST APIs.

### 2. بوابة العربي (BAWABET AL-ARABY)
- **الوصف:** نظام فحص ومتابعة المركبات صوتي مدعوم بالذكاء الاصطناعي بالعامية المصرية.
- **التقنيات:** Deepgram Nova-3, ElevenLabs, Speech-to-Text (STT), Voice Activity Detection (VAD), Natural Language Processing, Python, Excel Integration, Google Sheets Integration, REST APIs.

### 3. صقر (SAQR)
- **الوصف:** منصة تداول ذكية مدعومة بالذكاء الاصطناعي متعدد الوكلاء (Multi-Agent Systems).
- **التقنيات:** Agentic AI, Multi-Agent Systems, AI Council, Algorithmic Trading, Historical Backtesting, Paper Trading, Human-in-the-Loop, Risk Management, Approval-Based Live Trading.

---

## 📞 بيانات التواصل المعتمدة:
- **الدولة:** مصر (ومتاح للعمل عن بُعد)
- **الهاتف / واتساب:** `+20 114 391 2497`
- **البريد الإلكتروني:** `techgrad.projects@gmail.com`
