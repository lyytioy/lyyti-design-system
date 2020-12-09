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
      d="M20.25 9.75l-5.91 6.882a.375.375 0 00.285.618h2.625v6l5.911-6.882a.375.375 0 00-.286-.618H20.25z"
    />,
    <circle
      className="multiple-actions-flash_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="multiple-actions-flash_svg__cls-1"
      d="M11.25 13.5a5.25 5.25 0 00-10.5 0v2.25H3l.75 7.5h4.5l.75-7.5h2.25z"
    />,
    <circle
      className="multiple-actions-flash_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-flash_svg__cls-1"
      d="M19.017 7.519a4.5 4.5 0 00-5.9.771"
    />
  );

export default SvgMultipleActionsFlash;
