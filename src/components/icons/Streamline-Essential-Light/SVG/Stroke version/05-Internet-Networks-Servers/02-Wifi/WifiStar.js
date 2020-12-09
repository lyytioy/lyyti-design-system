import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="wifi-star_svg__a"
      d="M3.159 7.6a8.944 8.944 0 0112.653 0M18.342 4.169a12.526 12.526 0 00-17.715 0M5.688 11.02a5.371 5.371 0 017.594 0M15.812 7.6a8.944 8.944 0 00-12.653 0M13.282 11.02a5.371 5.371 0 00-7.594 0M9.485 17.5a1.79 1.79 0 010-3.579M18.206 11.931l1.539 3.57h2.995a.735.735 0 01.517 1.283l-2.6 2.316 1.44 3.313a.785.785 0 01-1.117.982l-3.48-1.961-3.48 1.966a.785.785 0 01-1.117-.982l1.44-3.313-2.6-2.316a.734.734 0 01.514-1.283h3l1.541-3.57a.8.8 0 011.408-.005z"
    />
  );

export default SvgWifiStar;
