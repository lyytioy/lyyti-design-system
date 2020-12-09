import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M12.75.75a10.485 10.485 0 00-8.917 16.025L.75 23.25l6.474-3.083A10.5 10.5 0 1012.75.75z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  );

export default SvgMessagesBubble;
