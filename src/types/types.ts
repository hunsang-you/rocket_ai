export interface SajuRowProps {
  title: string;
  subtitle?: string;
  items: (string | CellBoxProps)[]; // string or 객체
  borderBottom?: boolean;
  bgColor?: string;
  textColor?: string;
  isFirstRow?: boolean; // 첫 번째 행인지 여부
}

export interface CellBoxProps {
  label: string;
  hanja?: string;
  subText?: string;
  bgColor?: string;
  textColor?: string;
  border?: boolean;
}
