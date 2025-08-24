export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/ScreenRecording_08-22-2025 04-00-54_1.mp4.gif')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-red-900/50" />

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="mx-auto space-y-8">
          {/* Main title */}
          <h1 className="text-5xl md:text-7xl font-extrabold font-heading leading-tight tracking-wide">
            <span className="block bg-gradient-to-r from-yellow-200 via-red-500 to-yellow-300 text-transparent bg-clip-text drop-shadow-[0_4px_12px_rgba(255,0,0,0.7)]">
              HÀ NỘI – 12 NGÀY ĐÊM
            </span>
            <br />
            <span className="block mt-4 bg-gradient-to-r from-red-600 via-red-700 to-yellow-500 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(255,50,50,0.9)]">
              ĐIỆN BIÊN PHỦ TRÊN KHÔNG
            </span>
          </h1>
          {/* Subtitle */}
          <div className="space-y-4">
            <p className="text-xl md:text-3xl font-semibold text-red-200">
              18/12 – 30/12/1972
            </p>
            <p className="text-lg md:text-3xl text-gray-300 mx-auto leading-relaxed font-bold">
              Cuộc đọ sức quyết định giữa B-52 Mỹ và ý chí kiên cường của nhân
              dân Hà Nội
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
