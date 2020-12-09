import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPictureDoubleShapes = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-double-shapes_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="picture-double-shapes_svg__a"
      d="M18.5 6V5a2 2 0 00-2-2h-14a2 2 0 00-2 2v9a2 2 0 002 2h1"
    />,
    <rect
      className="picture-double-shapes_svg__a"
      x={5.5}
      y={8}
      width={18}
      height={13}
      rx={2}
      ry={2}
    />,
    <rect
      className="picture-double-shapes_svg__a"
      x={8.5}
      y={13}
      width={6}
      height={6}
      rx={1}
      ry={1}
    />,
    <path
      className="picture-double-shapes_svg__a"
      d="M16.5 19h3a1 1 0 00.891-1.455l-3.662-7.1a.82.82 0 00-1.458 0l-.287.555"
    />
  );

export default SvgPictureDoubleShapes;
