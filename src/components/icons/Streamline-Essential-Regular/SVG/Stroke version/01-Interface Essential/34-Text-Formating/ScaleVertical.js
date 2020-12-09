import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScaleVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".scale-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="scale-vertical_svg__a"
      d="M.75 6V4.5A2.25 2.25 0 013 2.248h11.25M8.281 2.248v19.5M5.25 21.748h6M20.25 23.248V.748M17.25 20.248l3 3 3-3M17.25 3.748l3-3 3 3"
    />
  );

export default SvgScaleVertical;
