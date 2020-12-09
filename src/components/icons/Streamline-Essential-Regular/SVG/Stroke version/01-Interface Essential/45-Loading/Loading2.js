import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoading2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".loading-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="loading-2_svg__a"
      d="M8.172 1.497l1.59 3.75h4.5l1.589-3.75H8.172zM19.178 3.416l-2.45 3.254 2.253 3.895 4.042-.501-3.845-6.648zM23.014 13.984l-4.04-.521-2.272 3.884 2.435 3.266 3.877-6.629zM4.845 3.416l2.45 3.254-2.253 3.895L1 10.064l3.845-6.648zM1.009 13.984l4.04-.521 2.272 3.884-2.435 3.266-3.877-6.629zM15.851 22.497l-1.589-3.75h-4.5l-1.59 3.75h7.679z"
    />
  );

export default SvgLoading2;
