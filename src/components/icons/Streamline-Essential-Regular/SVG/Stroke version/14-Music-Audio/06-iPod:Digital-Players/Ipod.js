import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIpod = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ipod_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="ipod_svg__a"
      x={1.125}
      y={5.25}
      width={12}
      height={18}
      rx={1.5}
      ry={1.5}
    />,
    <circle className="ipod_svg__a" cx={7.125} cy={17.25} r={3} />,
    <path
      className="ipod_svg__a"
      d="M7.125 16.875a.375.375 0 11-.375.375.375.375 0 01.375-.375M10.125 5.25v-1.5a3 3 0 013-3 3 3 0 013 3v13.5a3 3 0 003 3h3.75M1.125 11.25h12"
    />
  );

export default SvgIpod;
