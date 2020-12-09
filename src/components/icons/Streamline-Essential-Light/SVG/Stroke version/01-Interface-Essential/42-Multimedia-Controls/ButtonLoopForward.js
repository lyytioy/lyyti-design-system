import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonLoopForward = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-loop-forward_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="button-loop-forward_svg__a"
      d="M13.5 19.5h-8a4 4 0 01-4-4v-10a4 4 0 014-4h13a4 4 0 014 4v3"
    />,
    <path
      className="button-loop-forward_svg__a"
      d="M9.5 23.499l4-4-4-4M13.5 23.499l4-4-4-4"
    />
  );

export default SvgButtonLoopForward;
