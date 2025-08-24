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
              isFirstRow={idx === 0}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
