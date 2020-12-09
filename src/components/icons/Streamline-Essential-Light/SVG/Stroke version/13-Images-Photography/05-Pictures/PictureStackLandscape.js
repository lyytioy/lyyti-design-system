import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPictureStackLandscape = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-stack-landscape_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="picture-stack-landscape_svg__a"
      d="M23.5 5.5v17a1 1 0 01-1 1h-17"
    />,
    <path
      className="picture-stack-landscape_svg__a"
      d="M21.5 2.5v18a1 1 0 01-1 1h-18"
    />,
    <rect
      className="picture-stack-landscape_svg__a"
      x={0.5}
      y={0.5}
      width={19}
      height={19}
      rx={1}
      ry={1}
    />,
    <path
      className="picture-stack-landscape_svg__a"
      d="M17 15.5l-3.553-7.106c-.246-.492-.648-.492-.894 0L10 13.5l-1.86-2.232a.666.666 0 00-1.154.089L4.5 15.5"
    />,
    <circle className="picture-stack-landscape_svg__a" cx={6} cy={5} r={1.5} />,
    <path className="picture-stack-landscape_svg__a" d="M19.5 15.5H.5" />
  );

export default SvgPictureStackLandscape;
