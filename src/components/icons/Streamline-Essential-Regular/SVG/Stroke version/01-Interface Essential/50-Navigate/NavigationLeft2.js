import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationLeft2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-left-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="navigation-left-2_svg__a"
      d="M10.577.747l-7.826 11.25 7.826 11.25"
    />,
    <path
      className="navigation-left-2_svg__a"
      d="M20.772.747c.538 0 .727.361.419.8l-6.708 9.644a1.511 1.511 0 000 1.606l6.708 9.644c.308.442.119.8-.419.8h-3.3a2.1 2.1 0 01-1.537-.8L9.222 12.8a1.515 1.515 0 010-1.606l6.709-9.644a2.1 2.1 0 011.537-.8z"
    />
  );

export default SvgNavigationLeft2;
