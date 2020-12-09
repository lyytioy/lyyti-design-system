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
      d="M23.5 10.5l-2.4 8.634a.5.5 0 01-.482.366H14.86a.5.5 0 01-.474-.342l-1.667-5a.5.5 0 01.475-.658h9.473M2.484 2.223A5.809 5.809 0 006.667 4a5.822 5.822 0 002.3-.473"
    />,
    <circle
      className="single-man-actions-cart_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-man-actions-cart_svg__cls-1"
      d="M10.013 11.845A5 5 0 00.5 14v3.5H3l.5 6h4l.5-6h1.482"
    />
  );

export default SvgSingleManActionsCart;
