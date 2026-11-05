'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'تطوير موقع أو تطبيق ويب مخصص',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    const whatsappMsg = `*طلب خدمة / استفسار مشروع من منصة TECH GRAD*\n\n` +
      `👤 *الاسم:* ${formData.name}\n` +
      `📧 *البريد:* ${formData.email}\n` +
      `📱 *الهاتف:* ${formData.phone || 'غير محدد'}\n` +
      `🛠️ *الخدمة:* ${formData.service}\n` +
      `📋 *الموضوع:* ${formData.subject}\n` +
      `📝 *التفاصيل:* \n${formData.message}`;

    window.open(
      `https://wa.me/201143912497?text=${encodeURIComponent(whatsappMsg)}`,
      '_blank'
    );
  };

  return (
    <div className="bg-[#fcfdfe] min-h-screen" dir="rtl">
      {/* Hero Header matching Screenshot 4 */}
      <section className="relative pt-12 pb-14 px-4 bg-gradient-to-b from-blue-50/50 via-white to-[#fcfdfe] text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-6 border border-blue-100/80">
            <svg className="w-4 h-4 transform rotate-45 -mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            <span>تواصل</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4 tracking-tight">
            تواصل معنا واستفسر عن مشروعك
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            يسعدنا التواصل معك ومناقشة تفاصيل مشروعك أو خدمتك المطلوبة وتقديم أفضل الحلول الهندسية والتنفيذية.
          </p>
        </div>
      </section>

      {/* Two-Column Form & Details matching Screenshot 4 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Column (Left in visual, takes 7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-sm text-right">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
              إرسال رسالة أو طلب خدمة
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5">
                    الاسم الكريم <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="اكتب اسمك هنا"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-gray-800 placeholder-gray-400 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5">
                    البريد الإلكتروني <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="example@mail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-gray-800 placeholder-gray-400 bg-white"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5">
                    رقم الهاتف / واتساب (اختياري)
                  </label>
                  <input
                    type="tel"
                    placeholder="+20 1xx xxx xxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-gray-800 placeholder-gray-400 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5">
                    الخدمة المطلوبة
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-gray-800 bg-white cursor-pointer"
                  >
                    <option value="تطوير موقع أو تطبيق ويب مخصص">تطوير موقع أو تطبيق ويب مخصص</option>
                    <option value="تطوير تطبيق موبايل (Android / iOS)">تطوير تطبيق موبايل (Android / iOS)</option>
                    <option value="مشروع تخرج حاسبات وذكاء اصطناعي">مشروع تخرج حاسبات وذكاء اصطناعي</option>
                    <option value="أنظمة الذكاء الاصطناعي ووكلاء AI">أنظمة الذكاء الاصطناعي ووكلاء AI</option>
                    <option value="استشارة برمجية وهندسة قواعد بيانات">استشارة برمجية وهندسة قواعد بيانات</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Subject */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5">
                  عنوان الموضوع <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="ملخص موجز لطلبك"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-gray-800 placeholder-gray-400 bg-white"
                />
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5">
                  تفاصيل الرسالة أو المشروع <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="اكتب تفاصيل طلبك أو مشروعك هنا..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-gray-800 placeholder-gray-400 bg-white resize-y"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-[#2563eb] hover:bg-blue-700 text-white rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <svg className="w-4 h-4 transform rotate-45 -mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                <span>إرسال الرسالة عبر واتساب</span>
              </button>

              {isSubmitted && (
                <p className="text-center text-xs text-green-600 font-bold">
                  ✓ جاري تحويلك إلى واتساب لإرسال رسالتك مباشرة!
                </p>
              )}
            </form>
          </div>

          {/* Info Column matching Screenshot 4 (Takes 5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-sm text-right space-y-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">
              معلومات التواصل المباشر
            </h2>

            {/* Location */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold mb-0.5">الموقع</p>
                <p className="text-sm font-bold text-gray-800">مصر (ومتاح للعمل عن بُعد)</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold mb-0.5">البريد الإلكتروني</p>
                <a
                  href="mailto:techgrad.projects@gmail.com"
                  className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  dir="ltr"
                >
                  techgrad.projects@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold mb-0.5">واتساب مباشر</p>
                <a
                  href="https://wa.me/201143912497"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-gray-800 hover:text-green-600 transition-colors"
                  dir="ltr"
                >
                  +20 114 391 2497
                </a>
              </div>
            </div>

            {/* Direct Phone */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold mb-0.5">رقم الهاتف</p>
                <a
                  href="tel:+201143912497"
                  className="text-sm font-bold text-gray-800 hover:text-blue-600 transition-colors"
                  dir="ltr"
                >
                  +20 114 391 2497
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold mb-0.5">أوقات العمل</p>
                <p className="text-sm font-bold text-gray-800">يومياً من الساعة 9:00 ص حتى 11:00 م</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
