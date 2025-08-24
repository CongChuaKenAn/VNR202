"use client";

import { useEffect, useRef, useState } from "react";

export default function Overview() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://langngheviet.com.vn/stores/news_dataimages/langnghevietcomvn/122022/19/10/ha-noi-12-ngay-dem-khong-ngu-23-.5390.jpg')",
      }}
    >
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-red-900 to-black"></div>

      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="text-center mb-12">
          <div className="inline-block border-2 border-red-700 bg-black/80 px-8 py-4">
            <p className="text-4xl font-heading font-bold text-amber-100">
              TỔNG QUAN CHIẾN DỊCH
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Visual Elements Column */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative bg-white border-4 border-amber-800 pt-4 transform -rotate-1 max-w-sm mx-auto">
              <img
                src="/b52.jpg"
                alt="B-52 Stratofortress"
                className="w-2/3 mx-auto sepia"
              />
              <div className="absolute -top-2 -right-2 bg-red-800 text-amber-100 px-3 py-2 font-mono text-xs font-bold transform rotate-12 border-2 border-red-900">
                B-52 STRATOFORTRESS
              </div>
              <p className="text-s font-mono text-amber-700 mt-3 mb-0 text-center">
                Ảnh tư liệu - Không quân Mỹ
              </p>
            </div>

            <div className="w-20 h-20 bg-gradient-to-br from-red-800 via-red-700 to-red-900 flex items-center justify-center border-4 border-yellow-400 shadow-2xl transform rotate-45 relative">
              <div className="transform -rotate-45">
                <div className="text-3xl font-serif font-black text-yellow-100 drop-shadow-lg">
                  VS
                </div>
              </div>
              <div className="absolute -top-2 -left-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping delay-300"></div>
            </div>

            <div className="relative bg-white border-4 border-lime-900 pt-4 transform rotate-1 max-w-sm mx-auto">
              <img
                src="/sam.JPG"
                alt="SAM Missile System"
                className="w-2/3 mx-auto sepia"
              />
              <div className="absolute -top-2 -left-2 bg-green-800 text-amber-100 px-3 py-2 font-mono text-xs font-bold transform -rotate-12 border-2 border-green-900">
                TÊN LỬA SAM
              </div>
              <p className="text-s font-mono text-amber-700 mt-3 mb-0 text-center">
                Hệ thống phòng không Việt Nam
              </p>
            </div>
          </div>
          {/* Content Column */}
          <div className="space-y-6">
            <div className="bg-gray-950/50 border-2 rounded-2xl border-amber-100 p-8 relative">
              <div className="border-b-2 border-amber-800 pb-4 mb-6 ">
                <p className="text-3xl font-serif font-bold text-amber-200">
                  BÁO CÁO TÌNH HÌNH
                </p>
                <p className="text-xl font-mono text-white">
                  Chiến dịch Hà Nội 12 ngày đêm
                </p>
              </div>

              <div className="space-y-4 font-serif text-amber-50">
                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-amber-800 mt-1"></div>
                  <div>
                    <span className="font-bold">THỜI GIAN:</span>
                    <span className="ml-2 text-lg font-mono font-bold">
                      18 – 30/12/1972
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-amber-800 mt-1"></div>
                  <div>
                    <span className="font-bold">MỤC TIÊU:</span>
                    <span className="ml-2 leading-relaxed font-mono text-m">
                      Mỹ muốn "san phẳng Hà Nội – Hải Phòng", ép ký Hiệp định
                      Paris.
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-amber-800 mt-1"></div>
                  <div className="w-full">
                    <span className="font-bold">QUY MÔ TẤN CÔNG:</span>

                    <div className="mt-4 border-2 border-amber-800">
                      <div className="bg-amber-800 text-amber-100 p-2">
                        <p className="font-bold text-center text-xl whitespace-break-spaces">
                          Số liệu thống kê
                        </p>
                      </div>

                      <div className="divide-y-2 divide-amber-800">
                        <div className="p-4 flex justify-between items-center">
                          <span className="font-mono text-lg font-bold">
                            Lượt B-52:
                          </span>
                          <div
                            className={`text-2xl font-bold font-mono text-amber-300 transition-all duration-1000 ${
                              isVisible
                                ? "opacity-100 transform translate-x-0"
                                : "opacity-0 transform translate-x-4"
                            }`}
                          >
                            663
                          </div>
                        </div>

                        <div className="p-4 flex justify-between items-center">
                          <span className="font-mono text-lg font-bold">
                            Máy bay chiến thuật:
                          </span>
                          <div
                            className={`text-2xl font-bold font-mono text-amber-300 transition-all duration-1000 delay-200 ${
                              isVisible
                                ? "opacity-100 transform translate-x-0"
                                : "opacity-0 transform translate-x-4"
                            }`}
                          >
                            3,920
                          </div>
                        </div>

                        <div className="p-4 flex justify-between items-center">
                          <span className="font-mono text-lg font-bold">
                            Tấn bom:
                          </span>
                          <div
                            className={`text-2xl font-bold font-mono text-amber-300 transition-all duration-1000 delay-400 ${
                              isVisible
                                ? "opacity-100 transform translate-x-0"
                                : "opacity-0 transform translate-x-4"
                            }`}
                          >
                            100,000
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
