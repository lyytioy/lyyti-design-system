import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsKey = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-key_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-actions-key_svg__cls-1"
      cx={17}
      cy={20}
      r={1}
    />,
    <path
      className="multiple-actions-key_svg__cls-1"
      d="M23.5 13.5h-2l-3.236 3.236a3.5 3.5 0 102 2L23.5 15.5zM7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6z"
    />,
    <circle
      className="multiple-actions-key_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <circle
      className="multiple-actions-key_svg__cls-1"
      cx={14}
      cy={4.5}
      r={3}
      id="multiple-actions-key_svg___Group_"
      data-name="&lt;Group&gt;"
    />,
    <path
      className="multiple-actions-key_svg__cls-1"
      d="M18.7 12.485a5 5 0 00-7.262-2.819"
    />
  );

export default SvgMultipleActionsKey;
