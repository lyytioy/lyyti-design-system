import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDislike2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".dislike-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="dislike-2_svg__a"
      d="M23.5 15.628h-2a1 1 0 01-1-1v-12a1 1 0 011-1h2M20.5 4.628C13.161.9 13.519 1.393 7.235 1.393 4.6 1.393 3.277 3.108 2.5 5.621v.016l-1.907 6.4v.012A2 2 0 002.5 14.628h4.9a2 2 0 011.934 2.51l-.882 3.344a1.713 1.713 0 003.06 1.418l4.89-6.928a2 2 0 011.634-.847H20.5"
    />
  );

export default SvgDislike2;
