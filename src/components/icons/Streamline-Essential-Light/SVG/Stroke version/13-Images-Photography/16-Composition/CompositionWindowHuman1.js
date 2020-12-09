import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCompositionWindowHuman1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-window-human-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="composition-window-human-1_svg__a"
      x={0.5}
      y={4.5}
      width={23}
      height={15}
      rx={4}
      ry={4}
      transform="rotate(90 12 12)"
    />,
    <circle
      className="composition-window-human-1_svg__a"
      cx={12}
      cy={5.75}
      r={3}
    />,
    <path
      className="composition-window-human-1_svg__a"
      d="M12 21.25h1.5l.5-4.5h2v-2.5a4 4 0 00-8 0v2.5h2l.5 4.5H12"
    />
  );

export default SvgCompositionWindowHuman1;
