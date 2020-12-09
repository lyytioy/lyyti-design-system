import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".upload-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="upload-square_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={3}
      ry={3}
    />,
    <path
      className="upload-square_svg__a"
      d="M9 9v4.5H5.25L12 20.25l6.75-6.75H15V9M9 6V4.5M15 6V4.5"
    />
  );

export default SvgUploadSquare;
