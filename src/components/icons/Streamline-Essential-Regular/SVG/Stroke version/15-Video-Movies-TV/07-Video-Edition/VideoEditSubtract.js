import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoEditSubtract = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-edit-subtract_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-edit-subtract_svg__a"
      d="M.75 5.25h4.5M18.75 5.25h-4.5M5.25 23.25v-9M14.25 8.25V.75M5.25 9.75v-9M.75 18.75h4.5M.75 14.25H9M18.75 8.25v-6a1.5 1.5 0 00-1.5-1.5h-15a1.5 1.5 0 00-1.5 1.5v19.5a1.5 1.5 0 001.5 1.5h7.5M.75 9.75h10.5"
    />,
    <circle
      className="video-edit-subtract_svg__a"
      cx={17.25}
      cy={17.25}
      r={6}
    />,
    <path className="video-edit-subtract_svg__a" d="M14.25 17.25h6" />
  );

export default SvgVideoEditSubtract;
