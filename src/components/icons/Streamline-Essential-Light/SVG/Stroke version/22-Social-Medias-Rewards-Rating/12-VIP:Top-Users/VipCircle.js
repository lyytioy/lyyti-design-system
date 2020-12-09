import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVipCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vip-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="vip-circle_svg__a" cx={12} cy={12} r={11} />,
    <path
      className="vip-circle_svg__a"
      d="M12 9v6M11 15h2M11 9h2M18 10.5a1.5 1.5 0 01-1.5 1.5H15V9h1.5a1.5 1.5 0 011.5 1.5zM15 15v-3M9 9v1.5A7.5 7.5 0 017.5 15 7.5 7.5 0 016 10.5V9"
    />
  );

export default SvgVipCircle;
