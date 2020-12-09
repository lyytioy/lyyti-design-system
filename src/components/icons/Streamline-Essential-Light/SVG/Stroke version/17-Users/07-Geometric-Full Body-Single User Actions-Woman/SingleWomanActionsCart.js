import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsCart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-cart_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-woman-actions-cart_svg__cls-1"
      cx={15.5}
      cy={22.5}
      r={1}
    />,
    <circle
      className="single-woman-actions-cart_svg__cls-1"
      cx={19.5}
      cy={22.5}
      r={1}
    />,
    <path
      className="single-woman-actions-cart_svg__cls-1"
      d="M23.5 10.5l-2.4 8.634a.5.5 0 01-.482.366H14.86a.5.5 0 01-.474-.342l-1.667-5a.5.5 0 01.475-.658h9.473M2.547 4.577A4.637 4.637 0 006 2.974a4.637 4.637 0 003.453 1.6"
    />,
    <circle
      className="single-woman-actions-cart_svg__cls-1"
      cx={6}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-woman-actions-cart_svg__cls-1"
      d="M9.435 18.5h-.892l-1.054 5h-3l-1.054-5H.5l1.805-6.582a3.8 3.8 0 017.39 0l.16.586"
    />
  );

export default SvgSingleWomanActionsCart;
