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
      d="M23.5 10.5l-2.4 8.634a.5.5 0 01-.482.366H14.86a.5.5 0 01-.474-.342l-1.667-5a.5.5 0 01.475-.658h9.473M11 16.5H.5c.423-2.286.353-3.58 1.609-4.118L6.5 10.5v-2s-.945-.35-.945-2.5c-.981 0-.981-2 0-2 0-.288-1.644-2.43.422-2 .491-2 5.331-2 5.822 0a2.63 2.63 0 01-.44 2c.951 0 .691 2 .007 2 0 2.15-.866 2.5-.866 2.5v2l2 .856"
    />
  );

export default SvgSingleManActionsCart;
