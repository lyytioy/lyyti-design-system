import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationDown1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-down-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="navigation-down-1_svg__a"
      d="M.751 13.509l11.25 7.826 11.25-7.826"
    />,
    <path
      className="navigation-down-1_svg__a"
      d="M.751 3.314c0-.538.361-.727.8-.42L11.2 9.6a1.513 1.513 0 001.607 0l9.643-6.709c.442-.307.8-.118.8.42v3.3a2.1 2.1 0 01-.8 1.537l-9.65 6.716a1.517 1.517 0 01-1.607 0L1.554 8.155a2.1 2.1 0 01-.8-1.537z"
    />
  );

export default SvgNavigationDown1;
