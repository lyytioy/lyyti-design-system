import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEqualizer1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".equalizer-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="equalizer-1_svg__a"
      d="M1.5.75v22.5M22.5.75v22.5M1.5 2.25h21v19.5h-21z"
    />,
    <circle className="equalizer-1_svg__a" cx={6} cy={15.75} r={1.5} />,
    <path className="equalizer-1_svg__a" d="M6 14.25V9M6 18.75v-1.5" />,
    <circle className="equalizer-1_svg__a" cx={12} cy={12.75} r={1.5} />,
    <path className="equalizer-1_svg__a" d="M12 11.25V9M12 18.75v-4.5" />,
    <circle className="equalizer-1_svg__a" cx={18} cy={15.75} r={1.5} />,
    <path
      className="equalizer-1_svg__a"
      d="M18 14.25V9M18 18.75v-1.5M4.5 5.25H12M17.25 5.25h2.25"
    />
  );

export default SvgEqualizer1;
