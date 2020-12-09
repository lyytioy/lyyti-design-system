import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsCart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-cart_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-man-actions-cart_svg__cls-1"
      cx={15.5}
      cy={22.5}
      r={1}
    />,
    <circle
      className="single-man-actions-cart_svg__cls-1"
      cx={19.5}
      cy={22.5}
      r={1}
    />,
    <path
      className="single-man-actions-cart_svg__cls-1"
      d="M23.5 10.5l-2.4 8.634a.5.5 0 01-.482.366H14.86a.5.5 0 01-.474-.342l-1.667-5a.5.5 0 01.475-.658h9.473M10.5 17.5H.5a7 7 0 0110.783-5.89M3.838 2.592A7.053 7.053 0 008.917 4.75a7.047 7.047 0 002.794-.575"
    />,
    <circle
      className="single-man-actions-cart_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />
  );

export default SvgSingleManActionsCart;
