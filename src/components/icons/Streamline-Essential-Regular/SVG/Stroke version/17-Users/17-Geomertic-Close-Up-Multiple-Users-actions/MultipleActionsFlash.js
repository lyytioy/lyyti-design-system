import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-flash_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-flash_svg__cls-1"
      d="M12.75 14.25a6 6 0 00-6-5.25 6 6 0 00-6 5.25"
    />,
    <circle
      className="multiple-actions-flash_svg__cls-1"
      cx={6.75}
      cy={4.125}
      r={3.375}
    />,
    <circle
      className="multiple-actions-flash_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-flash_svg__cls-1"
      d="M18.678 7.312a4.5 4.5 0 00-5.566.978M20.25 9.75l-5.911 6.882a.375.375 0 00.286.618h2.625v6l5.911-6.882a.376.376 0 00-.286-.618H20.25z"
    />
  );

export default SvgMultipleActionsFlash;
