import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPaperWrite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".paper-write_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="paper-write_svg__a"
      d="M13.045 18.636l-3.712.53.53-3.712 9.546-9.546a2.25 2.25 0 013.182 3.182z"
    />,
    <rect
      className="paper-write_svg__a"
      x={5.25}
      y={0.749}
      width={7.5}
      height={3}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="paper-write_svg__a"
      d="M12.75 2.249h3a1.5 1.5 0 011.5 1.5M17.25 18.749v3a1.5 1.5 0 01-1.5 1.5H2.25a1.5 1.5 0 01-1.5-1.5v-18a1.5 1.5 0 011.5-1.5h3M5.25 8.249h7.5M5.25 12.749h3"
    />
  );

export default SvgPaperWrite;
