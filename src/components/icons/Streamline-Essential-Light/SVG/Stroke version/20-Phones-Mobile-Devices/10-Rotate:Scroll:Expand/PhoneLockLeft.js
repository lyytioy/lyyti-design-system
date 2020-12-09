import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneLockLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-lock-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-lock-left_svg__a"
      d="M19.538 13.507a1.421 1.421 0 010 2.01l-3.516 3.516a1.42 1.42 0 01-2.01 0l-8.54-8.54a1.42 1.42 0 010-2.01l3.517-3.516a1.418 1.418 0 012.009 0l.5.5M3.502 23.5l5.384-1.245-2.702-4.82M8.886 22.255A10.631 10.631 0 011.7 10.037"
    />,
    <rect
      className="phone-lock-left_svg__a"
      x={13.502}
      y={4.5}
      width={9}
      height={7}
      rx={1}
      ry={1}
    />,
    <path
      className="phone-lock-left_svg__a"
      d="M18 7a1 1 0 101 1 1 1 0 00-1-1zM15.5 4.5V3a2.5 2.5 0 015 0v1.5"
    />
  );

export default SvgPhoneLockLeft;
