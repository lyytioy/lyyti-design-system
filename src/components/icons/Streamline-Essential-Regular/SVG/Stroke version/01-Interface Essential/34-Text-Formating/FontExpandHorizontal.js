import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFontExpandHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".font-expand-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="font-expand-horizontal_svg__a"
      d="M20.25 15.748l3-3H18M20.25 9.748l3 3M3.75 15.748l-3-3H6M3.75 9.748l-3 3M7.259 18.748l4.568-13.292c.1-.278.251-.278.346 0l4.568 13.292M6 18.748h3M15 18.748h3M9.321 12.748h5.358"
    />
  );

export default SvgFontExpandHorizontal;
