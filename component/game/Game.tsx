"use client";
import { useState } from "react";

type Question = {
  question: string;
  options: string[];
  answer: number;
  praises: string[];
  regrets: string[];
};

const questions: Question[] = [
  {
    question:
      "Chiến dịch “Hà Nội – 12 ngày đêm” diễn ra trong khoảng thời gian nào?",
    options: [
      "5/1972 – 6/1972",
      "18/12/1972 – 29/12/1972",
      "19/12/1946 – 2/1947",
      "4/1975 – 30/4/1975",
    ],
    answer: 1,
    praises: ["Rất chính xác, bạn nắm thời gian rất rõ."],
    regrets: ["Ôi không! Hãy nhớ mốc 18/12 – 29/12/1972 nhé."],
  },
  {
    question: "Mỹ đã huy động loại máy bay chiến lược nào để ném bom Hà Nội?",
    options: ["F-111", "F-4 Phantom", "B-52 Stratofortress", "C-130 Hercules"],
    answer: 2,
    praises: ["Chính xác! B-52 là pháo đài bay khổng lồ ."],
    regrets: ["Sai mất rồi. Đáp án đúng là B-52 Stratofortress nha bạn!"],
  },
  {
    question:
      "Vũ khí chủ lực của quân và dân ta trong việc bắn rơi B-52 là gì?",
    options: [
      "Súng trường AK",
      "Pháo 105mm",
      "Xe tăng T-54",
      "Tên lửa đất đối không SAM-2",
    ],
    answer: 4,
    praises: ["Đúng rồi! SAM-2 đã lập nhiều chiến công vang dội của quân ta."],
    regrets: ["Bạn chưa xem bài kỹ rồi. Vũ khí chủ lực là tên lửa SAM-2."],
  },
  {
    question: "Ngày 20/12/1972, quân và dân ta đã lập kỳ tích gì?",
    options: [
      "Bắn rơi 10 chiếc B-52",
      "Chiếm được kho xăng Đức Giang",
      "Tiêu diệt tập đoàn cứ điểm",
      "Đánh chìm tàu chiến Mỹ",
    ],
    answer: 0,
    praises: ["Xuất sắc! Ngày 20/12, quân ta bắn rơi 10 chiếc B-52."],
    regrets: [
      "Mình thất vọng với bạn quá. Kỳ tích là bắn rơi 10 chiếc B-52 nha bạn ơi.",
    ],
  },
  {
    question: "Kết thúc 12 ngày đêm, Mỹ đã phải làm gì?",
    options: [
      "Tăng quân vào miền Nam",
      "Ngừng bắn và rút khỏi miền Bắc",
      "Mở rộng chiến tranh ra Lào, Campuchia",
      "Việt Nam hóa chiến tranh",
    ],
    answer: 1,
    praises: ["Chuẩn luôn! Mỹ buộc phải ngừng ném bom."],
    regrets: ["Sai rồi bạn ơi. Đáp án đúng là ngừng bắn và rút khỏi miền Bắc."],
  },
  {
    question: "Hiệp định nào được Mỹ buộc phải ký kết sau thất bại ở Hà Nội?",
    options: [
      "Hiệp định Giơ-ne-vơ 1954",
      "Hiệp định Paris 1973",
      "Hiệp định đình chiến Điện Biên Phủ",
      "Hiệp định Pa-tê-nốt",
    ],
    answer: 1,
    praises: ["Chính xác! Đây là thắng lợi ngoại giao của Việt Nam."],
    regrets: ["Không đúng! Đáp án đúng là Hiệp định Paris 1973."],
  },
  {
    question: "Chiến dịch 12 ngày đêm còn được nhân dân gọi bằng tên gì?",
    options: [
      "Chiến dịch Hồ Chí Minh",
      "Mậu Thân 1968",
      "Điện Biên Phủ trên không",
      "Tổng tiến công mùa Xuân 1975",
    ],
    answer: 2,
    praises: [
      "Bạn học rất tốt. Người ta gọi Chiến dịch 12 ngày đêm là Điện Biên Phủ trên không.",
    ],
    regrets: [
      "Bạn chưa đọc kỹ nội dung rồi. Đáp án đúng là Điện Biên Phủ trên không nhé!",
    ],
  },
  {
    question:
      "Trong thế trận phòng không, lực lượng nào phối hợp tác chiến hiệu quả nhất?",
    options: [
      "Bộ binh – Không quân",
      "Hải quân – Đặc công",
      "Ra-đa – Tên lửa – Không quân – Cao xạ",
      "Pháo binh – Công binh",
    ],
    answer: 2,
    praises: ["Chuẩn luôn! Đây là sự phối hợp toàn diện"],
    regrets: [
      "Câu này hơi khó bạn nhỉ. Đáp án đúng là Ra-đa – Tên lửa – Không quân – Cao xạ nha.",
    ],
  },
  {
    question:
      "Chiến thắng Hà Nội – 12 ngày đêm có ý nghĩa chính trị quan trọng gì?",
    options: [
      "Kéo dài chiến tranh",
      "Giúp Mỹ tăng uy tín quốc tế",
      "Thay đổi chính quyền ở miền Nam",
      "Buộc Mỹ phải chấp nhận thất bại, rút quân về nước",
    ],
    answer: 3,
    praises: ["Xuất sắc! Đây là thất bại lớn của Mỹ."],
    regrets: ["Sai mất rồi. Ý nghĩa chính là buộc Mỹ rút quân đó bạn."],
  },
  {
    question: "Ý nghĩa tinh thần – xã hội lớn nhất của chiến thắng này là gì?",
    options: [
      "Chứng minh miền Bắc mạnh hơn Mỹ",
      "Khẳng định bản lĩnh, trí tuệ và ý chí sắt đá của dân tộc Việt Nam",
      "Giúp Việt Nam thành cường quốc quân sự",
      "Kết thúc chiến tranh ngay lập tức",
    ],
    answer: 1,
    praises: [
      "Đúng rồi! Đây là biểu tượng ý chí quật cường của dân tộc ta nè.",
    ],
    regrets: [
      "Câu này khiến bạn hơi phân vân nhỉ. Đáp án đúng là khẳng định bản lĩnh và trí tuệ dân tộc nhé.",
    ],
  },
];

