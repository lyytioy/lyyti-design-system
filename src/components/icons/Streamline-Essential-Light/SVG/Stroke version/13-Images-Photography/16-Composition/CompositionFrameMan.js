import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCompositionFrameMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-frame-man_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="composition-frame-man_svg__a" d="M23 23H1M23 1H1" />,
    <rect
      className="composition-frame-man_svg__a"
      x={1}
      y={4}
      width={22}
      height={16}
      rx={1}
      ry={1}
    />,
    <path
      className="composition-frame-man_svg__a"
      d="M19.457 20a1.991 1.991 0 00-1.066-1.118L14 17v-2s.866-.35.866-2.5c.684 0 .944-2-.007-2a2.63 2.63 0 00.44-2c-.491-2-5.331-2-5.822 0-2.066-.43-.422 1.712-.422 2-.981 0-.981 2 0 2 0 2.15.945 2.5.945 2.5v2l-4.391 1.882A1.991 1.991 0 004.543 20z"
    />
  );

export default SvgCompositionFrameMan;
