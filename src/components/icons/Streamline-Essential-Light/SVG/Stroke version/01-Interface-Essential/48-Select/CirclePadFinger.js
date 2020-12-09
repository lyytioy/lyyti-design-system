import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCirclePadFinger = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".circle-pad-finger_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="circle-pad-finger_svg__a"
      d="M6.551 12.449a7 7 0 119.9 0M8.654 23.5l-3.807-4.582A1.5 1.5 0 017.154 17L9.5 19.824V10a1.5 1.5 0 013 0v6.5h3a4 4 0 014 4v3"
    />
  );

export default SvgCirclePadFinger;
