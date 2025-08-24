"use client";

export default function DamageSection() {
  return (
    <section
      className="relative py-20 bg-fixed bg-center bg-cover text-gray-100"
      style={{
        backgroundImage: `url('https://media.vov.vn/sites/default/files/styles/large/public/2021-12/Vach%20%20nhieu%20tim%20thu.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="container mx-auto relative z-10 max-w-6xl px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-4xl md:text-5xl font-heading font-bold text-red-500 uppercase tracking-wider">
            Thiệt Hại Do Mỹ Gây Ra
          </p>
          <p className="text-gray-50 mt-2 text-lg italic">
            Trong 12 ngày đêm cuối năm 1972 (18/12 – 30/12)
          </p>
        </div>

        {/* Bomb summary */}
        <div className="text-center mb-12">
          <p className="text-3xl font-bold text-yellow-300">
            🚨 Ném hơn 10.000 tấn bom
          </p>
          <p className=" text-gray-50 text-lg italic mt-2">
            trong đó B-52 thả 444 lần và máy bay chiến thuật thả &gt; 1.000 lần
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Phá hủy */}
          <div className="bg-red-900/40 border-l-4 border-red-500 p-6 rounded-lg shadow-lg">
            <p className="text-4xl font-bold text-yellow-300 font-serif mb-4">
              Phá Hủy
            </p>
            <ul className="space-y-2 list-disc pl-6 text-gray-200 text-lg">
              <li>7/9 ga xe lửa</li>
              <li>4/5 cầu, 4/5 phà</li>
              <li>1/3 nhà máy, xí nghiệp</li>
              <li>5 bệnh viện</li>
            </ul>
          </div>

          {/* Giết hại */}
          <div className="bg-gray-700/40 border-l-4 border-gray-950 p-6 rounded-lg shadow-lg">
            <p className="text-4xl font-bold text-yellow-300 font-serif mb-4">
              Giết Hại
            </p>
            <ul className="space-y-2 list-disc pl-6 text-gray-200 text-lg">
              <li>
                <span className="text-3xl font-bold text-red-600">2.380</span>{" "}
                người chết
              </li>
              <li>
                <span className="text-2xl font-bold text-red-600">1.355</span>{" "}
                người bị thương
              </li>
            </ul>
          </div>

          {/* Đánh phá */}
          <div className="bg-purple-950/40 border-l-4 border-purple-900 p-6 rounded-lg shadow-lg">
            <p className="text-4xl font-bold text-yellow-300 font-serif mb-4">
              Đánh Phá
            </p>
            <ul className="space-y-2 list-disc pl-6 text-gray-200 text-lg">
              <li>4 thị trấn, 67 xã ngoại thành</li>
              <li>37 khối phố nội thành</li>
              <li>17 lần cầu Đuống, 14 lần cầu Long Biên</li>
              <li>14 lần ga Yên Viên</li>
              <li>8 lần Nhà máy điện Yên Phụ</li>
            </ul>
          </div>
        </div>

        {/* Bomb comparison */}
        <div className="mt-16 text-center">
          <p className="text-3xl font-bold text-red-300 mb-4">
            💣 Lượng bom dội xuống / 1 km²
          </p>
          <div className="flex flex-col justify-center">
            <p className="mt-3 text-2xl">
              Hà Nội:{" "}
              <span className="text-yellow-300 font-bold">33,33 tấn/km²</span>
            </p>
            <p className="mt-3 text-lg">Trong khi ở: </p>
            <p>Đức (Thế chiến 2): 5,4 tấn/km²</p>
            <p>Nhật (Thế chiến 2): 0,43 tấn/km²</p>
          </div>
        </div>

        {/* Source */}
        <p className="mt-8 text-m text-center text-gray-400 italic">
          (Nguồn tư liệu: Bảo tàng Chiến thắng B52 – Báo Nhân Dân)
        </p>
      </div>
    </section>
  );
}
