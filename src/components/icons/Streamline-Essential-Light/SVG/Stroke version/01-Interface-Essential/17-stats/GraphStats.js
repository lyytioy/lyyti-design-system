import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGraphStats = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M.5 12.001h6l3-10 3 19 3-14 2 5h6"
    />
  );

export default SvgGraphStats;
