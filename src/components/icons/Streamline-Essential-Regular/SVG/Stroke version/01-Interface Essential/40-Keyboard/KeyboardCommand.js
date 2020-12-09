import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardCommand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M19.5 15.747a3.75 3.75 0 11-3.75 3.75V4.5a3.75 3.75 0 113.75 3.75h-15A3.75 3.75 0 118.25 4.5v15a3.75 3.75 0 11-3.75-3.75z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  );

export default SvgKeyboardCommand;
