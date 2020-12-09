import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdBox = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cd-box_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="cd-box_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <circle className="cd-box_svg__a" cx={12} cy={12} r={9.5} />,
    <circle className="cd-box_svg__a" cx={12} cy={12} r={2.5} />,
    <path
      className="cd-box_svg__a"
      d="M12 11.75a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M12 4.5a7.5 7.5 0 017.5 7.5M12 19.5A7.5 7.5 0 014.5 12"
    />
  );

export default SvgCdBox;
