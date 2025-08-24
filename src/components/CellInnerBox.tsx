import { CellBoxProps } from "@/types/types";

export default function CellInnerBox({
  bgColor,
  label,
  hanja,
  subText = "",
  border = true,
}: CellBoxProps) {
  return (
    <>
      <div
        style={{ backgroundColor: bgColor }}
        className={`rounded-[8px] w-[3rem] h-[3rem] flex items-center justify-center mx-auto ${
          border ? "border border-gray-400" : ""
        } ${bgColor === "#FDFDFB" ? "text-black" : "text-white"}`}
      >
        <div className="flex flex-col items-center leading-tight text-center">
          <span className="text-[8px]">{label}</span>
          <span className="text-[20px]">{hanja}</span>
          <span className="text-[8px]">{subText}</span>
        </div>
      </div>
    </>
  );
}
