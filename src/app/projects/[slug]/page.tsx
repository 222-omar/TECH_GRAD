import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, getProjectBySlug } from '@/data/projects';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'مشروع غير موجود' };

  return {
    title: `${project.nameAr} - ${project.name} | TECH GRAD`,
    description: project.description,
    openGraph: {
      title: `${project.nameAr} | TECH GRAD`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const categoryMap: Record<string, string> = {
    ai: 'ذكاء اصطناعي',
    web: 'تطوير ويب',
    mobile: 'تطبيقات موبايل',
    trading: 'تداول وتحليل',
  };

  return (
    <div dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50/80 via-white to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-10 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-blue-600 transition-colors">الرئيسية</Link>
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/projects" className="hover:text-blue-600 transition-colors">المشاريع</Link>
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-900 font-semibold">{project.nameAr}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                {categoryMap[project.category] || 'مشاريع تخرج'}
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">
                {project.nameAr}
              </h1>
              <p className="text-xl text-blue-600 font-bold mb-4">{project.name}</p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {project.tagline}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {project.fullDescription}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/201143912497"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 hover:shadow-lg transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  استفسر عن المشروع
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-bold hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                >
                  تواصل معنا
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-blue-100">
                <Image
                  src={project.image}
                  alt={project.nameAr}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Date Badge */}
              <div className="absolute -bottom-4 right-8 bg-white px-5 py-2.5 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2 text-sm font-bold text-gray-700">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(project.date).toLocaleDateString('ar-EG', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              ⚡ التقنيات المستخدمة
            </div>
            <h2 className="text-3xl font-black text-gray-900">
              الحزمة <span className="text-gradient">التقنية</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 bg-white border-2 border-gray-200 text-gray-700 rounded-xl text-sm font-bold hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 hover:shadow-md transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              ✨ المميزات الرئيسية
            </div>
            <h2 className="text-3xl font-black text-gray-900">
              مميزات <span className="text-gradient">المشروع</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                  <span className="text-blue-600 font-black text-sm group-hover:text-white transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              🤖 قدرات الذكاء الاصطناعي
            </div>
            <h2 className="text-3xl font-black text-gray-900">
              تقنيات <span className="text-gradient">الذكاء الاصطناعي</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.aiCapabilities.map((cap, i) => (
              <div
                key={i}
                className="flex gap-5 bg-gradient-to-l from-blue-50/50 to-indigo-50/50 p-6 rounded-2xl border border-blue-100/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              🏗️ الهيكل والبنية
            </div>
            <h2 className="text-3xl font-black text-gray-900">
              البنية <span className="text-gradient">المعمارية</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.architecture.map((arch, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200">
                  <span className="text-white font-black text-lg">{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{arch.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{arch.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              🔄 سير العمل
            </div>
            <h2 className="text-3xl font-black text-gray-900">
              كيف <span className="text-gradient">يعمل</span> المشروع
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {project.workflow.map((step, i) => (
              <div key={i} className="flex gap-6 mb-8 last:mb-0">
                {/* Step Number & Line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-200 flex-shrink-0">
                    <span className="text-white font-black">{step.step}</span>
                  </div>
                  {i < project.workflow.length - 1 && (
                    <div className="w-0.5 h-full bg-blue-200 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex-1 hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              📸 معرض الصور
            </div>
            <h2 className="text-3xl font-black text-gray-900">
              صور <span className="text-gradient">المشروع</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {project.gallery.map((img, i) => (
              <div key={i} className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <Image
                  src={img}
                  alt={`${project.nameAr} - صورة ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo Presentation Placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              🎥 العرض التوضيحي
            </div>
            <h2 className="text-3xl font-black text-gray-900">
              فيديو <span className="text-gradient">استعراض المشروع</span>
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              عرض تجريبي حي لكافة وظائف النظام والذكاء الاصطناعي
            </p>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl border-4 border-gray-100 flex items-center justify-center group cursor-pointer">
            <Image
              src={project.image}
              alt={`${project.nameAr} فيديو توضيحي`}
              fill
              className="object-cover opacity-40 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"
            />
            <div className="relative z-10 text-center p-6">
              <div className="w-20 h-20 bg-blue-600 group-hover:bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                مشاهدة العرض التجريبي لمشروع {project.nameAr}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                1080p Full HD • عرض تفصيلي لمهندسي المشروع
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to other projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900">
              مشاريع <span className="text-gradient">أخرى</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.nameAr}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {p.nameAr}
                    </h3>
                    <p className="text-blue-600 text-sm font-semibold">{p.name}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

