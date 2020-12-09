import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyAngel = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-angel_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-angel_svg__a"
      d="M9.5 9.664a2.359 2.359 0 00-4 0M14.5 9.664a2.359 2.359 0 014 0M6 15.556a6.5 6.5 0 0012 0"
    />,
    <circle className="smiley-angel_svg__a" cx={12} cy={12.056} r={11.5} />,
    <path
      className="smiley-angel_svg__a"
      d="M17.274 1.834c3.7.416 6.226 1.255 6.226 2.222 0 1.381-5.149 2.5-11.5 2.5S.5 5.437.5 4.056c0-.967 2.528-1.806 6.226-2.222"
    />
  );

export default SvgSmileyAngel;
