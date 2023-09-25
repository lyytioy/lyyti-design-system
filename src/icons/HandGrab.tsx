import { createElement } from "react";
import SvgIcon from "@mui/material/SvgIcon";
const HandGrab = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      d="M8 11V7.5a1.5 1.5 0 0 1 3 0V10m0-.5v-3a1.5 1.5 0 1 1 3 0V10m0-2.5a1.5 1.5 0 1 1 3 0V10"
      stroke="#192832"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      d="M17 9.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-2 .208a6 6 0 0 1-5.012-2.7L7 17c-.312-.479-1.407-2.388-3.286-5.728A1.5 1.5 0 0 1 4.25 9.25a1.867 1.867 0 0 1 2.28.28L8 11"
      stroke="#192832"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
export default HandGrab;
