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
    <circle
      className="single-neutral-actions-cart_svg__cls-1"
      cx={15.5}
      cy={22.5}
      r={1}
    />,
    <circle
      className="single-neutral-actions-cart_svg__cls-1"
      cx={19.5}
      cy={22.5}
      r={1}
    />,
    <path
      className="single-neutral-actions-cart_svg__cls-1"
      d="M23.5 10.5l-2.4 8.634a.5.5 0 01-.482.366H14.86a.5.5 0 01-.474-.342l-1.667-5a.5.5 0 01.475-.658h9.473M10.5 16.5H.5a8.719 8.719 0 01.7-3.322c.49-.981 2.539-1.661 5.111-2.613.695-.258.581-2.074.273-2.413a5.127 5.127 0 01-1.34-3.978A3.354 3.354 0 018.5.5a3.354 3.354 0 013.256 3.674 5.127 5.127 0 01-1.336 3.978c-.308.339-.422 2.155.273 2.413.838.31 1.62.591 2.311.863"
    />
  );

export default SvgSingleNeutralActionsCart;
