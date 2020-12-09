import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="wifi-star_svg__a"
      d="M5.96 11.284a5.25 5.25 0 016.756-.559M3.07 7.822a9.75 9.75 0 0113.165-.029M.75 3.885a14.252 14.252 0 0117.85.007M17.947 11.68l1.541 4.07h3a.735.735 0 01.518 1.283l-2.6 1.816 1.442 3.313a.785.785 0 01-1.119.982l-3.489-1.961-3.487 1.961a.785.785 0 01-1.119-.982l1.443-3.313-2.6-1.816a.734.734 0 01.515-1.283h3l1.544-4.07a.8.8 0 011.411 0z"
    />
  );

export default SvgWifiStar;
