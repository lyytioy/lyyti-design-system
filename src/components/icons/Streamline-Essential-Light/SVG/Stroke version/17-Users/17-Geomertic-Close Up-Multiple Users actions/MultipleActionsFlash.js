import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-flash_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-flash_svg__cls-1"
      d="M17 19.5h1.5v3.64a.125.125 0 00.223.078l4.657-5.893A.5.5 0 0023 16.5h-1.5v-3.64a.125.125 0 00-.223-.078l-4.657 5.893a.5.5 0 00.38.825zM.5 15.5a6 6 0 0112 0z"
    />,
    <circle
      className="multiple-actions-flash_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-flash_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-flash_svg__cls-1"
      d="M19.47 10.605a6 6 0 00-6.462-.307"
    />
  );

export default SvgMultipleActionsFlash;
