import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileFavorite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-favorite_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-favorite_svg__a"
      d="M17.956 11.68l1.544 4.07h2.99a.735.735 0 01.517 1.283l-2.6 1.816 1.44 3.313a.785.785 0 01-1.117.982l-3.48-1.961-3.48 1.961a.785.785 0 01-1.117-.982l1.44-3.313-2.6-1.816a.734.734 0 01.514-1.283h3l1.541-4.07a.8.8 0 011.408 0zM8.25 14.25a4.5 4.5 0 114.25-5.978"
    />,
    <path
      className="time-clock-file-favorite_svg__a"
      d="M9.75 9.75h-1.5v-1.5"
    />,
    <path
      className="time-clock-file-favorite_svg__a"
      d="M7.5 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.44l2.872 2.871a1.5 1.5 0 01.439 1.061V7.5"
    />
  );

export default SvgTimeClockFileFavorite;
