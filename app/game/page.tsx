"use client";
import Game from "@/component/game/Game";
import Header from "@/component/layout/Header";
import Footer from "@/component/layout/Footer";
import { useState } from "react";

export default function GamePage() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "234") {
      setIsAuthorized(true);
    } else {
      alert("Sai mật khẩu! Vui lòng thử lại.");
    }
  };
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 text-black">
        {!isAuthorized ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-lg p-6 space-y-4 w-80"
          >
            <h2 className="text-xl font-bold text-center text-red-600">
              Nhập mật khẩu để chơi
            </h2>
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
            >
              Xác nhận
            </button>
          </form>
        ) : (
          <Game />
        )}
      </main>
      {/* <Game /> */}
      <Footer />
    </>
  );
}
