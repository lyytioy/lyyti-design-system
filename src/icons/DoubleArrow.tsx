import { createElement } from "react";
import SvgIcon from "@mui/material/SvgIcon";
const DoubleArrow = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      d="M12 21V3m0 18 3-3m-3 3-3-3m3-15L9 6m3-3 3 3"
      stroke="#192832"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
export default DoubleArrow;
