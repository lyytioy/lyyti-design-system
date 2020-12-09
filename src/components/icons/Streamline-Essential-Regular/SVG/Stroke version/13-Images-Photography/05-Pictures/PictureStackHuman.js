import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPictureStackHuman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-stack-human_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="picture-stack-human_svg__a"
      cx={9.75}
      cy={9.375}
      r={2.625}
    />,
    <path
      className="picture-stack-human_svg__a"
      d="M5.25 17.25a4.5 4.5 0 019 0z"
    />,
    <rect
      className="picture-stack-human_svg__a"
      x={1.5}
      y={3.75}
      width={16.5}
      height={16.5}
      rx={3}
      ry={3}
    />,
    <path
      className="picture-stack-human_svg__a"
      d="M19.5 3.75a3 3 0 013 3v10.5a3 3 0 01-3 3"
    />
  );

export default SvgPictureStackHuman;
