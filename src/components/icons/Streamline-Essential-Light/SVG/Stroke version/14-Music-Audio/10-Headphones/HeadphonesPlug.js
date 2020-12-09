import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHeadphonesPlug = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".headphones-plug_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="headphones-plug_svg__a"
      d="M9.95 14.458l-1.5 1.5a.5.5 0 01-.707 0l-1.414-1.415a.5.5 0 010-.707l1.5-1.5"
    />,
    <path
      className="headphones-plug_svg__a"
      d="M7.036 15.249l-4.6 4.6a2 2 0 002.829 2.828l3.185-3.185a1.5 1.5 0 012.122 2.122L8.89 23.3"
    />,
    <rect
      className="headphones-plug_svg__a"
      x={8.167}
      y={8.164}
      width={7}
      height={6}
      rx={1}
      ry={1}
      transform="rotate(-44.999 11.668 11.164)"
    />,
    <path
      className="headphones-plug_svg__a"
      d="M20.153 4.093l1.768-1.768.214-1.018a.5.5 0 00-.583-.594l-1.045.2-1.769 1.766-2.474 1.061-3.536 3.535 2.829 2.825 3.536-3.535zM16.264 3.74l2.828 2.829M19.092 2.325l1.415 1.415"
    />
  );

export default SvgHeadphonesPlug;
