import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentTrumpet = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-trumpet_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="instrument-trumpet_svg__a"
      d="M.75 9.75H19.5M19.5 9.75l3.75 4.5v-9l-3.75 4.5zM8.25 6.75v12M11.25 6.75v12M.75 8.25v3"
    />,
    <rect
      className="instrument-trumpet_svg__a"
      x={3.75}
      y={9.75}
      width={12.75}
      height={6}
      rx={3}
      ry={3}
    />
  );

export default SvgInstrumentTrumpet;
