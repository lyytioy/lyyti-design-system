import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileGiveHand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-give-hand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="common-file-give-hand_svg__a"
      d="M.5 15.5v8M.5 22.5h16a3 3 0 00-3-3h-8M.5 16.5h6a3 3 0 013 3M11.5 1.333A.833.833 0 0112.333.5h8A1 1 0 0121 .756L23.169 2.7a1 1 0 01.331.744v11.223a.833.833 0 01-.833.833H12.333a.833.833 0 01-.833-.833z"
    />
  );

export default SvgCommonFileGiveHand;
