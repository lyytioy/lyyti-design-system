import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModulePuzzle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M19.5 15.75l3.311-3.311a1.5 1.5 0 000-2.121L20.7 8.212A3.75 3.75 0 1115.788 3.3l-2.106-2.111a1.5 1.5 0 00-2.121 0L8.25 4.5A3.75 3.75 0 104.5 8.25l-3.311 3.311a1.5 1.5 0 000 2.121L3.3 15.788A3.75 3.75 0 118.212 20.7l2.106 2.107a1.5 1.5 0 002.121 0L15.75 19.5a3.75 3.75 0 103.75-3.75z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  );

export default SvgModulePuzzle;
