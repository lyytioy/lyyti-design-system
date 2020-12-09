import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCompositionMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-man_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="composition-man_svg__a"
      d="M5.25 22.5a6.75 6.75 0 0113.5 0zM8.458 8.043a6.857 6.857 0 007.612 1.532"
    />,
    <circle className="composition-man_svg__a" cx={12} cy={10.125} r={4.125} />,
    <path
      className="composition-man_svg__a"
      d="M.75 5.249V3a1.5 1.5 0 011.5-1.5H4.5M4.5 15H2.25a1.5 1.5 0 01-1.5-1.5v-2.25M23.25 11.25v2.25a1.5 1.5 0 01-1.5 1.5H19.5M19.5 1.5h2.25a1.5 1.5 0 011.5 1.5v2.25"
    />
  );

export default SvgCompositionMan;
