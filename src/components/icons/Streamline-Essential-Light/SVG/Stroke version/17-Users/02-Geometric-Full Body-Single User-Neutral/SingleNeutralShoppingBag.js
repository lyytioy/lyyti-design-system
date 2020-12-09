import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralShoppingBag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-shopping-bag_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-shopping-bag_svg__cls-1"
      d="M15.059 17.5V13a2.5 2.5 0 015 0v4.5"
      id="single-neutral-shopping-bag_svg__New_Symbol_42"
      data-name="New Symbol 42"
    />,
    <path
      className="single-neutral-shopping-bag_svg__cls-1"
      d="M22.935 22.39a1 1 0 01-.994 1.11h-8.765a1 1 0 01-.994-1.11l.778-7a1 1 0 01.994-.89h7.21a1 1 0 01.993.89z"
    />,
    <circle
      className="single-neutral-shopping-bag_svg__cls-1"
      cx={6.059}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-neutral-shopping-bag_svg__cls-1"
      d="M10.829 12.5a5 5 0 00-9.77 1.5v3.5h2.5l.5 6h4l.5-6h1"
    />
  );

export default SvgSingleNeutralShoppingBag;
