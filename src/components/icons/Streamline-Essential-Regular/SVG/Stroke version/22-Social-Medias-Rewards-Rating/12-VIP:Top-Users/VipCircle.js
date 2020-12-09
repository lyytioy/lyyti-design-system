import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVipCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vip-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="vip-circle_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="vip-circle_svg__a"
      d="M12 15.75v-7.5M15 15.75v-7.5M15 8.25h.75a2.25 2.25 0 010 4.5H15M6 8.25v2.55a8.932 8.932 0 001.5 4.95A8.932 8.932 0 009 10.8V8.25"
    />
  );

export default SvgVipCircle;
