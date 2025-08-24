"use client";
import { useEffect, useState } from "react";

export default function MeaningSection() {
  const [stars, setStars] = useState<
    { top: string; left: string; delay: string }[]
  >([]);

  useEffect(() => {
    // chỉ random sau khi client mount
    const newStars = Array.from({ length: 8 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
    }));
    setStars(newStars);
  }, []);
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Overlay trang trí */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Shooting stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((s, i) => (
          <span
            key={i}
            className="shooting-star absolute w-0.5 h-20 bg-gradient-to-b from-white via-gray-500 to-transparent opacity-70"
            style={{
              top: s.top,
              left: s.left,
              animationDelay: s.delay,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto space-y-5">
        {/* Tiêu đề */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 drop-shadow-2xl uppercase tracking-wider">
            Ý Nghĩa Lịch Sử
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto"></div>
        </div>

        {/* Nội dung */}
        <div className="flex flex-col gap-10 text-lg leading-relaxed">
          {/* Quân sự */}
          <div className="bg-white/5 border border-red-600 rounded-xl shadow-xl p-6 space-y-4 hover:scale-[1.02] transition-transform">
            <p className="text-3xl font-bold font-serif text-amber-200 flex items-center gap-2">
              ⚔️ Quân sự
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-200 text-lg">
              <li>
                Lần đầu tiên trên thế giới, B-52 – máy bay ném bom chiến lược
                mạnh nhất của Mỹ – bị đánh bại trong một chiến dịch quy mô lớn.
              </li>
              <li>
                Khẳng định nghệ thuật phòng không nhân dân và tác chiến hiệp
                đồng hiện đại: ra-đa – tên lửa – không quân – cao xạ, cùng thế
                trận phòng không 3 thứ quân.
              </li>
            </ul>
          </div>

          {/* Chính trị – Ngoại giao */}
          <div className="bg-white/5 border border-yellow-500 rounded-xl shadow-xl p-6 space-y-4 hover:scale-[1.02] transition-transform">
            <p className="text-3xl font-bold flex items-center gap-2 font-serif text-yellow-200">
              🕊️ Chính trị – Ngoại giao
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-200">
              <li>
                Buộc Mỹ trở lại đàm phán và ký Hiệp định Paris (27/1/1973); mở
                đường cho việc rút quân Mỹ khỏi Việt Nam.
              </li>
              <li>
                Góp phần làm lung lay chính quyền Nixon, tăng sức ép từ phong
                trào phản chiến trong nước Mỹ và dư luận quốc tế.
              </li>
            </ul>
          </div>

          {/* Tinh thần – Xã hội */}
          <div className="bg-white/5 border border-green-500 rounded-xl shadow-xl p-6 space-y-4 hover:scale-[1.02] transition-transform">
            <p className="text-3xl font-bold  flex items-center gap-2 font-serif text-yellow-200">
              🌟 Tinh thần – Xã hội
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-200">
              <li>
                Khẳng định bản lĩnh, trí tuệ và ý chí sắt đá của nhân dân Việt
                Nam: <span className="italic">“Hà Nội có thể thắng B-52”.</span>
              </li>
              <li>
                Hà Nội trở thành biểu tượng anh hùng trên bản đồ thế giới, được
                so sánh với chiến thắng Điện Biên Phủ 1954.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Shooting star animation style */}
      <style jsx>{`
        .shooting-star {
          transform: rotate(45deg);
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes fall {
          0% {
            transform: translate(0, 0) rotate(45deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translate(-300px, 300px) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
