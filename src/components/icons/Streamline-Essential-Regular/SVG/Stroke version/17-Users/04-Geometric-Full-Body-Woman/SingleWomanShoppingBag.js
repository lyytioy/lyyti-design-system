import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanShoppingBag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-shopping-bag_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-woman-shopping-bag_svg__cls-1"
      cx={5.25}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-woman-shopping-bag_svg__cls-1"
      d="M9.552 11.441A4.534 4.534 0 008.07 9.269L5.25 13.5 2.43 9.269A4.471 4.471 0 00.75 12.75v3h1.576l.75 7.5h4.348l.524-5.237M2.25 3.75s0 3.75-1.5 3.75M8.25 3.75s0 3.75 1.5 3.75M23.25 23.25h-12l1.5-10.5h9l1.5 10.5z"
    />,
    <path
      className="single-woman-shopping-bag_svg__cls-1"
      d="M15 15.75V10.5a2.25 2.25 0 014.5 0v5.25"
    />
  );

export default SvgSingleWomanShoppingBag;
