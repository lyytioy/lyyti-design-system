import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGoPro = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".go-pro_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="go-pro_svg__a"
      x={0.5}
      y={1}
      width={23}
      height={16}
      rx={2}
      ry={2}
    />,
    <rect
      className="go-pro_svg__a"
      x={2.5}
      y={3}
      width={7}
      height={5}
      rx={1}
      ry={1}
    />,
    <path
      className="go-pro_svg__a"
      d="M11.5 1h10a2 2 0 012 2v10h-10a2 2 0 01-2-2V1z"
    />,
    <circle className="go-pro_svg__a" cx={17.5} cy={7} r={4} />,
    <circle className="go-pro_svg__a" cx={17.5} cy={7} r={2} />,
    <path className="go-pro_svg__a" d="M10.5 17h3v6h-3zM7.5 23h9M4.5 5v1" />,
    <circle className="go-pro_svg__a" cx={6} cy={13.5} r={1.5} />,
    <path className="go-pro_svg__a" d="M10.5 20h-5M1.5 19a1 1 0 000 2h4v-2z" />
  );

export default SvgGoPro;
