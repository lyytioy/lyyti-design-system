import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdBox = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cd-box_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="cd-box_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={3}
      ry={3}
    />,
    <circle className="cd-box_svg__a" cx={12} cy={12} r={8.25} />,
    <path
      className="cd-box_svg__a"
      d="M12 16.5A4.5 4.5 0 017.5 12M12 7.5a4.5 4.5 0 014.5 4.5M12 11.625a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgCdBox;
