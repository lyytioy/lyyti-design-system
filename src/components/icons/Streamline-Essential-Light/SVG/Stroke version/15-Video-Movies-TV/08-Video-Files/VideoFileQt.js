import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileQt = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-qt_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-file-qt_svg__a"
      d="M20.5 23.5a1 1 0 001-1V6.475A5.975 5.975 0 0015.525.5H3.5a1 1 0 00-1 1v21a1 1 0 001 1z"
    />,
    <path
      className="video-file-qt_svg__a"
      d="M16.5.58V4.5a1 1 0 001 1h3.92M11.5 16.5a1.5 1.5 0 01-3 0V14a1.5 1.5 0 013 0zM11.5 19.5l-2-1.585M13.5 12.5h4M15.5 12.5v6"
    />
  );

export default SvgVideoFileQt;
