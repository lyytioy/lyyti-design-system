import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationRight2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-right-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="navigation-right-2_svg__a"
      d="M13.513.747l7.826 11.25-7.826 11.25"
    />,
    <path
      className="navigation-right-2_svg__a"
      d="M3.318.747c-.538 0-.727.361-.42.8l6.709 9.644a1.515 1.515 0 010 1.606L2.9 22.444c-.307.442-.118.8.42.8h3.3a2.105 2.105 0 001.537-.8l6.71-9.644a1.511 1.511 0 000-1.606L8.159 1.55a2.105 2.105 0 00-1.537-.8z"
    />
  );

export default SvgNavigationRight2;
