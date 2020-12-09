import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyNoseBlow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-nose-blow_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-nose-blow_svg__a"
      d="M17.5 17.518l-1.053-2.105a.5.5 0 00-.894 0l-1.106 2.211a.5.5 0 01-.894 0l-1.106-2.211a.5.5 0 00-.894 0l-1.106 2.211a.5.5 0 01-.894 0l-.574-1.148M1.423 16.522a11.5 11.5 0 115.1 5.594"
    />,
    <path
      className="smiley-nose-blow_svg__a"
      d="M6.5 9.5h3L7 7M17.5 9.5h-3L17 7M4.623 23.405a1.236 1.236 0 001.61-.654l3.984-9.1A1.037 1.037 0 0010 12.5a.934.934 0 00-1.117-.155l-7.745 4.336a1.241 1.241 0 00-.418 1.791 1.5 1.5 0 001.145.639 1.385 1.385 0 000 2 1.385 1.385 0 002 0s-.679 1.696.758 2.294z"
    />
  );

export default SvgSmileyNoseBlow;
