import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVip = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vip_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="vip_svg__a"
      x={0.75}
      y={5.25}
      width={22.5}
      height={13.5}
      rx={3}
      ry={3}
    />,
    <path
      className="vip_svg__a"
      d="M12 15.75v-7.5M15 15.75v-7.5M15 8.25h.75a2.25 2.25 0 010 4.5H15M6 8.25v2.55a8.932 8.932 0 001.5 4.95A8.932 8.932 0 009 10.8V8.25"
    />
  );

export default SvgVip;
