import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-heart_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-heart_svg__cls-1"
      d="M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6z"
    />,
    <circle
      className="multiple-actions-heart_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <circle
      className="multiple-actions-heart_svg__cls-1"
      cx={14}
      cy={4.5}
      r={3}
      id="multiple-actions-heart_svg___Group_"
      data-name="&lt;Group&gt;"
    />,
    <path
      className="multiple-actions-heart_svg__cls-1"
      d="M18.7 12.485a5 5 0 00-7.262-2.819M19 23.123a.5.5 0 01-.722 0L14.5 19.181a2.449 2.449 0 01-.459-2.827 2.449 2.449 0 013.922-.636l.676.676.676-.676a2.449 2.449 0 013.922.636 2.448 2.448 0 01-.458 2.827z"
    />
  );

export default SvgMultipleActionsHeart;
