import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlignLandscape = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".align-landscape_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="align-landscape_svg__a"
      d="M23.25 20.248H.75M3.75 23.248l-3-3 3-3"
    />,
    <rect
      className="align-landscape_svg__a"
      x={2.25}
      y={0.748}
      width={19.5}
      height={13.5}
      rx={1.5}
      ry={1.5}
    />,
    <circle className="align-landscape_svg__a" cx={12} cy={6.373} r={2.625} />,
    <path className="align-landscape_svg__a" d="M7.5 14.248a4.5 4.5 0 119 0z" />
  );

export default SvgAlignLandscape;
