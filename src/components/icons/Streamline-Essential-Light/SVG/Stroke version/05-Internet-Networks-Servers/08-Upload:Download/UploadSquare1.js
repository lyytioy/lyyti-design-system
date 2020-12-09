import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadSquare1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".upload-square-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="upload-square-1_svg__a"
      d="M9.5 14.5v-4H7c-.55 0-.682-.318-.293-.707l4.586-4.586a1 1 0 011.414 0l4.586 4.586c.389.389.257.707-.293.707h-2.5v4M9.5 16.5v3M14.5 16.5v3"
    />,
    <rect
      className="upload-square-1_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />
  );

export default SvgUploadSquare1;
