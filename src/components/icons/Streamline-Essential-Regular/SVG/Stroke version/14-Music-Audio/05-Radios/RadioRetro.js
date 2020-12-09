import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRadioRetro = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".radio-retro_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="radio-retro_svg__a"
      x={0.75}
      y={6.75}
      width={22.5}
      height={15}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="radio-retro_svg__a"
      d="M3.75 21.75v1.5M20.25 21.75v1.5M18.75 14.25H5.25a1.406 1.406 0 01-1.5-1.286v-1.928a1.406 1.406 0 011.5-1.286h13.5a1.406 1.406 0 011.5 1.286v1.928a1.406 1.406 0 01-1.5 1.286zM8.25 18.75h7.5M15.75 14.25v-4.5M5.25.75v.75M1.5 3.75h.75M8.25 3.75H9M5.25 3.75v3M4.125 18a.375.375 0 11-.375.375.375.375 0 01.375-.375M19.875 18a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgRadioRetro;
