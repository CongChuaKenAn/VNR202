"use client";
import { useState, useRef } from "react";

export default function Context() {
  const [open, setOpen] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // phát lại từ đầu
      audioRef.current.play();
    }
  };

  return (
    <section
      className="relative pt-20 pb-10 text-gray-200 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://www.pirexgames.com/GamePoster/hn12_poster.jpg')",
      }}
    >
      {/* Overlay để dễ đọc chữ */}
      <div className="absolute inset-0 bg-black/70"></div>
      {/* Background overlay with subtle texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('/noise-texture.png')] bg-repeat"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-5">
          <p className="inline-block px-8 py-3 border-4 border-red-700 bg-gray-900 font-heading text-3xl md:text-4xl font-bold text-red-500 uppercase tracking-wider shadow-lg">
            Bối Cảnh Lịch Sử
          </p>
        </div>

        {/* Content Box */}
        <div className="relative bg-black/60 border-2 border-amber-500 shadow-2xl p-10 md:p-14 rounded-lg">
          {/* Decorative corners */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t-4 border-l-4 border-red-700"></div>
          <div className="absolute -top-3 -right-3 w-6 h-6 border-t-4 border-r-4 border-red-700"></div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-4 border-l-4 border-red-700"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-4 border-r-4 border-red-700"></div>

          <div className="space-y-8 leading-relaxed text-xl">
            <p>
              Sau khi{" "}
              <span className="text-red-500">
                Hiệp định Paris (tháng 10/1972)
              </span>{" "}
              lâm vào bế tắc, chính quyền Nixon muốn dùng sức mạnh quân sự buộc
              Việt Nam Dân chủ Cộng hòa phải chấp nhận điều kiện của Mỹ trên bàn
              đàm phán.
            </p>

            <p>
              Vì thế, ngày <span className="text-red-500">18/12/1972</span>, Mỹ
              mở cuộc tập kích chiến lược đường không bằng máy bay B-52 vào Hà
              Nội, Hải Phòng và một số địa phương khác. Đây là hành động được
              gọi là{" "}
              <em className="text-red-400 font-semibold">“đánh để đàm phán”</em>{" "}
              nhằm gây sức ép, nhưng thực chất lại trở thành một cuộc đọ sức
              quyết liệt giữa ý chí xâm lược và ý chí kiên cường bảo vệ Tổ quốc
              của nhân dân ta.
            </p>

            {/* Highlighted Quote */}
            <div className="relative mt-10 p-8 bg-black/100 border-l-8 border-red-700 shadow-lg">
              <blockquote className="text-2xl md:text-2xl font-heading font-bold text-red-400 italic leading-relaxed">
                “Đây không chỉ là trận đánh trên bầu trời Hà Nội, mà là cuộc đấu
                trí – đấu lực giữa ý chí xâm lược và ý chí bảo vệ Tổ quốc.”
              </blockquote>

              <div className="mt-6 flex justify-end">
                <div className="w-20 h-1 bg-red-600"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-10 justify-center">
          <div className="mt-12 text-center">
            <button
              onClick={() => setOpenDetail(true)}
              className="inline-block px-8 py-4 font-heading text-lg font-bold tracking-wide text-gray-50 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 border-2 border-zinc-500 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transform transition"
            >
              Chi tiết bối cảnh
            </button>
          </div>
          <div className="mt-12 text-center">
            <button
              onClick={() => setOpen(true)}
              className="inline-block px-8 py-4 font-heading text-lg font-bold tracking-wide text-yellow-200 bg-gradient-to-r from-red-800 via-red-700 to-red-900 border-2 border-yellow-400 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transform transition"
            >
              So Sánh Lực Lượng
            </button>
          </div>
        </div>
      </div>

      {/* Popup Modal Chi tiết bối cảnh */}
      {openDetail && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={(e) => e.target === e.currentTarget && setOpenDetail(false)}
        >
          <div className="bg-black/70 text-gray-200 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg border-2 border-blue-700 shadow-2xl relative p-8">
            <button
              onClick={() => setOpenDetail(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 hover:bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg transition-colors"
              aria-label="Đóng modal"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-center mb-6 text-blue-300">
              Chi Tiết Bối Cảnh
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Hiệp định Paris (10/1972) rơi vào bế tắc, Mỹ muốn dùng sức mạnh
                B-52 để gây áp lực lên Việt Nam...
              </p>
              <p>
                Ngày 18/12/1972, Mỹ mở cuộc tập kích chiến lược quy mô lớn chưa
                từng có, gọi là “Chiến dịch Linebacker II”...
              </p>
              <p>
                Cuộc tập kích này thực chất là một canh bạc chiến lược, nhằm vừa
                đánh vừa đàm phán để buộc Việt Nam phải nhượng bộ. Nhưng kết quả
                đã trở thành thất bại nặng nề cho Mỹ.
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Popup Modal Chi tiết bối cảnh */}
      {openDetail && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={(e) => e.target === e.currentTarget && setOpenDetail(false)}
        >
          <div className="bg-black/70 text-gray-200 max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-lg border-2 border-blue-700 shadow-2xl relative p-8 leading-relaxed">
            <button
              onClick={() => setOpenDetail(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 hover:bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg transition-colors"
              aria-label="Đóng modal"
            >
              ×
            </button>
            <p className="text-3xl font-bold text-center mb-8 text-blue-300 uppercase">
              Chi Tiết Bối Cảnh
            </p>

            <div className="space-y-6 text-lg md:text-xl text-gray-100">
              <p>
                Sau 8 năm đưa quân trực tiếp vào tham chiến trên chiến trường
                miền nam, Mỹ liên tiếp bị thất bại về quân sự. Tại nước Mỹ, làn
                sóng biểu tình phản đối chiến tranh, đòi chính quyền Nixon phải
                rút quân Mỹ ra khỏi chiến tranh Việt Nam ngày càng dâng cao. Về
                ngoại giao, Mỹ bị cộng đồng quốc tế lên án trong cuộc chiến
                tranh xâm lược Việt Nam.
              </p>

              <p>
                Để thực hiện ý đồ đó, cuối năm 1972, Nixon mở cuộc tập kích
                đường không chiến lược chủ yếu bằng B-52, hòng đưa miền bắc Việt
                Nam quay trở về{" "}
                <em className="text-red-400">"thời kỳ đồ đá"</em>, không còn
                tiềm lực chi viện cho miền nam, gây sức ép buộc ta phải nối lại
                các cuộc đàm phán ở Paris, chấp nhận theo sửa đổi của Mỹ và xoa
                dịu Chính phủ Việt Nam Cộng hòa. Tuy nhiên, những toan tính của
                chính quyền Nixon đã được Chủ tịch Hồ Chí Minh và Đảng ta dự
                đoán từ rất sớm.
              </p>
              <p>
                Với dự cảm thiên tài, ngay từ năm 1962, Bác Hồ đã giao nhiệm vụ
                cho Tư lệnh Phùng Thế Tài:
              </p>
              <blockquote className="border-l-4 border-blue-400 pl-4 italic text-blue-200 font-semibold">
                “Bây giờ chú là Tư lệnh Phòng không, vậy chú đã biết gì về B-52
                chưa? Nói thế thôi chứ chú có biết cũng chưa làm gì được nó. Nó
                bay cao trên 10 cây số mà trong tay chú hiện nay mới chỉ có cao
                xạ thôi. Nhưng ngay từ nay, chú phải theo dõi chặt chẽ và thường
                xuyên quan tâm đến loại máy bay B-52 này”
                <br />
                <span className="text-sm text-gray-400">
                  (Chủ tịch Hồ Chí Minh, 1962)
                </span>
              </blockquote>

              <p>
                Ngày 22/10/1963, Chủ tịch Hồ Chí Minh đã ký Sắc lệnh và Bộ Tổng
                Tư lệnh Quân đội nhân dân Việt Nam ra Quyết định số 50 thành lập
                Quân chủng Phòng không – Không quân trên cơ sở hợp nhất Bộ Tư
                lệnh Phòng không và Cục Không quân. Sự kiện này đánh dấu bước
                phát triển mới về tổ chức lực lượng, nâng cao sức mạnh chiến đấu
                của quân đội ta trong chống chiến tranh phá hoại bằng không quân
                của đế quốc Mỹ.
              </p>
              <p>
                Theo dõi sát tình hình chiến trường miền nam và những động thái
                của không quân Mỹ, ngay từ đầu năm 1964, khi đến thăm Bộ đội
                Phòng không, Chủ tịch Hồ Chí Minh căn dặn:
              </p>

              <blockquote className="border-l-4 border-blue-400 pl-4 italic text-blue-200 font-semibold">
                "Các chú phải luôn luôn cảnh giác và lúc nào cũng sẵn sàng chiến
                đấu. Phải kiên quyết bắn rơi máy bay địch nếu chúng liều lĩnh
                xâm phạm vùng trời miền bắc nước ta."
                <br />
                <span className="text-sm text-gray-400">
                  (Chủ tịch Hồ Chí Minh, 1964)
                </span>
              </blockquote>

              <p>
                Đầu tháng 8/1964, sau khi dựng lên "sự kiện Vịnh Bắc Bộ", chính
                quyền Johnson sử dụng không quân đánh phá miền bắc. Trước hết,
                chúng tập trung đánh phá Đồng Hới (Quảng Bình), Vĩnh Linh (Quảng
                Trị)... sau đó leo thang đánh sâu vào bắc Vĩ tuyến 20 với quy mô
                ngày càng lớn. Chưa hết, buộc phải thi hành{" "}
                <em className="text-red-400">"chiến tranh cục bộ"</em> ở Việt
                Nam mà chiến sự vẫn không khả quan, với mong muốn thay đổi tình
                thế và tạo sự răn đe, ngày 18/6/1965, đế quốc Mỹ đã dùng máy bay
                B-52 ném bom căn cứ Long Nguyên của ta ở Bến Cát (Bình Dương).
              </p>

              <p>
                Trước hành động leo thang của Mỹ, ngày 19/7/1965 khi thăm cán
                bộ, chiến sĩ Tiểu đoàn 1 Đoàn Tam Đảo, Bộ đội phòng không –
                không quân, Bác căn dặn:
              </p>

              <blockquote className="border-l-4 border-blue-400 pl-4 italic text-blue-200 font-semibold">
                “… Dù đế quốc Mỹ có lắm súng, nhiều tiền. Dù chúng có B-57, B-52
                hay "bê" gì đi chăng nữa ta cũng đánh. Từng ấy máy bay, từng ấy
                quân Mỹ chứ nhiều hơn nữa ta cũng đánh, mà đã đánh là nhất định
                thắng…Phải nêu cao quyết tâm đánh thắng giặc Mỹ xâm lược, có
                quyết tâm thì làm gì cũng được”
                <br />
                <span className="text-sm text-gray-400">
                  (Chủ tịch Hồ Chí Minh, 19/7/1965)
                </span>
              </blockquote>

              <p>
                Đến tháng 3/1966, Bác đến thăm Quân chủng Phòng không - Không
                quân, chỉ đạo cán bộ, chiến sĩ trong Quân chủng:{" "}
                <em className="text-red-100">
                  “Mỹ đã đưa B-52 vào chiến trường Việt Nam, liên tiếp gây tội
                  ác với đồng bào ta ở nam. Ngay từ bây giờ, các chú phải nghiên
                  cứu, chuẩn bị đối phó với B-52, vì sớm hay muộn, Mỹ cũng sẽ
                  đưa B-52 ra đánh phá miền bắc. Tên lửa của ta có đủ làm cho
                  bắn rơi được máy bay B-52 của Mỹ, nhưng đánh thế nào để thắng,
                  cần nghiên cứu Nhiệm vụ này. Bác giao cho các chú. Chúng ta
                  phải quyết tâm bắn rơi máy bay B-52, phải quyết tâm đánh thắng
                  giặc Mỹ xâm lược...”
                </em>
              </p>

              <p>
                Đầu Xuân 1968, sau khi nghe báo cáo của đồng chí Phùng Thế Tài,
                Phó Tổng Tham mưu trưởng Quân đội nhân dân Việt Nam và đồng chí
                Đặng Tính, Chính ủy kiêm Tư lệnh Quân chủng Phòng không - Không
                quân, Chủ tịch Hồ Chí Minh nhận định:
              </p>

              <blockquote
                onClick={handlePlay}
                className="relative cursor-pointer border-l-4 border-blue-400 pl-4 italic text-blue-200 font-semibold hover:bg-blue-900/20 transition rounded"
              >
                “Sớm muộn rồi đế quốc Mỹ cũng sẽ đưa B-52 ra đánh Hà Nội, rồi có
                thua nó mới chịu thua. Phải dự kiến trước mọi tình huống càng
                sớm càng tốt, để có thời gian mà suy nghĩ, chuẩn bị. Nhớ là
                trước khi thua ở Triều Tiên, đế quốc Mỹ đã hủy diệt Bình Nhưỡng.
                Ở Việt Nam, Mỹ sẽ nhất định thua… Nhưng nó chỉ chịu thua sau khi
                thua trên bầu trời Hà Nội”
                <br />
                <span className="text-sm text-gray-400">
                  (Chủ tịch Hồ Chí Minh, Xuân 1968)
                </span>
                <span className="absolute right-2 text-blue-400 animate-pulse">
                  🔊
                </span>
              </blockquote>

              <audio
                ref={audioRef}
                src="/som_muon_roi_de_quoc_my_cung_se_dua_b_nam_4b656f39-9169-4967-ab31-1a623d8b3000.mp3"
                preload="auto"
              />

              <p className="text-right text-sm text-gray-400">
                Nguồn: Báo Nhân Dân điện tử
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Popup Modal So Sánh */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className="bg-black/60 text-gray-200 max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-lg border-2 border-red-700 shadow-2xl relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 hover:bg-amber-950 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg transition-colors"
              aria-label="Đóng modal"
            >
              ×
            </button>

            <div className="p-6 md:p-8 space-y-4">
              <p className="text-xl md:text-2xl font-heading text-center text-white font-bold mb-8 uppercase pr-12">
                Tương quan lực lượng trong Chiến dịch Điện Biên Phủ trên không
                <br />
                (18/12 – 30/12/1972)
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {/* Địch */}
                <div className="bg-gray-800/70 p-4 md:p-6 rounded-md border border-red-700 shadow-md">
                  <h4 className="text-lg md:text-xl font-bold text-red-400 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    Địch
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                    <li>
                      Máy bay B-52:{" "}
                      <span className="font-semibold text-red-300">
                        197 chiếc
                      </span>{" "}
                      (≈ 50% tổng số), 729 lần ném bom.
                    </li>
                    <li>
                      Máy bay chiến thuật:{" "}
                      <span className="font-semibold text-red-300">
                        999 chiếc
                      </span>{" "}
                      (≈ 1/3 tổng số), 3.920 lần xuất kích.
                    </li>
                    <li>
                      Tàu sân bay:{" "}
                      <span className="font-semibold text-red-300">
                        6 chiếc
                      </span>{" "}
                      (1/3 tổng số), kèm nhiều tàu chỉ huy, radar, hộ tống, cứu
                      hộ…
                    </li>
                  </ul>

                  <p className="mt-4 font-semibold text-red-400">
                    Lực lượng triển khai:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
                    <li>143 B-52G, B-52D ở Guam</li>
                    <li>54 B-52D ở Utapao (Thái Lan)</li>
                    <li>455 máy bay ở Ubon, Korat, Takhli (Thái Lan)</li>
                    <li>124 máy bay ở Đà Nẵng (VN)</li>
                    <li>
                      420 máy bay trên 6 tàu sân bay (America, Enterprise,
                      Midway, Oriskany, Ranger, Saratoga)
                    </li>
                  </ul>
                </div>

                {/* Ta */}
                <div className="bg-gray-800/70 p-4 md:p-6 rounded-md border border-yellow-700 shadow-md">
                  <p className="text-lg md:text-xl font-bold text-yellow-400 mb-4 flex items-center font-heading">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                    Ta
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                    <li>
                      Phòng không:{" "}
                      <span className="font-semibold text-yellow-300">
                        3 sư đoàn
                      </span>{" "}
                      (361, 363, 375) với 23 tiểu đoàn SAM-2 (60%).
                    </li>
                    <li>
                      Pháo cao xạ:{" "}
                      <span className="font-semibold text-yellow-300">
                        13 trung đoàn
                      </span>{" "}
                      (50%).
                    </li>
                    <li>
                      Không quân tiêm kích:{" "}
                      <span className="font-semibold text-yellow-300">
                        4 trung đoàn
                      </span>{" "}
                      (100%).
                    </li>
                    <li>
                      Radar:{" "}
                      <span className="font-semibold text-yellow-300">
                        4 trung đoàn
                      </span>{" "}
                      (80%).
                    </li>
                    <li>
                      Pháo binh địa phương: 3 trung đoàn, 2 tiểu đoàn; 346 đội
                      dân quân với 1.428 khẩu pháo/súng máy.
                    </li>
                  </ul>
                  <p className="mt-3 p-3 bg-yellow-900/30 rounded border-l-4 border-yellow-500">
                    Lực lượng tham gia:{" "}
                    <span className="font-semibold text-yellow-300">
                      54.000 chiến sĩ và dân quân
                    </span>
                    .
                  </p>
                </div>
              </div>

              <div className="bg-gray-800/70 p-4 md:p-6 rounded-md border border-green-700 shadow-md">
                <p className="text-lg md:text-xl font-bold text-green-400 mb-4 flex items-center font-heading">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  Kết quả chiến dịch
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                    <li>
                      Máy bay Mỹ bị bắn rơi:{" "}
                      <span className="font-semibold text-green-300">
                        81 chiếc
                      </span>
                      , trong đó có 34 B-52 (16 chiếc rơi tại chỗ).
                    </li>
                    <li>
                      Giặc lái bị bắt sống:{" "}
                      <span className="font-semibold text-green-300">
                        43 người
                      </span>
                      , trong đó 33 giặc lái B-52.
                    </li>
                  </ul>
                  <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                    <li>
                      <span className="font-semibold text-green-300">
                        6 giặc lái
                      </span>{" "}
                      không quân chiến thuật (2 F-111A).
                    </li>
                    <li>
                      <span className="font-semibold text-green-300">
                        4 giặc lái
                      </span>{" "}
                      hải quân chiến thuật.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
