import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTakingPicturesCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".taking-pictures-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="taking-pictures-circle_svg__a"
      cx={12}
      cy={12}
      r={11.25}
    />,
    <path
      className="taking-pictures-circle_svg__a"
      d="M15 8.25l-.75-1.5h-4.5L9 8.25H7.5A1.5 1.5 0 006 9.75v4.5a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5v-4.5a1.5 1.5 0 00-1.5-1.5z"
    />,
    <circle
      className="taking-pictures-circle_svg__a"
      cx={12}
      cy={11.625}
      r={1.875}
    />
  );

export default SvgTakingPicturesCircle;
