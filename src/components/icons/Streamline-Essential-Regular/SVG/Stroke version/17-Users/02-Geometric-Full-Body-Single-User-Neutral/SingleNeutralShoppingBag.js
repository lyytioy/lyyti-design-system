import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralShoppingBag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-shopping-bag_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-shopping-bag_svg__cls-1"
      d="M23.25 23.25h-12l1.5-10.5h9l1.5 10.5z"
    />,
    <path
      className="single-neutral-shopping-bag_svg__cls-1"
      d="M15 15.75V10.5a2.25 2.25 0 014.5 0v5.25"
    />,
    <circle
      className="single-neutral-shopping-bag_svg__cls-1"
      cx={5.25}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-neutral-shopping-bag_svg__cls-1"
      d="M9.19 10.575A4.5 4.5 0 00.75 12.75v3h1.5l.75 7.5h4.5l.51-5.1"
    />
  );

export default SvgSingleNeutralShoppingBag;
