import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEqualizerStereo = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".equalizer-stereo_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="equalizer-stereo_svg__a"
      x={7.5}
      y={8.5}
      width={9}
      height={14}
      rx={1}
      ry={1}
    />,
    <rect
      className="equalizer-stereo_svg__a"
      x={0.5}
      y={1.5}
      width={5}
      height={21}
      rx={1}
      ry={1}
    />,
    <rect
      className="equalizer-stereo_svg__a"
      x={18.5}
      y={1.5}
      width={5}
      height={21}
      rx={1}
      ry={1}
    />,
    <path className="equalizer-stereo_svg__a" d="M18.5 13.5h5M.5 13.5h5" />,
    <circle className="equalizer-stereo_svg__a" cx={12} cy={18} r={2.5} />,
    <path
      className="equalizer-stereo_svg__a"
      d="M3 5.241a.25.25 0 11-.25.25.251.251 0 01.25-.25M3 8.491a.25.25 0 11-.25.25.251.251 0 01.25-.25M21 5.241a.25.25 0 11-.25.25.251.251 0 01.25-.25M21 8.491a.25.25 0 11-.25.25.251.251 0 01.25-.25"
    />,
    <circle className="equalizer-stereo_svg__a" cx={12} cy={12} r={1} />
  );

export default SvgEqualizerStereo;
