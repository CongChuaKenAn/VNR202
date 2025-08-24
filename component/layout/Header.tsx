import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-white dark:bg-gray-900 shadow">
      <div className="flex items-center gap-3">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          {/* Thay SVG bằng hình ảnh */}
          <img
            src="https://img.lovepik.com/free-png/20210924/lovepik-party-emblem-png-image_401366282_wh1200.png"
            alt="Logo"
            className="w-12 h-12 rounded-lg object-contain"
          />
        </Link>

        {/* Link VNR202: ép không gạch chân kể cả khi hover/focus */}
        <Link
          href="/"
          className=" transition-colors no-underline hover:no-underline focus:no-underline active:no-underline [text-decoration:none] hover:[text-decoration:none]"
          style={{ textDecoration: "none" }}
        >
          <span className="text-4xl hover:text-red-500 font-bold tracking-wide text-gray-900 dark:text-white">
            VNR202
          </span>
        </Link>
      </div>

      <nav className="flex items-center gap-15">
        <Link
          href="/game"
          className=" transition-colors no-underline hover:no-underline focus:no-underline active:no-underline [text-decoration:none] hover:[text-decoration:none]"
          style={{ textDecoration: "none" }}
        >
          <span className="text-xl hover:text-red-500 font-bold tracking-wide text-gray-900 dark:text-white">
            Trò chơi
          </span>
        </Link>
        <Link
          href="/y-nghia-lich-su"
          className=" transition-colors no-underline hover:no-underline focus:no-underline active:no-underline [text-decoration:none] hover:[text-decoration:none]"
          style={{ textDecoration: "none" }}
        >
          <span className="text-xl hover:text-red-500 font-bold tracking-wide text-gray-900 dark:text-white">
            Đảng thời kỳ 1954 - 1975
          </span>
        </Link>
      </nav>
    </header>
  );
}
