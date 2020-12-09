import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileBmp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-bmp_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="image-file-bmp_svg__a"
      d="M20.5 23.5a1 1 0 001-1V6.475A5.975 5.975 0 0015.525.5H3.5a1 1 0 00-1 1v21a1 1 0 001 1z"
    />,
    <path
      className="image-file-bmp_svg__a"
      d="M16.5.58V4.5a1 1 0 001 1h3.92M8.5 14A1.5 1.5 0 017 15.5H5.5v-3H7A1.5 1.5 0 018.5 14zM8.5 17A1.5 1.5 0 017 18.5H5.5v-3H7A1.5 1.5 0 018.5 17zM10.5 18.5v-6l1.5 3 1.5-3v6M18.5 14a1.5 1.5 0 01-1.5 1.5h-1.5v-3H17a1.5 1.5 0 011.5 1.5zM15.5 18.5v-3"
    />
  );

export default SvgImageFileBmp;
