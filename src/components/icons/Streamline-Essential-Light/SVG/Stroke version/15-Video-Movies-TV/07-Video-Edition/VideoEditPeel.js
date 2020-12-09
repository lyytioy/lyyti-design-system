import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoEditPeel = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-edit-peel_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-edit-peel_svg__a"
      d="M18.5 3.5h4a1 1 0 011 1v18a1 1 0 01-1 1h-21a1 1 0 01-1-1v-18a1 1 0 011-1h12"
    />,
    <path
      className="video-edit-peel_svg__a"
      d="M15 23.5a3.5 3.5 0 000-7h-1.5V.5H15A3.5 3.5 0 0118.5 4v16M3.5 9.5h7M8.5 7.5l2 2-2 2M10.5 17.5h-7M5.5 19.5l-2-2 2-2"
    />
  );

export default SvgVideoEditPeel;
