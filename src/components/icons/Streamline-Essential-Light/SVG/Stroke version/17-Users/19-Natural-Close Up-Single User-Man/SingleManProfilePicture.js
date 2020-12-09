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
    />,
    <path
      className="single-man-profile-picture_svg__cls-1"
      d="M17.5 17.5L14 16v-2s.866-.35.866-2.5c.684 0 .944-2-.007-2a2.63 2.63 0 00.44-2c-.491-2-5.331-2-5.822 0-2.066-.43-.422 1.712-.422 2-.981 0-.981 2 0 2 0 2.15.945 2.5.945 2.5v2l-3.5 1.5"
    />
  );

export default SvgSingleManProfilePicture;
