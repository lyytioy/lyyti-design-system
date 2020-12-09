import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralProfilePicture = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-profile-picture_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="single-neutral-profile-picture_svg__cls-1"
      x={2.25}
      y={0.75}
      width={19.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <circle
      className="single-neutral-profile-picture_svg__cls-1"
      cx={12}
      cy={9.083}
      r={4.11}
    />,
    <path
      className="single-neutral-profile-picture_svg__cls-1"
      d="M18.75 19.027a7.63 7.63 0 00-13.5 0"
    />
  );

export default SvgSingleNeutralProfilePicture;
