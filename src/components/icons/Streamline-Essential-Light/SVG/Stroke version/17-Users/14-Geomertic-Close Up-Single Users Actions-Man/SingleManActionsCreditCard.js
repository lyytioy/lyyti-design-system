import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsCreditCard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-credit-card_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-credit-card_svg__cls-1"
      d="M11.5 17.5h12M17.5 20.5h3"
    />,
    <rect
      className="single-man-actions-credit-card_svg__cls-1"
      x={11.5}
      y={14.5}
      width={12}
      height={9}
      rx={1}
      ry={1}
    />,
    <path
      className="single-man-actions-credit-card_svg__cls-1"
      d="M8.5 17.5h-8A7 7 0 0111 11.436M3.838 2.592A7.053 7.053 0 008.917 4.75a7.047 7.047 0 002.794-.575"
    />,
    <circle
      className="single-man-actions-credit-card_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />
  );

export default SvgSingleManActionsCreditCard;
