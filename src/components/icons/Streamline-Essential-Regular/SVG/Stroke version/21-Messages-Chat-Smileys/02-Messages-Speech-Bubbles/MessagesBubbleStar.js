import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-star_svg__a"
      d="M17.975 11.677L19.517 15h2.971a.735.735 0 01.518 1.283l-2.575 2.563 1.443 3.313a.786.786 0 01-1.119.982l-3.487-1.961-3.486 1.961a.786.786 0 01-1.12-.982l1.443-3.313-2.6-2.563A.734.734 0 0112.017 15h3l1.544-3.323a.8.8 0 011.414 0z"
    />,
    <path
      className="messages-bubble-star_svg__a"
      d="M23.223 10.5a10.5 10.5 0 10-19.39 6.274L.75 23.25l6.474-3.083A10.725 10.725 0 009 21.05"
    />
  );

export default SvgMessagesBubbleStar;
