import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGiftBox = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gift-box_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gift-box_svg__a"
      d="M23.5 10.5a1 1 0 01-1 1h-21a1 1 0 01-1-1v-2a1 1 0 011-1h21a1 1 0 011 1zM21.5 22.5a1 1 0 01-1 1h-17a1 1 0 01-1-1v-11h19zM8.5 7.5v16M15.5 23.5v-16M17.427 3.84C16.663 4.605 13 5.5 13 5.5s.9-3.663 1.66-4.427a1.957 1.957 0 112.767 2.767zM6.573 3.84C7.337 4.605 11 5.5 11 5.5s-.9-3.663-1.66-4.427A1.957 1.957 0 006.573 3.84z"
    />
  );

export default SvgGiftBox;
