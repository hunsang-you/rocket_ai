"use client";

import Sajutable from "@/components/Sajutable";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  // 랜덤 이름 테스트
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

  const [randomName, setRandomName] = useState<string>("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * userName.length);
    setRandomName(userName[randomIndex]);
  }, [userName]);

  return (
    <div className="bg-[#F3F2EF] max-w-md min-w-sm mx-auto w-full">
      {/* 1번 이미지 */}
      <section className="relative w-full max-w-md mx-auto">
        <Image
          src="/AI_Image_1.png"
          alt="AI Image 1"
          width={375}
          height={774}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, 375px"
          priority
        />

        {/* 1번 말풍선  */}
        <div className="absolute bottom-[7%] left-[35%] -translate-x-1/2  text-center">
          <p className="text-sm font-medium text-black whitespace-pre-line sm:text-sm md:text-base">
            {`이제 본격적으로
            ${randomName}님의 사주팔자를
            분석해볼 차례네요.`}
          </p>
        </div>
      </section>

      {/* 2번 이미지 */}
      <section className="relative max-w-[351px] min-w-sm mx-auto">
        <div className="w-full h-auto">
          <Image
            src="/AI_Image_2.png"
            alt="AI Image 2"
            width={351}
            height={774}
            sizes="(max-width: 768px) 100vw, 375px"
            loading="lazy"
          />
        </div>
      </section>

      {/* 3번 이미지 */}
      <section className="relative w-full max-w-md mx-auto min-w-sm">
        <div className="relative w-full h-auto">
          <Image
            src="/AI_Image_3.png"
            alt="AI Image 3"
            width={375}
            height={774}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 375px"
            loading="lazy"
          />
        </div>

        {/* 3번 말풍선 */}
        <div className="absolute bottom-[77%] left-[39%] -translate-x-1/2 text-center">
          <p className="text-sm font-medium text-black whitespace-pre-line sm:text-sm md:text-base">
            {`제가 ${randomName}님의 사주를
            보기 쉽게 표로 정리했어요.`}
          </p>
        </div>
      </section>

      {/* 4번 이미지 */}
      <section className="relative max-w-md min-w-sm ">
        <div className="relative w-full h-auto">
          <Image
            src="/AI_Image_4.png"
            alt="AI Image 4"
            width={375}
            height={774}
            className="w-full"
            sizes="(max-width: 768px) 100vw, 375px"
            loading="lazy"
          />
        </div>
        <div className="w-full">
          {/* 4번 텍스트 */}
          <div className="absolute w-full bottom-[86%] left-[50%] -translate-x-1/2 text-center ">
            <p className="py-2 text-base text-black ">
              {`${randomName}님의 사주`}
            </p>
            <p className="text-xl font-bold text-black">1980년 8월27일 08:10</p>
          </div>

          {/* 사주 테이블 */}
          <div className="absolute bottom-[6rem] left-1/2 -translate-x-1/2 mx-auto min-w-sm">
            <Sajutable />
          </div>
        </div>
      </section>
    </div>
  );
}
