import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="email-action-star_svg__a"
      d="M18.206 11.93l1.539 3.57h2.995a.735.735 0 01.517 1.283l-2.6 2.316 1.44 3.313a.785.785 0 01-1.117.982l-3.48-1.961-3.48 1.961a.785.785 0 01-1.117-.982l1.44-3.313-2.6-2.316a.734.734 0 01.514-1.283h3l1.541-3.57a.8.8 0 011.408 0z"
    />,
    <path
      className="email-action-star_svg__a"
      d="M9.5 14.5H2A1.5 1.5 0 01.5 13V2A1.5 1.5 0 012 .5h18A1.5 1.5 0 0121.5 2v8.5"
    />,
    <path className="email-action-star_svg__a" d="M21.067.946L11 9 .933.946" />
  );

export default SvgEmailActionStar;
