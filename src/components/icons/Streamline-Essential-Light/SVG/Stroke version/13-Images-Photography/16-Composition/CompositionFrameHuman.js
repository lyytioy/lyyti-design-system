import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCompositionFrameHuman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-frame-human_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="composition-frame-human_svg__a" d="M23 23H1M23 1H1" />,
    <rect
      className="composition-frame-human_svg__a"
      x={1}
      y={4}
      width={22}
      height={16}
      rx={1}
      ry={1}
    />,
    <path
      className="composition-frame-human_svg__a"
      d="M5.5 20a7.089 7.089 0 01.565-2.7c.4-.8 2.063-1.35 4.153-2.124.565-.209.472-1.684.222-1.96a4.167 4.167 0 01-1.085-3.231A2.725 2.725 0 0112 7a2.725 2.725 0 012.645 2.985 4.167 4.167 0 01-1.085 3.232c-.25.276-.343 1.751.222 1.96 2.09.774 3.754 1.327 4.153 2.124A7.089 7.089 0 0118.5 20z"
    />
  );

export default SvgCompositionFrameHuman;
