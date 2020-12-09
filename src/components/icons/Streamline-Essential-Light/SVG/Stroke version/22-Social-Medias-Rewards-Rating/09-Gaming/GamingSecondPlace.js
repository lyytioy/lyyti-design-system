import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGamingSecondPlace = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gaming-second-place_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gaming-second-place_svg__a"
      d="M10.98 1.114a1.154 1.154 0 012.04 0L16.56 8h5.8a1.107 1.107 0 01.804 1.9l-4.894 4.771 2.52 7.364a1.129 1.129 0 01-1.615 1.332L12 19.668l-7.175 3.7a1.129 1.129 0 01-1.615-1.333l2.52-7.364L.836 9.9A1.107 1.107 0 011.642 8h5.8zM13.5 15.5v-5"
    />,
    <path
      className="gaming-second-place_svg__a"
      d="M13.5 10.5h.5a1.5 1.5 0 010 3h-.5M8.669 11.493a1.453 1.453 0 011.378-.993 1.454 1.454 0 011.453 1.453 1.321 1.321 0 01-.387.934L8.5 15.5h3"
    />
  );

export default SvgGamingSecondPlace;
