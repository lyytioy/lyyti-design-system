import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComputerChipShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".computer-chip-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="computer-chip-shield_svg__a"
      x={4.5}
      y={4.5}
      width={15}
      height={15}
      rx={1}
      ry={1}
    />,
    <path
      className="computer-chip-shield_svg__a"
      d="M12 .5v4M7.5.5v4M16.5.5v4M.5 12h4M.5 16.5h4M.5 7.5h4M12 23.5v-4M16.5 23.5v-4M7.5 23.5v-4M23.5 12h-4M23.5 7.5h-4M23.5 16.5h-4"
    />,
    <rect
      className="computer-chip-shield_svg__a"
      x={6.5}
      y={6.5}
      width={11}
      height={11}
      rx={2}
      ry={2}
    />,
    <path
      className="computer-chip-shield_svg__a"
      d="M9 9.5c0 2.25.315 5.006 3 6 2.685-.994 3-3.75 3-6zM15 9.5l-5.178 4.173"
    />
  );

export default SvgComputerChipShield;
