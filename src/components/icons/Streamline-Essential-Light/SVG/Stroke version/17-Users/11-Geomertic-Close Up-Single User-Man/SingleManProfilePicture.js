import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManProfilePicture = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-profile-picture_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-profile-picture_svg__cls-1"
      d="M9.2 8.1a5.4 5.4 0 006.022 1.21"
    />,
    <circle
      className="single-man-profile-picture_svg__cls-1"
      cx={12}
      cy={9.75}
      r={3.25}
    />,
    <path
      d="M17.056 18a5.321 5.321 0 00-10 0"
      strokeWidth={0.989}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <rect
      className="single-man-profile-picture_svg__cls-1"
      x={2}
      y={0.5}
      width={20}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="single-man-profile-picture_svg__cls-1"
      d="M5 3.5h14v17H5z"
    />
  );

export default SvgSingleManProfilePicture;
