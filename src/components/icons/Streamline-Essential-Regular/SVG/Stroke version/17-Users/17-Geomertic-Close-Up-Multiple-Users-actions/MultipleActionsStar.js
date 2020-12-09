import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-star_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-star_svg__cls-1"
      d="M17.968 11.68L19.509 15h2.979a.735.735 0 01.518 1.283l-2.582 2.562 1.442 3.314a.786.786 0 01-1.119.982l-3.486-1.961-3.487 1.961a.786.786 0 01-1.119-.982l1.445-3.311-2.6-2.562A.734.734 0 0112.009 15h3l1.544-3.323a.8.8 0 011.415.003zM11.832 11.733A6.021 6.021 0 006.75 9a6 6 0 00-6 5.25"
    />,
    <circle
      className="multiple-actions-star_svg__cls-1"
      cx={6.75}
      cy={4.125}
      r={3.375}
    />,
    <circle
      className="multiple-actions-star_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-star_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.284-.71"
    />
  );

export default SvgMultipleActionsStar;
