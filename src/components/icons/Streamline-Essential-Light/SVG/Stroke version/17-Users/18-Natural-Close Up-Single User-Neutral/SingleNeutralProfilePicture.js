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
    />,
    <path
      className="single-neutral-profile-picture_svg__cls-1"
      d="M17.5 17.22s-2.02-.893-3.432-1.415c-.926-.345-.794-1.907-.258-2.494a4.285 4.285 0 001.259-3.532A3 3 0 0012 6.5a3 3 0 00-3.069 3.279 4.285 4.285 0 001.259 3.532c.536.587.668 2.149-.258 2.494C8.52 16.327 6.5 17.22 6.5 17.22"
    />
  );

export default SvgSingleNeutralProfilePicture;
