import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="network-star_svg__a"
      d="M17.947 11.68l1.541 4.07h3a.735.735 0 01.519 1.283l-2.6 1.816 1.443 3.313a.786.786 0 01-1.12.982l-3.49-1.961-3.487 1.961a.786.786 0 01-1.119-.982l1.443-3.313-2.6-1.816a.734.734 0 01.515-1.283h3l1.545-4.07a.8.8 0 011.41 0zM9.76 23.027A11.251 11.251 0 1123.25 12"
    />,
    <path
      className="network-star_svg__a"
      d="M9.289 22.922C7.768 20.689 6.75 16.633 6.75 12S7.768 3.312 9.289 1.079M.775 11.25H12.75M2.999 5.25H21M2.048 17.25h5.166M14.711 1.079a16.982 16.982 0 012.3 7.126"
    />
  );

export default SvgNetworkStar;
