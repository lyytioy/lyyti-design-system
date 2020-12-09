import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M23.414 23.414a2 2 0 000-2.828l-4.069-4.069a.25.25 0 01-.033-.313 10.508 10.508 0 10-3.112 3.108.249.249 0 01.313.033l4.069 4.069a2 2 0 002.828 0zM10.5 2A8.5 8.5 0 112 10.5 8.51 8.51 0 0110.5 2z" />,
    <circle cx={10.5} cy={7.5} r={3} />,
    <path d="M5.98 15h9.038a.486.486 0 00.415-.229.444.444 0 00.005-.461 5.743 5.743 0 00-9.875 0 .449.449 0 000 .461.486.486 0 00.417.229z" />
  );

export default SvgSingleNeutralSearch;
