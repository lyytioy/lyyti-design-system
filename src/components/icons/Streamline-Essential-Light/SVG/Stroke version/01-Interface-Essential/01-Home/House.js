import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHouse = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M22.5 23.5h-21a1 1 0 01-1-1V9.987A1 1 0 01.884 9.2l10.5-8.218a1 1 0 011.232 0l10.5 8.218a1 1 0 01.384.787V22.5a1 1 0 01-1 1z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );

export default SvgHouse;
