import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsUpDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-up-down_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-up-down_svg__cls-1"
      d="M21.5 23.5v-7M23.5 21.5l-2 2-2-2M15.5 16.5v7M17.5 18.5l-2-2-2 2M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6z"
    />,
    <circle
      className="multiple-actions-up-down_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <circle
      className="multiple-actions-up-down_svg__cls-1"
      cx={14}
      cy={4.5}
      r={3}
      id="multiple-actions-up-down_svg___Group_"
      data-name="&lt;Group&gt;"
    />,
    <path
      className="multiple-actions-up-down_svg__cls-1"
      d="M18.7 12.485a5 5 0 00-7.262-2.819"
    />
  );

export default SvgMultipleActionsUpDown;
