import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsCart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-cart_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-actions-cart_svg__cls-1"
      cx={20.5}
      cy={22.5}
      r={1}
    />,
    <circle
      className="multiple-actions-cart_svg__cls-1"
      cx={16.5}
      cy={22.5}
      r={1}
    />,
    <path
      className="multiple-actions-cart_svg__cls-1"
      d="M23.5 13l-2.386 7.158a.5.5 0 01-.474.342h-4.268a.5.5 0 01-.479-.356l-1.2-4a.5.5 0 01.479-.644h7.5M.5 15.5a6 6 0 0112 0z"
    />,
    <circle
      className="multiple-actions-cart_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-cart_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-cart_svg__cls-1"
      d="M21.19 12.487a6 6 0 00-8.182-2.187"
    />
  );

export default SvgMultipleActionsCart;
