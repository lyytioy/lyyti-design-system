import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralProfilePicture = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-profile-picture_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <g
      id="single-neutral-profile-picture_svg__New_Symbol_1"
      data-name="New Symbol 1"
    >
      <circle
        className="single-neutral-profile-picture_svg__cls-1"
        cx={11.944}
        cy={9.503}
        r={3.25}
      />
      <path
        d="M17 17.753a5.321 5.321 0 00-10 0"
        strokeWidth={0.989}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>,
    <rect
      className="single-neutral-profile-picture_svg__cls-1"
      x={2}
      y={0.5}
      width={20}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="single-neutral-profile-picture_svg__cls-1"
      d="M5 3.5h14v17H5z"
    />
  );

export default SvgSingleNeutralProfilePicture;
