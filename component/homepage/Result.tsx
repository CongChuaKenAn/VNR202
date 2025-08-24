"use client";

export default function CampaignResult() {
  return (
    <section
      className="relative py-20 px-6 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          // "url('/ScreenRecording_08-22-2025 04-02-02_1.mp4')",
          "url('https://i.pinimg.com/736x/f8/ac/44/f8ac4493d2e53d61d1609bc053bde229.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

      <div className="relative z-10 container mx-auto text-white space-y-14">
        <div className="text-center space-y-1">
          <p
            className="text-5xl md:text-7xl font-heading font-black 
   text-transparent bg-clip-text bg-gradient-to-r 
   from-yellow-400 via-red-500 to-yellow-400 
   drop-shadow-2xl uppercase tracking-wider  
   leading-[2]"
          >
            Kết Quả Chiến Dịch
          </p>
          <div className="w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto"></div>
          <p className="text-xl md:text-2xl text-gray-300 font-serif font-bold italic">
            "Điện Biên Phủ trên không" - Chiến thắng lịch sử
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Aircraft shot down */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-800/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-gradient-to-br from-red-900/60 to-red-800/40 border-2 border-red-500/50 rounded-xl p-8 shadow-2xl backdrop-blur-sm">
              <div className="bg-red-800/30 rounded-lg p-4 border-l-4 border-red-400">
                <span className="text-white text-2xl ml-2">Bắn rơi</span>
                <span className="text-3xl font-bold text-red-100"> 81</span>
                <span className="text-white text-2xl ml-2">
                  máy bay của Mỹ các loại, trong đó
                </span>
              </div>
              <div className="space-y-4 text-lg mt-2">
                <div className="grid grid-cols-3 gap-3 text-base text-center font-semibold">
                  <div className="bg-red-900/20 rounded p-3">34 B-52</div>
                  <div className="bg-red-900/20 rounded p-3">5 F-111A</div>
                  <div className="bg-red-900/20 rounded p-3">21 F-4</div>
                  <div className="bg-red-900/20 rounded p-3">12 A-7</div>
                  <div className="bg-red-900/20 rounded p-3">1 F-105</div>
                  <div className="bg-red-900/20 rounded p-3">4 A-6</div>
                  <div className="bg-red-900/20 rounded p-3">2 RA-5C</div>
                  <div className="bg-red-900/20 rounded p-3">1 HH-53</div>
                  <div className="bg-red-900/20 rounded p-3">1 UAV</div>
                </div>
              </div>
            </div>
          </div>

          {/* Captured pilots */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-gradient-to-br from-blue-900/60 to-blue-800/40 border-2 border-blue-500/50 rounded-xl p-8 shadow-2xl backdrop-blur-sm">
              <div className="bg-blue-800/50 rounded-lg p-4 border-l-4 border-blue-400">
                <span className="text-white text-2xl ml-2">Bắt sống</span>
                <span className="text-3xl font-bold text-red-100"> 43</span>
                <span className="text-white text-2xl ml-2">
                  giặc lái, trong đó
                </span>
              </div>
              <div className="space-y-4 text-lg mt-2">
                <div className="flex flex-col gap-3 text-base text-center font-semibold">
                  <div className="bg-blue-600/10 rounded p-3 text-white">
                    33 giặc lái B-52
                  </div>
                  <div className="bg-blue-600/10 rounded p-3 text-white">
                    6 giặc lái không quân chiến thuật
                    <span className="text-m"> (2 giặc lái F-111A)</span>
                  </div>

                  <div className="bg-blue-600/10 rounded p-3 text-white">
                    4 giặc lái hải quân chiến thuật
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div> */}
          {/* <div className="relative bg-gradient-to-br from-blue-900/60 to-blue-800/40 border-2 border-blue-500/50 rounded-xl p-8 shadow-2xl backdrop-blur-sm"></div> */}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        {/* US Side */}
        <div className="relative group h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-800/10 rounded-xl blur-xl"></div>
          <div className="relative h-full bg-gradient-to-br from-gray-900/80 to-gray-800/60 border-2 border-red-600/50 rounded-xl p-8 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-xl">
                🇺🇸
              </div>
              <p className="text-2xl md:text-3xl font-heading font-bold text-white">
                Phía Mỹ
              </p>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <div className="bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500">
                <p className="text-red-200">
                  Tổn thất nặng nề, hàng chục B-52 bị bắn rơi.
                </p>
              </div>
              <div className="bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500">
                <p className="text-red-200">
                  Không đạt được mục tiêu khuất phục ý chí của Việt Nam.
                </p>
              </div>
              <div className="bg-yellow-900/30 rounded-lg p-4 border-l-4 border-yellow-500">
                <p className="text-yellow-200 font-semibold mb-2">
                  Ngày{" "}
                  <span className="text-yellow-300 font-bold">30/12/1972</span>,
                  Nixon buộc phải tuyên bố:
                </p>
                <ul className="space-y-2 text-lg text-yellow-100 ml-4">
                  <li>• Chấm dứt tập kích đường không vào Hà Nội, Hải Phòng</li>
                  <li>• Ngừng ném bom từ vĩ tuyến 20 trở ra</li>
                  <li>• Đề nghị tiếp tục đàm phán, ký Hiệp định Paris</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Vietnamese Side */}
        <div className="relative group h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-800/10 rounded-xl blur-xl"></div>
          <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 border-2 border-green-600/50 rounded-xl p-8 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-xl">
                🇻🇳
              </div>
              <p className="text-2xl md:text-3xl font-heading font-bold text-white">
                Phía Việt Nam
              </p>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <div className="bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500 text-red-200">
                <span className="">Tổn thất nặng nề: </span>
                <span className="font-bold">2.380 </span>
                <span>người chết, </span>
                <span className="font-bold">1.355 </span>người bị thương; nhiều
                cơ sở hạ tầng bị phá hủy.
              </div>
              <div className="bg-green-900/30 rounded-lg p-4 border-l-4 border-green-500">
                <p className="text-green-200">
                  Bảo vệ vững chắc Thủ đô và miền Bắc, giữ thế chủ động trên bàn
                  đàm phán.
                </p>
              </div>
              <div className="bg-yellow-900/30 rounded-lg p-4 border-l-4 border-yellow-500">
                <p className="text-yellow-200">
                  Đánh bại "cuộc tập kích đường không chiến lược lớn nhất trong
                  lịch sử Mỹ"
                </p>
              </div>
              <div className="bg-green-900/30 rounded-lg p-4 border-l-4 border-green-500">
                <p className="text-green-200">
                  Buộc Mỹ phải ký
                  <span className="font-bold">
                    {" "}
                    Hiệp định Paris (27/1/1973){" "}
                  </span>
                  , rút quân, công nhận độc lập và chủ quyền của Việt Nam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center relative">
        {/* Glow background */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/30 via-red-600/30 to-yellow-600/30 blur-2xl rounded-2xl"></div>

        <div className="relative bg-black/70 rounded-2xl p-10 border-2 border-yellow-500/70 shadow-2xl">
          <blockquote
            className="text-2xl md:text-4xl font-serif italic font-bold 
                 text-transparent bg-clip-text bg-gradient-to-r 
                 from-yellow-300 via-orange-400 to-red-400 
                 drop-shadow-[2px_2px_8px_rgba(0,0,0,0.9)] leading-relaxed"
          >
            “12 ngày đêm lịch sử đã chứng minh: Không có sức mạnh nào có thể
            khuất phục được ý chí kiên cường của dân tộc Việt Nam trong cuộc đấu
            tranh bảo vệ độc lập, tự do.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
