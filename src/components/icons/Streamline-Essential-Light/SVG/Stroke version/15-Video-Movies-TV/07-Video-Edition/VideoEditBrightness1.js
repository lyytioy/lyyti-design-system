import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoEditBrightness1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-edit-brightness-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="video-edit-brightness-1_svg__a"
      cx={16}
      cy={12}
      r={7.5}
    />,
    <path
      className="video-edit-brightness-1_svg__a"
      d="M5.5 9.5h-5M5.5 14.5h-5M7 4.5H3M7 19.5H3"
    />
  );

export default SvgVideoEditBrightness1;
