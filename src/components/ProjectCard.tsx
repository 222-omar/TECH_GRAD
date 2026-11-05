'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const categoryMap: Record<string, string> = {
    all: 'مشاريع تخرج',
    ai: 'ذكاء اصطناعي',
    web: 'تطوير ويب',
    mobile: 'تطبيقات موبايل',
    trading: 'تداول وتحليل',
  };

  return (
    <div
      className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
      dir="rtl"
    >
      {/* Card Image with category pill */}
      <div className="relative h-60 w-full overflow-hidden bg-gray-100">
        <Image
          src={project.image}
          alt={project.nameAr}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Category Badge on top-left or top-right as in screenshot */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1.5 rounded-md shadow-sm border border-gray-100">
            {categoryMap[project.category] || 'مشاريع تخرج'}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1 text-right">
        {/* Date matching screenshot */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
          <span>{project.date}</span>
          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Project Title matching screenshot (Blue text) */}
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-lg font-black text-[#2563eb] hover:text-blue-800 transition-colors leading-snug mb-3">
            {project.nameAr}: {project.tagline}
          </h3>
        </Link>

        {/* Project Description */}
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-semibold px-2.5 py-1 bg-gray-50 text-gray-700 rounded-md border border-gray-200"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[11px] font-semibold px-2.5 py-1 bg-blue-50 text-blue-600 rounded-md border border-blue-100">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Button: تفاصيل المشروع ‹ */}
        <div className="pt-2 border-t border-gray-100">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl border border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/40 text-xs sm:text-sm font-bold transition-all duration-200"
          >
            <span>تفاصيل المشروع</span>
            <span className="text-sm font-bold">‹</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
