"use client";
import { useState } from "react";

export default function LanguageSwitcher({
  onChange,
}: {
  onChange: (lang: string) => void;
}) {
  const [lang, setLang] = useState("vi");

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => {
          setLang("vi");
          onChange("vi");
        }}
        className={`px-2 py-1 rounded ${
          lang === "vi" ? "bg-red-500 text-white" : "bg-gray-200"
        }`}
      >
        🇻🇳 VN
      </button>
      <button
        onClick={() => {
          setLang("en");
          onChange("en");
        }}
        className={`px-2 py-1 rounded ${
          lang === "en" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        🇬🇧 EN
      </button>
    </div>
  );
}
