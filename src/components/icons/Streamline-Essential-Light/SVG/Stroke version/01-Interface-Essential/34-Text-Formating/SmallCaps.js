import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmallCaps = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".small-caps_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="small-caps_svg__a"
      d="M.5 5.5v-2a1 1 0 011-1h12a1 1 0 011 1v2M7.5 2.498v20M5 22.498h5M13.5 11.5v-1a1 1 0 011-1h8a1 1 0 011 1v1M18.5 9.498v13M17 22.498h3"
    />
  );

export default SvgSmallCaps;
