import SajuData from "@/constants/SajuData.json";
import SajuRow from "./SajuRow";

export default function Sajutable() {
  return (
    <div className="flex justify-center">
      <table className=" border-r-2 border-b-2">
        <tbody className="border-2 border-t-0 border-l-0">
          {SajuData.map((row, idx) => (
            <SajuRow
              key={idx}
              title={row.title}
              subtitle={row.subtitle}
              items={row.items}
              borderBottom={row.borderBottom}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// <tr>
//             <td className="border border-black bg-[#F5F3EC] font-bold text-xs text-center p-1 border-t-0 border-l-0"></td>
//             <td className="border border-black bg-[#F5F3EC] font-bold text-xs text-center p-1  border-t-0 border-l-0 border-r-[#8A8A8A]">
//               時
//             </td>
//             <td className="border border-black bg-[#F5F3EC] font-bold text-xs text-center p-1 border-t-0 border-l-0 border-r-[#8A8A8A]">
//               日
//             </td>
//             <td className="border border-black bg-[#F5F3EC] font-bold text-xs text-center p-1  border-t-0 border-l-0 border-r-[#8A8A8A]">
//               月
//             </td>
//             <td className="border border-black bg-[#F5F3EC] font-bold text-xs text-center p-1  border-t-0 border-l-0">
//               年
//             </td>
//           </tr>

//           {/* Row 1 - 十星 */}
//           <tr className="border-b-2">
//             <td className="border border-black bg-[#F5F3EC] font-bold text-xs text-center p-1 whitespace-pre-line border-l-0">
//               十星
//               <br />
//               (십성)
//             </td>
//             <td className="border border-black bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A]">
//               傷官 <br />
//               (상관)
//             </td>
//             <td className="border border-black bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A]">
//               比肩 <br />
//               (비견)
//             </td>
//             <td className="border border-black bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A]">
//               傷官 <br />
//               (상관)
//             </td>
//             <td className="border border-black bg-[#FDFDFB] font-bold text-xs text-center p-2">
//               傷官 <br />
//               (상관)
//             </td>
//           </tr>

//           {/* Row 2 - 天干 */}
//           <tr>
//             <td className="border border-black border-b-gray-300 bg-[#F5F3EC] font-bold text-xs text-center p-1 whitespace-pre-line border-l-0">
//               天干
//               <br />
//               (천간)
//             </td>
//             <td className="border border-black border-b-gray-300 bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A]">
//               <CellInnerBox
//                 bgColor="[#2F2F2F]"
//                 label="임"
//                 hanja="壬"
//                 subText="한자"
//               />
//             </td>
//             <td className="border border-black border-b-gray-300 bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A]">
//               <CellInnerBox
//                 bgColor="bg-[#C23030]"
//                 label="정"
//                 hanja="丁"
//                 subText="한자"
//               />
//             </td>
//             <td className="border border-black border-b-gray-300 bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A]">
//               <CellInnerBox
//                 bgColor="[#2F2F2F]"
//                 label="계"
//                 hanja="癸"
//                 subText="한자"
//               />
//             </td>
//             <td className="border border-black border-b-gray-300 bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A]">
//               <CellInnerBox
//                 bgColor="[#2F2F2F]"
//                 label="계"
//                 hanja="癸"
//                 subText="한자"
//               />
//             </td>
//           </tr>

//           {/* Row 3 - 地支 */}
//           <tr className="border-b-2">
//             <td className="border border-black bg-[#F5F3EC] font-bold text-xs text-center p-1 whitespace-pre-line border-l-0">
//               地支
//               <br />
//               (지지)
//             </td>
//             <td className="border border-black bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A]">
//               <CellInnerBox
//                 bgColor="bg-[#18868C]"
//                 label="인"
//                 hanja="寅"
//                 subText="한자"
//               />
//             </td>
//             <td className="border border-black bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A]">
//               <CellInnerBox
//                 bgColor="bg-[#C23030]"
//                 label="사"
//                 hanja="巳"
//                 subText="한자"
//               />
//             </td>
//             <td className="border border-black bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A]">
//               <CellInnerBox
//                 bgColor="[#2F2F2F]"
//                 label="해"
//                 hanja="亥"
//                 subText="한자"
//               />
//             </td>
//             <td className="border border-black bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A]">
//               <CellInnerBox
//                 bgColor="bg-[#FDFDFB]"
//                 textColor="black"
//                 label="유"
//                 hanja="酉"
//                 subText="한자"
//               />
//             </td>
//           </tr>

//           {/* Row 4 - 十星 */}
//           <tr className="border-b-2">
//             <td className="border border-black bg-[#F5F3EC] font-bold text-xs text-center p-1 whitespace-pre-line border-l-0">
//               十星
//               <br />
//               (십성)
//             </td>
//             <td className="border border-black bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A]">
//               比肩 <br />
//               (비견)
//             </td>
//             <td className="border border-black bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A]">
//               劫財 <br />
//               (겁재)
//             </td>
//             <td className="border border-black bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A]">
//               食神 <br />
//               (식신)
//             </td>
//             <td className="border border-black bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A]">
//               偏財 <br />
//               (편재)
//             </td>
//           </tr>

//           {/* Row 5 - 十二運星 */}
//           <tr className="border-b-2">
//             <td className="border border-black bg-[#F5F3EC] font-bold text-xs text-center p-1 whitespace-pre-line border-l-0">
//               十二運星
//               <br />
//               (십이운성)
//             </td>
//             <td className="border border-black bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A] ">
//               死 <br />
//               (사)
//             </td>
//             <td className="border border-black bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A]">
//               帝旺 <br />
//               (제왕)
//             </td>
//             <td className="border border-black bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A]">
//               胎 <br />
//               (태)
//             </td>
//             <td className="border border-black bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A]">
//               長生 <br />
//               (장생)
//             </td>
//           </tr>

//           {/* Row 6 - 十二神殺 */}
//           <tr className="border-b-2">
//             <td className="border border-black bg-[#F5F3EC] font-bold text-xs text-center p-1 whitespace-pre-line border-l-0">
//               十二神殺
//               <br />
//               (십이신살)
//             </td>
//             <td className="border border-black bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A]">
//               劫殺 <br />
//               (겁살)
//             </td>
//             <td className="border border-black bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A]">
//               地殺 <br />
//               (지살)
//             </td>
//             <td className="border border-black bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A]">
//               驛馬殺 <br />
//               (역마살)
//             </td>
//             <td className="border border-black bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A]">
//               將星殺 <br />
//               (장성살)
//             </td>
//           </tr>

//           {/* Row 7 - 貴人 */}
//           <tr className="border-b-2">
//             <td className="border border-black bg-[#F5F3EC] font-bold text-xs text-center p-1 whitespace-pre-line border-l-0">
//               貴人
//               <br />
//               (귀인)
//             </td>
//             <td className="border border-black bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A]">
//               (없음)
//             </td>
//             <td className="border border-black bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A]">
//               (없음)
//             </td>
//             <td className="border border-black bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A] whitespace-pre-line">
//               天乙
//               <br />
//               (천을귀인)
//             </td>
//             <td className="border border-black bg-[#FDFDFB] font-bold text-xs text-center p-2 border-r-[#8A8A8A] whitespace-pre-line">
//               天乙
//               <br />
//               (천을귀인)
//               <br />
//               太極
//               <br />
//               (태극귀인)
//               <br />
//               文昌
//               <br />
//               (문창귀인)
//             </td>
//           </tr>
