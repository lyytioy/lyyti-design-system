import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoEditBrightness = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-edit-brightness_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="video-edit-brightness_svg__a"
      cx={15.749}
      cy={12.411}
      r={7.5}
    />,
    <path
      className="video-edit-brightness_svg__a"
      d="M7.3 19.862a10.868 10.868 0 01.088-15.749M3.14 19.833a13.942 13.942 0 01.092-15.744"
    />
  );

export default SvgVideoEditBrightness;
