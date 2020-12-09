import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-heart_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-actions-heart_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="multiple-actions-heart_svg__cls-1"
      d="M10.743 11.245A5.251 5.251 0 00.75 13.5v2.25H3l.75 7.5h4.5l.522-5.216M17.25 23.25l-5.113-5.335a3.025 3.025 0 01-.567-3.492 3.025 3.025 0 014.845-.787l.835.835.836-.835a3.025 3.025 0 014.845.787 3.025 3.025 0 01-.567 3.492z"
    />,
    <circle
      className="multiple-actions-heart_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-heart_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.285-.71"
    />
  );

export default SvgMultipleActionsHeart;
