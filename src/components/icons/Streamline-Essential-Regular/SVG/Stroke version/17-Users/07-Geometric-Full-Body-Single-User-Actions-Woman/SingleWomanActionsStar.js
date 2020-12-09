import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-star_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-actions-star_svg__cls-1"
      d="M17.946 11.68L19.488 15h3a.735.735 0 01.518 1.283l-2.6 2.563 1.443 3.313a.786.786 0 01-1.119.982l-3.487-1.961-3.486 1.961a.786.786 0 01-1.12-.982l1.443-3.313-2.6-2.563A.734.734 0 0111.988 15h3l1.544-3.323a.8.8 0 011.414.003z"
    />,
    <circle
      className="single-woman-actions-star_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-woman-actions-star_svg__cls-1"
      d="M10.567 10.909a5.286 5.286 0 00-1.681-1.8L6 13.5 3.114 9.113A5.246 5.246 0 00.75 13.5v2.25H3l.75 7.5h4.5l.357-3.574M3 3.75S3 7.5.75 7.5M9 3.75S9 7.5 11.25 7.5"
    />
  );

export default SvgSingleWomanActionsStar;
