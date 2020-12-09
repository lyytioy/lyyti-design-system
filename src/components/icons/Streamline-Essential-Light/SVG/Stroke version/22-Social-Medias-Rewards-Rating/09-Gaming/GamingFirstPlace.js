import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGamingFirstPlace = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gaming-first-place_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gaming-first-place_svg__a"
      d="M10.98 1.114a1.154 1.154 0 012.04 0L16.56 8h5.8a1.107 1.107 0 01.804 1.9l-4.894 4.771 2.52 7.364a1.129 1.129 0 01-1.615 1.332L12 19.668l-7.175 3.7a1.129 1.129 0 01-1.615-1.333l2.52-7.364L.836 9.9A1.107 1.107 0 011.642 8h5.8zM13.5 15.5v-5"
    />,
    <path
      className="gaming-first-place_svg__a"
      d="M13.5 10.5h.5a1.5 1.5 0 010 3h-.5M10.5 15.5V11a.5.5 0 00-.8-.4l-1.2.9M9.5 15.5h2"
    />
  );

export default SvgGamingFirstPlace;
