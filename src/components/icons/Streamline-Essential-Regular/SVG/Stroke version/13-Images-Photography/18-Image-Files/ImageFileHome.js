import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="image-file-home_svg__a"
      d="M12.75 15.948v5.8a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-5.8"
    />,
    <path
      className="image-file-home_svg__a"
      d="M11.25 17.26l4.518-3.953a2.249 2.249 0 012.964 0l4.518 3.953M18.75 23.25h-3v-3a1.5 1.5 0 013 0zM8.25 20.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V9"
    />,
    <path
      className="image-file-home_svg__a"
      d="M5.25 5.625A.375.375 0 114.875 6a.375.375 0 01.375-.375M13.127 11.253l-1.877-3a.749.749 0 00-1.238-.014l-2 2.851-1.232-.99a.75.75 0 00-1.093.169L3.75 14.25h4.5"
    />
  );

export default SvgImageFileHome;
