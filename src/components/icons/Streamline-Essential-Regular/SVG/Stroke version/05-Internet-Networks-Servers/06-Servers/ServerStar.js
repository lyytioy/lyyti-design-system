import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="server-star_svg__a"
      d="M5.251 4.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M5.251 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="server-star_svg__a"
      d="M14.251 9.75h-9a4.5 4.5 0 010-9h12a4.5 4.5 0 012.266 8.389M9.751 18.75h-4.5a4.5 4.5 0 010-9h9M10.501 5.25h6.75M17.948 11.68l1.542 4.07h3a.735.735 0 01.518 1.283l-2.6 1.815 1.443 3.314a.786.786 0 01-1.119.982l-3.487-1.961-3.486 1.961a.786.786 0 01-1.12-.982l1.443-3.314-2.6-1.815a.734.734 0 01.516-1.283h3l1.544-4.07a.8.8 0 011.406 0z"
    />
  );

export default SvgServerStar;
