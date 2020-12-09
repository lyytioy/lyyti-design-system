import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskDiamond = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mask-diamond_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="mask-diamond_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1}
      ry={1}
    />,
    <path
      className="mask-diamond_svg__a"
      d="M12.306 4.64a.4.4 0 00-.612 0l-6.318 7.02a.522.522 0 000 .68l6.318 7.02a.4.4 0 00.612 0l6.318-7.02a.522.522 0 000-.68z"
    />
  );

export default SvgMaskDiamond;
