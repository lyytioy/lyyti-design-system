import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsCart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-cart_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-cart_svg__cls-1"
      d="M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6z"
    />,
    <circle
      className="single-neutral-actions-cart_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <circle
      className="single-neutral-actions-cart_svg__cls-1"
      cx={15.363}
      cy={22.5}
      r={1}
    />,
    <circle
      className="single-neutral-actions-cart_svg__cls-1"
      cx={19.363}
      cy={22.5}
      r={1}
    />,
    <path
      className="single-neutral-actions-cart_svg__cls-1"
      d="M23.363 10.5l-2.4 8.634a.5.5 0 01-.482.366h-5.76a.5.5 0 01-.474-.342l-1.667-5a.5.5 0 01.475-.658h9.475"
    />
  );

export default SvgSingleNeutralActionsCart;
