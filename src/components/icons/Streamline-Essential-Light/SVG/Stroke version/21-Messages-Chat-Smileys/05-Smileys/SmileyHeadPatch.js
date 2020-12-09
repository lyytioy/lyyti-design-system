import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyHeadPatch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-head-patch_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-head-patch_svg__a"
      d="M16.5 7.5a3.564 3.564 0 003 1.5M6.5 11.25a.25.25 0 11.25-.25.25.25 0 01-.25.25M17.5 11.25a.25.25 0 10-.25-.25.25.25 0 00.25.25M7.5 19a4.5 4.5 0 019 0M4.207 1.379L1.379 4.207A3 3 0 005.621 8.45L8.45 5.621a3 3 0 10-4.243-4.242z"
    />,
    <path
      className="smiley-head-patch_svg__a"
      d="M3.146 5.268l2.121-2.122L6.681 4.56 4.56 6.682zM.6 10.5A11.49 11.49 0 1010.5.6"
    />
  );

export default SvgSmileyHeadPatch;
