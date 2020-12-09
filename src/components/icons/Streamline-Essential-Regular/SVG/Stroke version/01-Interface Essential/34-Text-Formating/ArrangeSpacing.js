import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArrangeSpacing = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".arrange-spacing_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="arrange-spacing_svg__a"
      d="M3.75 23.248V.748M.75 3.748l3-3 3 3M.75 20.248l3 3 3-3M23.25 9.748h-10.5M15.75 5.248h4.5M20.25 6.748V3a2.25 2.25 0 00-4.5 0v3.75M23.25 23.248h-10.5M15.75 18.748h4.5M20.25 20.248V16.5a2.25 2.25 0 10-4.5 0v3.75"
    />
  );

export default SvgArrangeSpacing;
