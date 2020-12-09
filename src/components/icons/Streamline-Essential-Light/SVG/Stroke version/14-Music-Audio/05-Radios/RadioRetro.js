import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRadioRetro = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".radio-retro_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="radio-retro_svg__a"
      x={0.5}
      y={7.5}
      width={23}
      height={14}
      rx={2}
      ry={2}
    />,
    <path
      className="radio-retro_svg__a"
      d="M3.5 21.5v2M20.5 21.5v2M.5 15.5h23M4 12.5h16M4 10.5h16M5.5 18.5h13M3 18.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M21 18.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M5.5 7.5v-4M5.5.5v1M7.5 3.5h1M2.5 3.5h1"
    />
  );

export default SvgRadioRetro;
