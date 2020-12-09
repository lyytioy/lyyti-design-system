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
      d="M19 23.123a.5.5 0 01-.722 0L14.5 19.181a2.449 2.449 0 01-.459-2.827 2.449 2.449 0 013.922-.636l.676.676.676-.676a2.449 2.449 0 013.922.636 2.448 2.448 0 01-.458 2.827zM.5 15.5a6 6 0 0112 0z"
    />,
    <circle
      className="multiple-actions-heart_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-heart_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-heart_svg__cls-1"
      d="M19.47 10.605a6 6 0 00-6.465-.3"
    />
  );

export default SvgMultipleActionsHeart;
