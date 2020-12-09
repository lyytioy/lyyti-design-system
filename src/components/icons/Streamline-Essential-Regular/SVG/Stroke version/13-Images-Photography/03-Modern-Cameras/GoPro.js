import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGoPro = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".go-pro_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="go-pro_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={15.75}
      rx={2}
      ry={2}
    />,
    <rect
      className="go-pro_svg__a"
      x={3.75}
      y={3.75}
      width={4.5}
      height={3.75}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="go-pro_svg__a"
      d="M11.25.75h10a2 2 0 012 2v10h-10a2 2 0 01-2-2v-10z"
    />,
    <circle className="go-pro_svg__a" cx={17.25} cy={6.75} r={3} />,
    <path
      className="go-pro_svg__a"
      d="M13.467 23.25H10.5l.033-6.75h2.934v6.75zM8.25 23.25h7.5"
    />,
    <circle className="go-pro_svg__a" cx={6} cy={12} r={1.5} />,
    <path
      className="go-pro_svg__a"
      d="M10.514 20.25H5.25M5.25 22.5h-3A1.5 1.5 0 01.75 21a1.5 1.5 0 011.5-1.5h3z"
    />
  );

export default SvgGoPro;
