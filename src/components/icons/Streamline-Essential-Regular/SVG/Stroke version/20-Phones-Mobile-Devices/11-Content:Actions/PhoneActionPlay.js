import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionPlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-play_svg__a"
      d="M14.25 15.75v4.768a2.732 2.732 0 01-2.733 2.732H4.983a2.732 2.732 0 01-2.733-2.732V4.983A2.733 2.733 0 014.983 2.25H6.75M2.25 18.75h12"
    />,
    <rect
      className="phone-action-play_svg__a"
      x={9.75}
      y={0.75}
      width={12}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="phone-action-play_svg__a"
      d="M14.25 4.93a.43.43 0 01.651-.369l3.034 1.821a.43.43 0 010 .737L14.9 8.939a.43.43 0 01-.651-.369z"
    />
  );

export default SvgPhoneActionPlay;
