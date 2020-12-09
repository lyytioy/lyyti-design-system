import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCompositionWindowMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-window-man_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="composition-window-man_svg__a"
      x={0.5}
      y={4.5}
      width={23}
      height={15}
      rx={4}
      ry={4}
    />,
    <path
      className="composition-window-man_svg__a"
      d="M19.457 19.5a1.991 1.991 0 00-1.066-1.118L14 16.5v-2s.866-.35.866-2.5c.684 0 .944-2-.007-2a2.63 2.63 0 00.44-2c-.491-2-5.331-2-5.822 0-2.066-.43-.422 1.712-.422 2-.981 0-.981 2 0 2 0 2.15.945 2.5.945 2.5v2l-4.391 1.882A1.991 1.991 0 004.543 19.5z"
    />
  );

export default SvgCompositionWindowMan;
