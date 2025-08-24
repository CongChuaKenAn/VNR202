export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 py-6 px-8 mt-auto shadow text-center text-sm text-gray-700 dark:text-gray-300">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Column 1: Logo */}
        <div className="font-bold text-lg">VNR202 - Lịch sử Đảng</div>
        {/* Column 2: Ownership */}
        <div>
          <div className="font-semibold mb-1">Ownership: Group 7</div>
          <div>Development by Hai Nhu</div>
          <div>Content by Kim Thu and Yen Nhi</div>
        </div>
        {/* Column 3: Class & Lecture */}
        <div>
          <div className="font-semibold mb-1">Class: SU25_3W_VNR_9</div>
          <div>Lecture: KhoaNA24</div>
        </div>
      </div>
    </footer>
  );
}
