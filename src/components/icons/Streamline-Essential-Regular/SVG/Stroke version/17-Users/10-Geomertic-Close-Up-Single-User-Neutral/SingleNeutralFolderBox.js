import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralFolderBox = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-folder-box_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-folder-box_svg__cls-1"
      cx={12}
      cy={9}
      r={2.25}
    />,
    <path
      className="single-neutral-folder-box_svg__cls-1"
      d="M15.9 14.25a4.5 4.5 0 00-7.792 0M15 17.25a3 3 0 01-6 0H1.5a.75.75 0 00-.75.75v4.5a.75.75 0 00.75.75h21a.75.75 0 00.75-.75V18a.75.75 0 00-.75-.75z"
    />,
    <path
      className="single-neutral-folder-box_svg__cls-1"
      d="M21.75 14.25v-9a1.5 1.5 0 00-1.5-1.5H9.75v-1.5a1.5 1.5 0 00-1.5-1.5h-4.5a1.5 1.5 0 00-1.5 1.5v12"
    />
  );

export default SvgSingleNeutralFolderBox;
