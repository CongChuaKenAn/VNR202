"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";
import { Badge } from "@/component/ui/badge";
import { timelineData } from "@/lib/timeline-data";
import Image from "next/image";

const SectionTitle = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <div className="w-fit">
    <p className="font-bold flex items-center gap-2 font-serif text-2xl text-white relative pb-2">
      {icon} {text}
    </p>
  </div>
);

export default function InteractiveTimeline() {
  const [selectedDay, setSelectedDay] = useState(0);
  const selectedEvent = timelineData[selectedDay];

  return (
    <div
      className="flex-col relative bg-cover bg-center bg-fixed min-h-screen py-10 px-4 flex justify-center"
      style={{
        backgroundImage:
          "url('https://file3.qdnd.vn/data/images/0/2025/04/27/upload_2134/1.png?dpi=150&quality=100&w=870')",
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="inline-block border-2 border-red-700 bg-black/80 px-8 py-4 mb-12 text-center w-fit mx-auto relative z-10">
        <p className="text-4xl font-heading font-bold text-amber-100">
          DIỄN BIẾN 12 NGÀY ĐÊM KHÔNG NGỦ
        </p>
      </div>
      {/* Day selector */}
      <div className="flex justify-center items-center gap-0 mb-10">
        {timelineData.map((day, index) => (
          <div key={index} className="flex items-center">
            <button
              onClick={() => setSelectedDay(index)}
              className={`relative z-10 w-14 h-14 rounded-full border-2 font-bold text-base transition-all duration-300 
          ${
            selectedDay === index
              ? "bg-gradient-to-br from-red-600 to-red-800 text-white border-red-700 shadow-lg scale-110"
              : "bg-white text-slate-600 border-slate-300 hover:border-red-600 hover:text-red-600"
          } 
          flex items-center justify-center`}
            >
              {index + 1}
            </button>

            {index < timelineData.length - 1 && (
              <div className="w-12 h-0.75 bg-gradient-to-r from-yellow-400 to-red-600" />
            )}
          </div>
        ))}
      </div>

      {/* Main card */}
      <Card
        className="flex flex-col w-full max-w-6xl mx-auto overflow-hidden rounded-2xl 
          border border-white/20 bg-black/40 backdrop-blur-md shadow-2xl text-white"
      >
        <CardHeader className="pb-4 flex flex-col ">
          <div className="p-[2px] rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-red-600">
            <div className="font-serif px-6 py-2 justify-between items-center bg-white/20 backdrop-blur-md rounded-full">
              <CardTitle className="text-black drop-shadow-md items-center justify-between">
                {selectedEvent.title}
              </CardTitle>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-8">
          <p className="leading-relaxed font-sans text-lg font-semibold text-gray-100">
            {selectedEvent.description}
          </p>

          {/* Objectives + Timeline */}
          <div className="flex flex-col gap-6">
            {selectedEvent.objectives?.length > 0 && (
              <div className="text-gray-200">
                <SectionTitle icon={"🎯"} text="Mục đích của Mỹ" />
                <ul className="mt-3 space-y-2 text-gray-200 text-lg font-semibold list-disc pl-6">
                  {selectedEvent.objectives.map((o, i) => (
                    <li key={i}>{o}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedEvent.timeline?.length > 0 && (
              <div>
                <SectionTitle icon={"📅"} text="Cụ thể" />
                <div className="mt-6 relative border-l-1 border-red-600 ml-[15px]">
                  {" "}
                  {selectedEvent.timeline.map((t, i) => (
                    <div key={i} className="relative pl-7 mb-6">
                      {/* Chấm tròn nằm đúng giữa line */}
                      <span className="absolute -left-[9px] top-2 w-4 h-4 bg-gradient-to-r from-yellow-200 to-yellow-500 rounded-full shadow-md"></span>
                      {/* Nội dung */}
                      <p className="text-gray-200 text-lg font-semibold leading-relaxed">
                        {t}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Images */}
          {selectedEvent.images && selectedEvent.images.length > 0 && (
            <div className="grid md:grid-cols-2 gap-4">
              {selectedEvent.images.map((img, idx) => (
                <figure
                  key={idx}
                  className="relative w-full h-72 rounded-xl overflow-hidden shadow-md"
                >
                  <Image
                    src={img.url}
                    alt={img.caption || `Hình ${idx + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {img.caption && (
                    <figcaption className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-sm text-center italic p-2">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}

          {/* Damages + Successes */}
          {(selectedEvent.damages?.length > 0 ||
            selectedEvent.successes?.length > 0) && (
            <div
              className={`grid gap-6 ${
                selectedEvent.damages?.length > 0 &&
                selectedEvent.successes?.length > 0
                  ? "md:grid-cols-2"
                  : "grid-cols-1"
              }`}
            >
              {selectedEvent.damages?.length > 0 && (
                <div className="bg-red-900/40 border-l-4 border-red-400 p-4 rounded-lg">
                  <SectionTitle icon={"⚠️"} text="Thiệt hại của Việt Nam" />
                  <ul className="mt-2 space-y-1 text-red-200 text-lg font-semibold list-disc pl-6">
                    {selectedEvent.damages.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedEvent.successes?.length > 0 && (
                <div className="bg-green-900/40 border-l-4 border-green-400 p-4 rounded-lg">
                  <SectionTitle icon={"🏆"} text="Thành công của Việt Nam" />
                  <ul className="mt-2 space-y-1 text-green-200 text-lg font-semibold list-disc pl-6">
                    {selectedEvent.successes.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
