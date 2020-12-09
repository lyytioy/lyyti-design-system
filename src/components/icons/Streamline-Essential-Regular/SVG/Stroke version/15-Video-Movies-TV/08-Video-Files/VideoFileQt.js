import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileQt = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-qt_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-file-qt_svg__a"
      d="M11.25 23.25h-9a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l5.872 5.872a1.5 1.5 0 01.439 1.06v3.129"
    />,
    <path
      className="video-file-qt_svg__a"
      d="M20.25 8.25h-6a1.5 1.5 0 01-1.5-1.5v-6M21.75 21.75v-7.5M20.25 14.25h3M17.25 20.25a1.5 1.5 0 01-3 0v-4.5a1.5 1.5 0 013 0zM15.75 21.75l1.5 1.5"
    />
  );

export default SvgVideoFileQt;
