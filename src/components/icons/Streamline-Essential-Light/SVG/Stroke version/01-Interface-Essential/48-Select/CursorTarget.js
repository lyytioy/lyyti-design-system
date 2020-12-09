import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorTarget = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-target_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="cursor-target_svg__a" cx={12} cy={11.998} r={9} />,
    <circle className="cursor-target_svg__a" cx={12} cy={11.998} r={4.5} />,
    <path className="cursor-target_svg__a" d="M12 .998v22M23 11.998H1" />
  );

export default SvgCursorTarget;
