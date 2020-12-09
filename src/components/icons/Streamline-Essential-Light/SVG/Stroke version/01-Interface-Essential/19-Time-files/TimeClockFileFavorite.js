import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileFavorite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-favorite_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-favorite_svg__a"
      d="M9.5 23.5h-8a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.294L19.207 4.5a1 1 0 01.293.707V8.5M8.484 15.4a5 5 0 116.016-4.9"
    />,
    <path
      className="time-clock-file-favorite_svg__a"
      d="M9.5 7.501v3h2M18.206 11.931l1.539 3.57h2.995a.735.735 0 01.517 1.283l-2.6 2.315 1.44 3.314a.785.785 0 01-1.117.982l-3.48-1.961-3.48 1.966a.785.785 0 01-1.117-.982l1.44-3.314-2.6-2.315a.734.734 0 01.514-1.283h3l1.541-3.57a.794.794 0 011.408-.005z"
    />
  );

export default SvgTimeClockFileFavorite;
