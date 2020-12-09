import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusFrame = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus-frame_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="focus-frame_svg__a"
      x={1.5}
      y={5}
      width={21}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="focus-frame_svg__a"
      d="M4.5 12V8.5A.5.5 0 015 8h3.484M19.5 12v3.5a.5.5 0 01-.5.5h-3.5"
    />
  );

export default SvgFocusFrame;
