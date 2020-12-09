import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrightness = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".brightness_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="brightness_svg__a" cx={12.001} cy={12} r={4.5} />,
    <path
      className="brightness_svg__a"
      d="M12.001 1.5v3M12.001 19.5v3M22.501 12h-3M4.501 12h-3M19.425 4.576l-2.121 2.121M6.697 17.304l-2.121 2.121M19.425 19.425l-2.121-2.121M6.697 6.697L4.576 4.576"
    />
  );

export default SvgBrightness;
