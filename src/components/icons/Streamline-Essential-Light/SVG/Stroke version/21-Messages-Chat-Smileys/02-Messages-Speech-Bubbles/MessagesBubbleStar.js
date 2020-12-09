import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-star_svg__a"
      d="M18.206 11.932l1.539 3.568h2.995a.735.735 0 01.517 1.283l-2.6 2.316 1.44 3.313a.785.785 0 01-1.117.982l-3.48-1.959-3.48 1.965a.785.785 0 01-1.117-.982l1.44-3.313-2.6-2.316a.734.734 0 01.514-1.283h3l1.541-3.569a.794.794 0 011.408-.005z"
    />,
    <path
      className="messages-bubble-star_svg__a"
      d="M21.331 10.477A6.974 6.974 0 0021.5 9C21.5 4.306 16.8.5 11 .5S.5 4.306.5 9a7.74 7.74 0 003.018 5.959L1.5 19.5l5.637-2.6a12.548 12.548 0 002.368.5"
    />
  );

export default SvgMessagesBubbleStar;
