import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonStop1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-stop-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="button-stop-1_svg__a" cx={12} cy={11.998} r={11.25} />,
    <rect
      className="button-stop-1_svg__a"
      x={8.25}
      y={8.248}
      width={7.5}
      height={7.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgButtonStop1;
