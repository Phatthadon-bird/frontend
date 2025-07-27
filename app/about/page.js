"use client";

import { FaTableTennis, FaCalendarAlt, FaUsers } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex justify-center items-center px-4">
      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content container */}
      <div className="relative max-w-5xl w-full bg-white bg-opacity-95 backdrop-blur-lg rounded-3xl shadow-2xl p-10 sm:p-16 flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Left: Text */}
        <div className="flex-1 space-y-10 text-gray-900 text-base sm:text-lg leading-relaxed">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6 text-center md:text-left drop-shadow-lg">
            เกี่ยวกับเรา
          </h1>

          {/* Item 1 */}
          <div className="flex items-start gap-5 animate-fadeInUp">
            <FaTableTennis className="text-blue-600 w-9 h-9 flex-shrink-0 mt-1" />
            <p className="font-medium">
              เราคือผู้ให้บริการสนามสนุ๊กเกอร์คุณภาพสูง เน้นบรรยากาศสบายและบริการมืออาชีพ
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-5 animate-fadeInUp delay-150">
            <FaCalendarAlt className="text-blue-600 w-9 h-9 flex-shrink-0 mt-1" />
            <p className="font-medium">
              บริการครบวงจร ตั้งแต่จองโต๊ะ ซ้อมเล่น สอนสนุ๊กเกอร์ และจัดกิจกรรมแข่งขัน
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-5 animate-fadeInUp delay-300">
            <FaUsers className="text-blue-600 w-9 h-9 flex-shrink-0 mt-1" />
            <p className="font-medium">
              ทีมงานมืออาชีพ พร้อมดูแลและพัฒนาสนามของเราอย่างเต็มที่ เพื่อความประทับใจสูงสุด
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 max-w-md sm:max-w-lg lg:max-w-xl">
          <Image
            src="/image/7.jpg"
            alt="สนามสนุ๊กเกอร์"
            width={600}
            height={420}
            className="rounded-3xl shadow-2xl object-cover hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease forwards;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
}
