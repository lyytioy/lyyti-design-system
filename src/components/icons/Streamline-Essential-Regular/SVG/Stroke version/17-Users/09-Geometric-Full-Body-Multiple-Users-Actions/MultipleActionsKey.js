import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsKey = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-key_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-key_svg__cls-1"
      d="M15.576 18.924a.375.375 0 11-.531 0 .377.377 0 01.531 0"
    />,
    <path
      className="multiple-actions-key_svg__cls-1"
      d="M19.087 17.709l3.688-3.687a1.624 1.624 0 00-2.3-2.3l-3.687 3.688a4.06 4.06 0 102.3 2.3z"
    />,
    <circle
      className="multiple-actions-key_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="multiple-actions-key_svg__cls-1"
      d="M11.25 14.25v-.75a5.25 5.25 0 00-10.5 0v2.25H3l.75 7.5h4.5l.387-3.862"
    />,
    <circle
      className="multiple-actions-key_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-key_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.285-.71"
    />
  );

export default SvgMultipleActionsKey;
