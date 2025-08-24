export interface SajuRowProps {
  title: string;
  subtitle?: string;
  items: (string | CellBoxProps)[]; // string or 객체
  borderBottom?: boolean;
  bgColor?: string;
  textColor?: string;
}

export interface CellBoxProps {
  label: string;
  hanja?: string;
  subText?: string;
  bgColor?: string;
  textColor?: string;
  border?: boolean;
}
