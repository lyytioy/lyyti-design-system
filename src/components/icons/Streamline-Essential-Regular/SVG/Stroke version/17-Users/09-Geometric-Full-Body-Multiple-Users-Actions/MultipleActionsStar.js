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
    <circle
      className="multiple-actions-star_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="multiple-actions-star_svg__cls-1"
      d="M10.743 11.245A5.251 5.251 0 00.75 13.5v2.25H3l.75 7.5h4.5l.522-5.216M17.947 11.68L19.489 15h3a.735.735 0 01.518 1.283l-2.6 2.562 1.443 3.314a.786.786 0 01-1.119.982l-3.491-1.958-3.487 1.961a.786.786 0 01-1.119-.982l1.443-3.314-2.6-2.562A.734.734 0 0111.989 15h3l1.544-3.323a.8.8 0 011.414.003z"
    />,
    <circle
      className="multiple-actions-star_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-star_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.285-.71"
    />
  );

export default SvgMultipleActionsStar;
