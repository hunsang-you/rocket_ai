"use client";

import Sajutable from "@/components/sabotable";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  // 랜덤 이름
  const [userName] = useState([
    "김",
    "철수",
    "김영희",
    "제임스박",
    "Faker",
    "로켓에이아이",
    "7글자로된이름",
    "혹은8글자인이름",
    "김로켓",
  ]);

  const [randomName, setRandomName] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * userName.length);
    setRandomName(userName[randomIndex]);
  }, [userName]);

  return (
    <div className="bg-[#F3F2EF] max-w-md min-w-sm mx-auto">
      {/* 1번 이미지 */}
      <section className="relative max-w-md min-w-xs w-full mx-auto">
        <div className="relative w-full h-auto">
          <Image
            src="/AI_Image_1.png"
            alt="AI Image 1"
            width={375}
            height={774}
            className="w-full h-auto"
          />
        </div>

        {/* 말풍선 텍스트 */}
        <div className="absolute bottom-[7%] left-[35%] -translate-x-1/2  text-center">
          <p className="text-sm sm:text-base md:text-base font-medium text-black whitespace-pre-line word">
            {`이제 본격적으로
            ${randomName}님의 사주팔자를
            분석해볼 차례네요.`}
          </p>
        </div>
      </section>

      {/* 2번 이미지 */}
      <section className="relative max-w-[351px] min-w-xs mx-auto">
        <div className="w-full h-auto">
          <Image
            src="/AI_Image_2.png"
            alt="AI Image 2"
            width={351}
            height={774}
            className=" h-auto"
          />
        </div>
      </section>

      {/* 3번 이미지 */}
      <section className="relative max-w-md min-w-xs w-full mx-auto">
        <div className="relative w-full h-auto">
          <Image
            src="/AI_Image_3.png"
            alt="AI Image 3"
            width={375}
            height={774}
            className="w-full h-auto"
          />
        </div>

        {/* 3번 말풍선 텍스트 */}
        <div className="absolute bottom-[77%] left-[39%] -translate-x-1/2 text-center">
          <p className="text-base sm:text-base md:text-lg font-medium text-black whitespace-pre-line">
            {`${randomName}님의 사주를
보기 쉽게 표로 정리했어요.`}
          </p>
        </div>
      </section>

      {/* 4번 이미지 */}
      <section className="relative max-w-md min-w-xs mx-auto ">
        <div className="relative w-full h-auto">
          <Image
            src="/AI_Image_4.png"
            alt="AI Image 4"
            width={375}
            height={774}
            className="w-full h-auto"
          />
        </div>

        {/* 4번 텍스트 */}
        <div className="absolute w-full bottom-[86%] left-[50%] -translate-x-1/2 text-center ">
          <p className="text-base text-black whitespace-pre-line py-2 font-gapyeong">
            {`${randomName}님의 사주`}
          </p>
          <p className="text-xl font-bold text-black whitespace-pre-line">
            1980년 8월27일 08:10
          </p>
        </div>

        {/* 사주 테이블 */}
        <div className="absolute bottom-[8%]  left-[50%] -translate-x-1/2 text-center">
          <Sajutable />
        </div>
      </section>
    </div>
  );
}
