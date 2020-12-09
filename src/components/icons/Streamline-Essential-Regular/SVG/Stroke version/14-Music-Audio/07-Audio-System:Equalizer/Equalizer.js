import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEqualizer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".equalizer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="equalizer_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <circle className="equalizer_svg__a" cx={6} cy={15} r={1.5} />,
    <path className="equalizer_svg__a" d="M6 13.5v-6M6 20.25V16.5" />,
    <circle className="equalizer_svg__a" cx={12} cy={12} r={1.5} />,
    <path className="equalizer_svg__a" d="M12 10.5v-3M12 20.25V13.5" />,
    <circle className="equalizer_svg__a" cx={18} cy={15} r={1.5} />,
    <path
      className="equalizer_svg__a"
      d="M18 13.5v-6M18 20.25V16.5M3.75 4.5h16.5"
    />
  );

export default SvgEqualizer;
