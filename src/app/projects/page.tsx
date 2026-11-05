'use client';

import { useState, useMemo } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', name: 'جميع الأعمال', icon: '⊞' },
    { id: 'web', name: 'تطوير ويب', icon: '</>' },
    { id: 'trading', name: 'تداول وتحليل', icon: '📊' },
    { id: 'ai', name: 'تعلم آلي وذكاء اصطناعي', icon: '🧠' },
    { id: 'grad', name: 'مشاريع تخرج', icon: '🎓' },
  ];

  const filteredProjects = useMemo(() => {
    let list = projects;

    if (activeCategory === 'grad') {
      list = projects; // All are graduation projects
    } else if (activeCategory !== 'all') {
      list = projects.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.nameAr.toLowerCase().includes(q) ||
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.technologies.some((t) => t.toLowerCase().includes(q))
      );
    }

    return list;
  }, [activeCategory, searchQuery]);

  const getTabCount = (tabId: string) => {
    if (tabId === 'all' || tabId === 'grad') return projects.length;
    return projects.filter((p) => p.category === tabId).length;
  };

  return (
    <div className="bg-[#fcfdfe] min-h-screen" dir="rtl">
      {/* Header / Hero Section matching Screenshot 1 */}
      <section className="relative pt-12 pb-14 px-4 bg-gradient-to-b from-blue-50/50 via-white to-[#fcfdfe] text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-6 border border-blue-100/80">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9l11 6l9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
            </svg>
            <span>معرض الأعمال ومشاريع التخرج</span>
          </div>

          {/* Big Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4 tracking-tight">
            مشاريع التخرج ومعرض الأعمال البرمجية
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            أقوى مشاريع التخرج الأكاديمية المتكاملة لطلاب الحاسوب وتقنية المعلومات، وتطبيقات الويب والموبايل وقواعد البيانات المنفذة بأعلى المعايير الهندسية.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar Section matching Screenshot 1 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-2xl border border-gray-200/80 p-5 sm:p-6 mb-10 shadow-sm">
          {/* Row 1: Search Box & "تصفية حسب التخصص" */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            {/* Search Input Box with blue button on left */}
            <div className="flex items-stretch w-full md:w-96 rounded-xl border border-gray-200 overflow-hidden focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
              <input
                type="text"
                placeholder="ابحث فى المشاريع والتقنيات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 text-xs sm:text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-white"
              />
              <button
                type="button"
                className="bg-[#2563eb] hover:bg-blue-700 text-white px-4 flex items-center justify-center transition-colors"
                title="بحث"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Filter title and count */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-600">
              <span className="text-blue-600">({projects.length} مشاريع متاحة)</span>
              <span className="flex items-center gap-1.5 text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                </svg>
                تصفية حسب التخصص
              </span>
            </div>
          </div>

          {/* Row 2: Filter Tabs matching Screenshot 1 */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              const count = getTabCount(tab.id);
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#2563eb] text-white shadow-sm'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-xs">{tab.icon}</span>
                  <span>{tab.name}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.5 rounded-md font-mono ${
                      isActive ? 'bg-white/25 text-white' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid matching Screenshot 2 */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center max-w-md mx-auto">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1">لم يتم العثور على مشاريع</h3>
            <p className="text-gray-500 text-xs sm:text-sm">
              جرب تغيير كلمة البحث أو اختيار تصنيف مختلف لعرض المشاريع المتاحة.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
