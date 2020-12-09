import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleNeutral1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-neutral-1_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-neutral-1_svg__cls-1"
      cx={7.5}
      cy={7.75}
      r={4.25}
    />,
    <path
      className="multiple-neutral-1_svg__cls-1"
      d="M.5 20.5a7 7 0 0114 0zM13.26 5a4.249 4.249 0 11.74 6.189 4.381 4.381 0 01-.5-.429M14.5 13.79a7.005 7.005 0 019 6.71H17"
    />
  );

export default SvgMultipleNeutral1;
