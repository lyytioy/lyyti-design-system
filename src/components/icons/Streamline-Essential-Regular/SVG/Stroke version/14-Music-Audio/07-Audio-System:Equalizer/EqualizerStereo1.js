import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEqualizerStereo1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".equalizer-stereo-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="equalizer-stereo-1_svg__a"
      x={0.75}
      y={9.75}
      width={22.5}
      height={13.5}
      rx={1.449}
      ry={1.449}
    />,
    <path
      className="equalizer-stereo-1_svg__a"
      d="M8.25.75h-4.5a1.5 1.5 0 00-1.5 1.5v7.5h7.5v-7.5a1.5 1.5 0 00-1.5-1.5z"
    />,
    <circle className="equalizer-stereo-1_svg__a" cx={6} cy={5.25} r={1.5} />,
    <path
      className="equalizer-stereo-1_svg__a"
      d="M20.25.75h-4.5a1.5 1.5 0 00-1.5 1.5v7.5h7.5v-7.5a1.5 1.5 0 00-1.5-1.5z"
    />,
    <circle className="equalizer-stereo-1_svg__a" cx={18} cy={5.25} r={1.5} />,
    <path
      className="equalizer-stereo-1_svg__a"
      d="M4.125 20.25a.375.375 0 11-.375.375.375.375 0 01.375-.375M7.875 20.25a.375.375 0 11-.375.375.375.375 0 01.375-.375M3.75 12.75h16.5v4.5H3.75zM15.75 20.25h4.5M9.75 12.75v4.5"
    />
  );

export default SvgEqualizerStereo1;
