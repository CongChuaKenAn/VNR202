"use client";
import Image from "next/image";

export default function HistoricalMeaning() {
  return (
    <section className="relative py-16 px-6 bg-[#f6ebb6] text-gray-900 font-serif leading-relaxed">
      <div className="container mx-auto space-y-12 max-w-5xl">
        {/* Title */}
        <div className="text-center space-y-2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-red-800 uppercase tracking-wide">
            Ý nghĩa lịch sử và kinh nghiệm lãnh đạo của Đảng (1954 – 1975)
          </h2>
          <div className="w-40 h-1 bg-red-800 mx-auto"></div>
        </div>

        {/* Ý NGHĨA */}
        <article className="space-y-8">
          <h3 className="text-2xl font-bold text-red-700 uppercase">
            I - Ý nghĩa lịch sử
          </h3>

          <p className="text-xl font-bold">
            1. Kết thúc 21 năm chiến đấu chống Mỹ, 30 năm chiến tranh cách mạng,
            117 năm chống đế quốc xâm lược.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <figure className="relative w-full h-56">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/French_ships_at_Danang_1858.jpg/500px-French_ships_at_Danang_1858.jpg"
                alt="1858 - Pháp nổ súng Đà Nẵng"
                fill
                className="object-cover rounded"
              />
            </figure>
            <figure className="relative w-full h-56">
              <Image
                src="https://media.vov.vn/sites/default/files/styles/large/public/2023-05/images1139304_6810aa9d609525dimages941103_media_thumb1382169701.jpg"
                alt="1954 - Chiến thắng Điện Biên Phủ"
                fill
                className="object-cover rounded"
              />
            </figure>
            <figure className="relative w-full h-56">
              <Image
                src="https://baoquocte.vn/stores/news_dataimages/dangtuan/042020/28/10/45-nam-giai-phong-mien-nam-thong-nhat-dat-nuoc-chien-thang-cua-noi-luc-viet-nam.jpg"
                alt="1975 - Giải phóng miền Nam"
                fill
                className="object-cover rounded"
              />
            </figure>
          </div>

          {/* 2. Kết thúc thắng lợi... */}
          <p className="text-xl font-bold">
            2. Kết thúc thắng lợi cuộc cách mạng dân tộc dân chủ nhân dân trên
            phạm vi cả nước, mở ra kỷ nguyên mới cho dân tộc.
          </p>
          <ul className="text-xl space-y-2 list-disc list-inside">
            <li>
              Kỷ nguyên cả nước hòa bình, thống nhất, cùng chung một nhiệm vụ
              chiến lược, đi lên chủ nghĩa xã hội.
            </li>
            <li>
              Làm tăng thêm sức mạnh vật chất, tinh thần thế và lực cho cách
              mạng và dân tộc Việt Nam, nâng cao uy tín của Đảng và dân tộc trên
              trường quốc tế.
            </li>
            <li>
              Nâng cao khí phách, niềm tự hào và để lại những kinh nghiệm quý
              báu cho sự nghiệp dựng nước và giữ nước.
            </li>
          </ul>
          <div className="grid md:grid-cols-2 gap-4">
            <figure className="relative w-full h-72">
              <Image
                src="https://dalat.lamdong.dcs.vn/Portals/4/media/newsimage/h/1/-/h1-nhan-dan-sai-gon-dieu-hanh-mung-tp-duoc-giai-phong.jpg"
                alt="1975 – Giải phóng miền Nam"
                fill
                unoptimized
                className="object-cover rounded"
              />
            </figure>
            <figure className="relative w-full h-72">
              <Image
                src="https://thanhnienduongsat.vn/uploads/news/2021_07/271.jpg"
                alt="Kỷ nguyên hòa bình, thống nhất"
                fill
                unoptimized
                className="object-cover rounded"
              />
            </figure>
          </div>

          <p className="text-xl font-bold">
            3. Làm thất bại âm mưu và thủ đoạn của chủ nghĩa đế quốc tiến công
            vào chủ nghĩa xã hội và cách mạng thế giới
          </p>
          <ul className="text-xl space-y-2 list-disc list-inside">
            <li>
              Đánh bại cuộc chiến tranh xâm lược quy mô lớn nhất, dài ngày nhất
              của chủ nghĩa đế quốc, làm phá sản các chiến lược chiến tranh thực
              dân kiểu mới và tác động đến nội tình nước Mỹ.
            </li>
            <li>
              Làm suy yếu trận địa của chủ nghĩa đế quốc, phá vỡ một phòng tuyến
              quan trọng của chúng ở khu vực Đông Nam Á, mở ra sự sụp đổ của chủ
              nghĩa thực dân mới, cổ vũ phong trào độc lập dân tộc, dân chủ và
              hòa bình thế giới.
            </li>
          </ul>
          <div className="grid md:grid-cols-2 gap-4">
            <figure className="relative w-full h-64">
              <Image
                src="https://special.nhandan.vn/khang_chien_chong_my_cuu_nuoc_thang_loi_vi_dai_cua_Viet_Nam/assets/okFC5DldAK/thanh-nien-xung-phong-thanh-pho-ho-chi-minh-di-xay-dung-cac-khu-kinh-te-moi-san-sang-hoan-thanh-xuat-sac-moi-nhiem-vu-dang-va-nhan-dan-giao-pho-.-1900x1239.webp"
                alt="Đấu tranh chống Mỹ – chính nghĩa"
                fill
                unoptimized
                className="object-cover rounded"
              />
            </figure>
            <figure className="relative w-full h-64">
              <Image
                src="https://cdnimage.daihoidang.vn/t460/Uploaded/VNP/uploaded/viennd/2021_01_18/ttxvn_dai_hoi_04_01.jpg"
                alt="Đại hội Đảng lần thứ IV - 1976"
                fill
                unoptimized
                className="object-cover rounded"
              />
            </figure>
          </div>

          <div className="bg-red-900/90 rounded-r-xl ">
            <blockquote className="py-3 italic font-bold text-xl text-amber-400 border-l-7 border-red-600 pl-2">
              “Năm tháng sẽ trôi qua, nhưng thắng lợi của nhân dân ta trong sự
              nghiệp kháng chiến chống Mỹ, cứu nước mãi mãi được ghi vào lịch sử
              dân tộc ta như một trong những trang chói lọi nhất, một biểu tượng
              sáng ngời về sự toàn thắng của chủ nghĩa anh hùng cách mạng và trí
              tuệ con người, và đi vào lịch sử thế giới như một chiến công vĩ
              đại của thế kỷ XX, một sự kiện có tầm quan trọng quốc tế to lớn và
              có tính thời đại sâu sắc”
              <span className="block text-lg mt-2 text-white justify-end items-end mr-2">
                — Đại hội IV, 1976
              </span>
            </blockquote>
          </div>
        </article>

        {/* KINH NGHIỆM */}
        <article className="space-y-8">
          <h3 className="text-2xl font-bold text-red-700 uppercase">
            II - Kinh nghiệm lãnh đạo
          </h3>

          {/* Một, Hai là */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Một là */}
            <div className="md:w-1/2 space-y-3">
              <p className="text-xl leading-relaxed">
                <span className="font-bold text-red-700">Một là, </span>
                giương cao ngọn cờ độc lập dân tộc và chủ nghĩa xã hội nhằm huy
                động sức mạnh toàn dân đánh Mỹ, cả nước đánh Mỹ.
              </p>
              <figure className="relative w-full h-64">
                <Image
                  src="https://a.tcnn.vn/uploads/resources/hoainga/images/images(75).jpg"
                  alt="Toàn dân đoàn kết đánh Mỹ"
                  fill
                  unoptimized
                  className="object-cover rounded"
                />
              </figure>
            </div>

            {/* Hai là */}
            <div className="md:w-1/2 space-y-3">
              <p className="text-xl leading-relaxed">
                <span className="font-bold text-red-700">Hai là, </span>
                tìm ra phương pháp đấu tranh đúng đắn, sáng tạo, thực hiện khởi
                nghĩa toàn dân và chiến tranh nhân dân, sử dụng phương pháp cách
                mạng tổng hợp.
              </p>
              <figure className="relative w-full h-64">
                <Image
                  src="https://thanhgiong.vn/uploads/2023/08/16/chu-tich-ho-chi-minh-chien-dich-dien-bien-phu-1619407427630480440735-1689756753179.jpeg"
                  alt="Phương pháp đấu tranh cách mạng tổng hợp"
                  fill
                  unoptimized
                  className="object-cover rounded"
                />
              </figure>
            </div>
          </div>

          {/* Ba, Bốn là */}
          <div className="flex flex-col md:flex-row gap-10">
            {/* Ba là */}
            <div className="md:w-1/2 space-y-3">
              <p className="text-xl leading-relaxed mb-11">
                <span className="font-bold text-red-700">Ba là, </span>
                phải có công tác tổ chức chiến đấu giỏi của các cấp bộ Đảng và
                các cấp chi ủy quân đội, thực hiện giành thắng lợi từng bước đến
                thắng lợi hoàn toàn.
              </p>
              <figure className="relative w-full h-64">
                <Image
                  src="https://a.tcnn.vn/uploads/resources/hoainga/images/f8f336d27957a1b2f13b2daec1d1b4b0_l.jpg"
                  alt="Chiến đấu giỏi - bộ đội chủ lực"
                  fill
                  unoptimized
                  className="object-cover rounded"
                />
              </figure>
            </div>

            {/* Bốn là */}
            <div className="md:w-1/2 space-y-3">
              <p className="text-xl leading-relaxed">
                <span className="font-bold text-red-700">Bốn là, </span>
                hết sức coi trọng công tác xây dựng Đảng, xây dựng lực lượng
                cách mạng ở miền Nam và tổ chức xây dựng chiến đấu trong cả
                nước, tranh thủ tối đa sự đồng tình, ủng hộ của quốc tế.
              </p>
              <figure className="relative w-full h-64">
                <Image
                  src="https://www.phuyen.dcs.vn/images/uploaded/2212.png"
                  alt="Xây dựng Đảng và tranh thủ quốc tế"
                  fill
                  unoptimized
                  className="object-cover rounded"
                />
              </figure>
            </div>
          </div>
        </article>

        {/* HẠN CHẾ */}
        <article className="space-y-4">
          <h3 className="text-2xl font-bold text-red-700 uppercase">
            III - Hạn chế
          </h3>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Chữ bên trái */}
            <div className="md:w-1/3">
              <p className="text-xl leading-relaxed">
                Có thời điểm đánh giá so sánh lực lượng giữa ta và địch chưa
                thật đầy đủ, còn biểu hiện nóng vội, chủ quan, duy ý chí trong
                xây dựng CNXH ở miền Bắc.
              </p>
            </div>

            {/* Hình bên phải */}
            <figure className="relative w-full md:w-2/3 h-70">
              <Image
                src="https://s-aicmscdn.vietnamhoinhap.vn/vnhn-media/22/12/6/2-hn-dpb.jpg"
                alt="Chiến đấu giỏi - quân đội nhân dân"
                fill
                unoptimized
                className="object-cover rounded"
              />
            </figure>
          </div>
        </article>
      </div>
    </section>
  );
}
