import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNewspaper = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".newspaper_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="newspaper_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="newspaper_svg__a"
      d="M13.5 13.5h6M13.5 16.5h6M13.5 19.5h3.75M3.75 13.5h6M3.75 16.5h6M3.75 19.5H7.5"
    />,
    <rect
      className="newspaper_svg__a"
      x={3.75}
      y={3.75}
      width={16.5}
      height={6}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgNewspaper;
