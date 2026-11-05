import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://techgrad.vercel.app'),
  title: 'TECH GRAD | منصة مشاريع التخرج التكنولوجية',
  description:
    'أقوى مشاريع التخرج الأكاديمية المتكاملة لطلاب الحاسوب وتقنية المعلومات، وتطبيقات الويب والموبايل وقواعد البيانات المنفذة بأعلى المعايير الهندسية.',
  keywords:
    'مشاريع تخرج, حاسبات, ذكاء اصطناعي, برمجة, تطوير ويب, مشاريع أكاديمية, TECH GRAD',
  openGraph: {
    title: 'TECH GRAD | منصة مشاريع التخرج التكنولوجية',
    description:
      'أقوى مشاريع التخرج الأكاديمية المتكاملة لطلاب الحاسوب وتقنية المعلومات.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-[Tajawal] antialiased bg-white text-gray-900">
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
