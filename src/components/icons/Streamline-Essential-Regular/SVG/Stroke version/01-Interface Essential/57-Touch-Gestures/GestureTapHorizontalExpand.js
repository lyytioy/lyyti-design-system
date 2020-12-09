import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapHorizontalExpand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-horizontal-expand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-horizontal-expand_svg__a"
      d="M1.5 12.109L4.594 8.32a1.633 1.633 0 011.675-.566 1.637 1.637 0 011.068 2.321l-.587 1.174h6.75a1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5H9l-.332 1.993a3 3 0 01-2.959 2.507H1.5M20.25 3.748l-3-3-3 3M20.25 20.249l-3 3-3-3.001"
    />,
    <path
      className="gesture-tap-horizontal-expand_svg__a"
      d="M15 16.724a5.193 5.193 0 002.25.524 5.25 5.25 0 10-3.667-9"
    />
  );

export default SvgGestureTapHorizontalExpand;
