import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoEditBrightness = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-edit-brightness_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="video-edit-brightness_svg__a"
      cx={15}
      cy={11.999}
      r={7.5}
    />,
    <path
      className="video-edit-brightness_svg__a"
      d="M7.654 19.5a10.5 10.5 0 010-15M3.772 19.5a13.508 13.508 0 010-15"
    />
  );

export default SvgVideoEditBrightness;
