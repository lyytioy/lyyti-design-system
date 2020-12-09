import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScaleHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".scale-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="scale-horizontal_svg__a"
      d="M1.5 18.748h21M4.5 14.248l-3 4.5 3 4.5M19.5 14.248l3 4.5-3 4.5M6 4.5V2.248a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 011.5 1.5V4.5M12 .748v11.25M9 11.998h6"
    />
  );

export default SvgScaleHorizontal;
