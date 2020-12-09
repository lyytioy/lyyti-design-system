import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVip = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vip_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="vip_svg__a"
      d="M12 9.5v6M11 15.5h2M11 9.5h2M18 11a1.5 1.5 0 01-1.5 1.5H15v-3h1.5A1.5 1.5 0 0118 11zM15 15.5v-3M9 9.5V11a7.5 7.5 0 01-1.5 4.5A7.5 7.5 0 016 11V9.5"
    />,
    <rect
      className="vip_svg__a"
      x={1}
      y={5.5}
      width={22}
      height={13}
      rx={2}
      ry={2}
    />
  );

export default SvgVip;