export default function HanoiQuiz() {
  const [opened, setOpened] = useState<number | null>(null);
  const [answered, setAnswered] = useState<{ [key: number]: boolean }>({});
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isanswer, setIsanswer] = useState<boolean | null>(null);

  const handleAnswer = (qIdx: number, optIdx: number) => {
    if (answered[qIdx]) return;

    let answer = optIdx === questions[qIdx].answer;
    setIsanswer(answer);

    if (answer) {
      setScore((s) => s + 10);
      const praiseList = questions[qIdx].praises;
      setFeedback(praiseList[Math.floor(Math.random() * praiseList.length)]);
    } else {
      const regretList = questions[qIdx].regrets;
      setFeedback(regretList[Math.floor(Math.random() * regretList.length)]);
    }

    setAnswered({ ...answered, [qIdx]: true });

    setTimeout(() => {
      setFeedback(null);
      setOpened(null);
    }, 5000);
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center pt-10 font-serif relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://dbndnghean.vn/dbndna-media/22/12/14/chien-dich-dien-bien-phu-tren-khong.jpg')",
      }}
    >
      {/* Overlay làm tối nền */}
      <div className="absolute inset-0 bg-black/0.5 z-0 pointer-events-none"></div>

      <p className="text-4xl font-bold text-yellow-500 bg-red-700/80 rounded-xl p-4 drop-shadow-lg uppercase text-center">
        Bạn Hiểu Chiến Dịch Hà Nội – 12 Ngày Đêm Bao Nhiêu?
      </p>
      <p className="mb-4 mt-4 text-xl font-semibold text-white bg-green-800/50 px-4 py-1 rounded">
        Điểm: {score}
      </p>

      {/* Danh sách lá phiếu */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
        {questions.map((q, idx) => (
          <div
            key={idx}
            className={`w-32 h-40 flex items-center justify-center border-1 rounded-lg cursor-pointer text-xl font-bold
          ${
            answered[idx]
              ? "bg-gray-500 border-gray-600"
              : "bg-yellow-200 hover:bg-yellow-300 text-black border-yellow-700"
          }`}
            onClick={() => setOpened(idx)}
          >
            {answered[idx] ? "Đã mở" : "?"}
          </div>
        ))}
      </div>

      {/* Hiển thị câu hỏi */}
      {opened !== null && !answered[opened] && (
        <div className="mt-8 bg-black/70 p-6 rounded-lg shadow-xl max-w-2xl w-full z-10 backdrop-blur-md">
          <p className="font-bold text-xl mb-4 text-white">
            {questions[opened].question}
          </p>
          <div className="space-y-2">
            {questions[opened].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(opened, i)}
                className="block w-full px-4 py-2 text-left bg-yellow-400 hover:bg-yellow-500 rounded border border-yellow-700 text-black font-semibold"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Bot AI cố định góc phải */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-2">
        {feedback && (
          <div
            className={`relative max-w-xs mb-2 px-4 py-2 rounded-xl border shadow-lg bg-gray-200`}
          >
            <p
              className={`text-lg font-semibold ${
                isanswer ? "text-green-600" : "text-red-600"
              }`}
            >
              {feedback}
            </p>
            {/* Mũi tên bubble dưới bên phải */}
            <div
              className="absolute bottom-[-10px] right-6 w-0 h-0 
                   border-l-[10px] border-r-[10px] border-t-[10px] 
                   border-l-transparent border-r-transparent border-t-gray-200"
            ></div>
          </div>
        )}
        <img
          src="https://s3.ap-south-1.amazonaws.com/custpostimages/sb_images/loading.gif"
          alt="AI bot"
          className="w-40 h-auto object-contain drop-shadow-lg"
        />
      </div>
    </div>
  );
}
