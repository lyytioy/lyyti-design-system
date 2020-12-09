import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorTarget2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-target-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cursor-target-2_svg__a"
      d="M12 .998v6M1 11.998h6M12 22.998v-6M23 11.998h-6"
    />,
    <circle className="cursor-target-2_svg__a" cx={12.001} cy={11.999} r={2} />
  );

export default SvgCursorTarget2;
