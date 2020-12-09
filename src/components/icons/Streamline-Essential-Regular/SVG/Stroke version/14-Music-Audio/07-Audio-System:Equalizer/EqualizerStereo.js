import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEqualizerStereo = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".equalizer-stereo_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="equalizer-stereo_svg__a"
      x={6.75}
      y={6.75}
      width={10.5}
      height={16.5}
      rx={1.5}
      ry={1.5}
    />,
    <circle className="equalizer-stereo_svg__a" cx={12} cy={18} r={2.25} />,
    <circle className="equalizer-stereo_svg__a" cx={12} cy={11.25} r={1.5} />,
    <path
      className="equalizer-stereo_svg__a"
      d="M.75 14.25h6M8.25 23.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v1.5M23.25 14.25h-6M15.75 23.25h6a1.5 1.5 0 001.5-1.5V2.25a1.5 1.5 0 00-1.5-1.5h-3a1.5 1.5 0 00-1.5 1.5v1.5"
    />
  );

export default SvgEqualizerStereo;
