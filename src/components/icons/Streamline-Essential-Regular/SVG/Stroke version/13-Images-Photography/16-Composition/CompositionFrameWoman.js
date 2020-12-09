import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCompositionFrameWoman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-frame-woman_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="composition-frame-woman_svg__a"
      cx={12}
      cy={10.583}
      r={2.333}
    />,
    <path
      className="composition-frame-woman_svg__a"
      d="M9.667 10.583s0 2.917-1.75 2.917M14.333 10.583s0 2.917 1.75 2.917M7.5 18.75a4.5 4.5 0 019 0z"
    />,
    <rect
      className="composition-frame-woman_svg__a"
      x={2.25}
      y={5.25}
      width={19.5}
      height={13.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="composition-frame-woman_svg__a"
      d="M2.25.75h19.5M2.25 23.25h19.5"
    />
  );

export default SvgCompositionFrameWoman;
