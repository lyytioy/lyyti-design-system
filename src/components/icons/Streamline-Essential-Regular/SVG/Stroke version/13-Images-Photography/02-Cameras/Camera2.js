import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCamera2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="camera-2_svg__a"
      x={0.75}
      y={6.75}
      width={4.5}
      height={13.5}
      rx={1}
      ry={1}
    />,
    <path
      className="camera-2_svg__a"
      d="M11.364 5.971L5.219 7.508M17.157 19.5h4.093a2 2 0 002-2V9.117a2 2 0 00-1.581-1.956l-4.528-1.178M5.217 19.5h6.126"
    />,
    <circle className="camera-2_svg__a" cx={14.25} cy={14.25} r={6} />,
    <circle className="camera-2_svg__a" cx={14.25} cy={14.25} r={3} />,
    <path
      className="camera-2_svg__a"
      d="M10.078 9.938l1.638-5.052a1.5 1.5 0 011.455-1.136h2.158a1.5 1.5 0 011.455 1.136l1.656 5.069"
    />
  );

export default SvgCamera2;
