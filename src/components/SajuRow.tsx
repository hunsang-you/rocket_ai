import { SajuRowProps } from "@/types/types";
import CellInnerBox from "./CellInnerBox";

/**
 * @param 도표의 한 행을 나타내는 컴포넌트
 * @param title 행의 제목(한자)
 * @param subtitle 행의 부제목(음행)
 * @param items 행의 각 셀에 들어갈 항목들 (문자열 또는 객체)
 */

export default function SajuRow({
  title,
  subtitle,
  items,
  borderBottom = true,
  isFirstRow = false,
}: SajuRowProps) {
  return (
    <tr
      className={`${
        borderBottom ? "border-b-2" : "border-b-1 border-gray-300"
      } ${isFirstRow ? "border-t-0" : ""}`}
    >
      {/* 제목영역, 1열 부분*/}
      <td className="bg-[#F5F3EC] text-center text-xs font-bold p-2 max-w-[6rem]">
        <div className="flex flex-col justify-center">
          <span>{title}</span>
          {subtitle && <span>({subtitle})</span>}
        </div>
      </td>

      {/* 나머지 셀: 첫 번째 행이면 #F5F3EC, 아니면 #FDFDFB */}
      {items.map((item, idx) => {
        if (typeof item === "string") {
          // 여러 항목이 , 로 이어져 있는 경우 split
          const parts = item.split(",").map((str) => str.trim());
          return (
            <td
              key={idx}
              className={`border border-black font-bold text-xs text-center p-2 align-middle border-r-gray-300 ${
                isFirstRow ? "bg-[#F5F3EC] border-t-0 " : "bg-[#FDFDFB]"
              }`}
            >
              <div className="flex flex-col items-center">
                {parts.map((part, pIdx) => {
                  const match = part.match(/^(.+?)\s*\((.+)\)$/);
                  const data_1 = match ? match[1] : part;
                  const data_2 = match ? match[2] : "";
                  return (
                    <div key={pIdx} className="flex flex-col items-center">
                      <span className={`${isFirstRow ? "text-base" : ""}`}>
                        {data_1}
                      </span>
                      {data_2 && <span>({data_2})</span>}
                    </div>
                  );
                })}
              </div>
            </td>
          );
        }

        // 객체일 경우 (천간/지지)
        return (
          <td
            key={idx}
            className={
              "border border-black bg-[#FDFDFB] border-b-gray-300 font-bold text-xs text-center p-2 border-r-[#8A8A8A] "
            }
          >
            <CellInnerBox
              bgColor={item.bgColor}
              label={item.label}
              hanja={item.hanja}
              subText={item.subText}
            />
          </td>
        );
      })}
    </tr>
  );
}
