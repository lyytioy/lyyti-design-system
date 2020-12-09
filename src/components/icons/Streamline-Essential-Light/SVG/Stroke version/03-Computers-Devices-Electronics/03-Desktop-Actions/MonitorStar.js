import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-star_svg__a"
      d="M5.5 17.5h4M.5 11.5h14M8.5 14.5V16A1.5 1.5 0 017 17.5"
    />,
    <path
      className="monitor-star_svg__a"
      d="M20.5 11.5v-10a1 1 0 00-1-1h-18a1 1 0 00-1 1v12a1 1 0 001 1h8"
    />,
    <path
      className="monitor-star_svg__a"
      d="M18.206 11.93l1.539 3.57h2.995a.735.735 0 01.517 1.283l-2.6 2.316 1.44 3.313a.785.785 0 01-1.117.982l-3.48-1.961-3.48 1.961a.785.785 0 01-1.117-.982l1.44-3.313-2.6-2.316a.734.734 0 01.514-1.283h3l1.541-3.57a.8.8 0 011.408 0z"
    />
  );

export default SvgMonitorStar;
