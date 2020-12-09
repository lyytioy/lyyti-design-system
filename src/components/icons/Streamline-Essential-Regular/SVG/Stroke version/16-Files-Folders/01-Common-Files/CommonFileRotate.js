import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileRotate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-rotate_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="common-file-rotate_svg__a"
      d="M17.857 1.099l-2.78 1.523 1.316 2.87"
    />,
    <path
      className="common-file-rotate_svg__a"
      d="M22.25 7.688a6.565 6.565 0 00-1.506-2.377 6.741 6.741 0 00-5.307-1.9M6.292 22.982l2.779-1.523-1.315-2.87"
    />,
    <path
      className="common-file-rotate_svg__a"
      d="M1.9 16.393a6.562 6.562 0 001.5 2.377 6.77 6.77 0 005.313 1.917"
    />,
    <rect
      className="common-file-rotate_svg__a"
      x={1.75}
      y={1.018}
      width={8.786}
      height={11.714}
      rx={1}
      ry={1}
    />,
    <rect
      className="common-file-rotate_svg__a"
      x={13.464}
      y={11.223}
      width={8.786}
      height={11.759}
      rx={1}
      ry={1}
    />
  );

export default SvgCommonFileRotate;
