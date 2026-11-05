import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <div dir="rtl">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-white">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-bold mb-8 animate-fade-in">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            منصة مشاريع التخرج التكنولوجية
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 animate-fade-in-up">
            مشاريع التخرج ومعرض
            <br />
            <span className="text-gradient">الأعمال البرمجية</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            أقوى مشاريع التخرج الأكاديمية المتكاملة لطلاب الحاسوب وتقنية المعلومات، وتطبيقات الويب والموبايل وقواعد البيانات المنفذة بأعلى المعايير الهندسية.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-l from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-blue-200 transition-all duration-300 hover:-translate-y-1"
            >
              استكشف المشاريع
              <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              تواصل معنا
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            {[
              { value: `${projects.length}+`, label: 'مشروع تخرج' },
              { value: '15+', label: 'تقنية مستخدمة' },
              { value: '100%', label: 'ذكاء اصطناعي' },
              { value: '24/7', label: 'دعم متاح' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
              </svg>
              أحدث المشاريع
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              مشاريع التخرج <span className="text-gradient">المميزة</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              اكتشف أحدث مشاريع التخرج المبنية بأعلى المعايير الهندسية وأحدث تقنيات الذكاء الاصطناعي
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-xl font-bold hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              عرض جميع المشاريع
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              ⚡ التقنيات المستخدمة
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              أحدث <span className="text-gradient">التقنيات</span> والأدوات
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Next.js 14', 'React.js', 'Python', 'Django', 'PostgreSQL',
              'YOLOv8', 'OpenCV', 'LangChain', 'RAG', 'Docker',
              'Deepgram', 'ElevenLabs', 'NLP', 'Agentic AI',
              'Multi-Agent Systems', 'Algorithmic Trading', 'Vector Search',
              'REST APIs', 'Machine Learning', 'Computer Vision',
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-semibold hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 hover:shadow-md transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Features Section */}
      <section id="services" className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              🎯 خدماتنا
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              ما نقدمه في <span className="text-gradient">TECH GRAD</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🌐',
                title: 'تطوير مواقع وتطبيقات الويب',
                description: 'بناء مواقع وتطبيقات ويب احترافية باستخدام أحدث التقنيات مثل Next.js و React.',
              },
              {
                icon: '📱',
                title: 'تطوير تطبيقات الموبايل',
                description: 'تصميم وتطوير تطبيقات موبايل عالية الأداء لنظامي Android و iOS.',
              },
              {
                icon: '🤖',
                title: 'حلول الذكاء الاصطناعي',
                description: 'تطوير أنظمة ذكاء اصطناعي متقدمة تشمل NLP والرؤية الحاسوبية وأنظمة التوصية.',
              },
              {
                icon: '🗄️',
                title: 'هندسة قواعد البيانات',
                description: 'تصميم وبناء قواعد بيانات متقدمة مع حلول البحث المتجهي والدلالي.',
              },
              {
                icon: '🎓',
                title: 'دعم مشاريع التخرج',
                description: 'استشارات تقنية ودعم أكاديمي شامل لمشاريع التخرج بأعلى المعايير.',
              },
              {
                icon: '🚀',
                title: 'نشر وتوزيع التطبيقات',
                description: 'نشر المشاريع على الخوادم السحابية مع Docker وإعداد CI/CD.',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50/50 to-white rounded-3xl p-8 sm:p-12 border border-blue-100">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                💡 عن منصة TECH GRAD
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                شريكك الأكاديمي والتقني الموثوق في مشاريع التخرج
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                منصة متخصصة في دعم وتطوير مشاريع التخرج التكنولوجية لطلاب كليات الحاسبات والمعلومات، وهندسة البرمجيات، والذكاء الاصطناعي، والمعاهد العليا لعلوم الحاسب في مصر والوطن العربي. نساعدك في تحويل فكرتك المبتكرة إلى مشروع حقيقي متكامل مطبق بأحدث التقنيات وأعلى المعايير الهندسية.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-sm transition-all"
                >
                  تواصل معنا لمناقشة مشروعك
                </Link>
                <a
                  href="https://wa.me/201143912497"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#22c55e] hover:bg-green-600 text-white px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-sm transition-all"
                >
                  محادثة واتساب فورية
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
