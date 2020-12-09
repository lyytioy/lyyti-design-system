import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrightness1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".brightness-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="brightness-1_svg__a" cx={12.001} cy={12} r={3} />,
    <path
      className="brightness-1_svg__a"
      d="M12.001 1.5v2.25M12.001 20.25v2.25M22.501 12h-2.25M3.751 12h-2.25M19.425 4.576l-1.591 1.591M6.167 17.834l-1.591 1.591M19.425 19.425l-1.591-1.591M6.167 6.167L4.576 4.576"
    />
  );

export default SvgBrightness1;
