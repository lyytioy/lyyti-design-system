import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M.854 15.646a1.206 1.206 0 000 1.707l5.792 5.793a1.21 1.21 0 001.708 0L23.146 8.353a1.206 1.206 0 000-1.707l-2.292-2.293a1.207 1.207 0 00-1.708 0L7.5 16l-2.646-2.647a1.207 1.207 0 00-1.708 0z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );

export default SvgCheck;
