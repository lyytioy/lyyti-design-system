import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEqualizerStereoPlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".equalizer-stereo-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="equalizer-stereo-play_svg__a"
      d="M1.5 8.293h4a1 1 0 011 1v13h-5a1 1 0 01-1-1v-12a1 1 0 011-1zM6.5 12.293h11v10h-11z"
    />,
    <circle
      className="equalizer-stereo-play_svg__a"
      cx={3.5}
      cy={18.293}
      r={1}
    />,
    <circle
      className="equalizer-stereo-play_svg__a"
      cx={3.5}
      cy={13.293}
      r={1}
    />,
    <path
      className="equalizer-stereo-play_svg__a"
      d="M22.5 22.293h-5v-13a1 1 0 011-1h4a1 1 0 011 1v12a1 1 0 01-1 1z"
    />,
    <circle
      className="equalizer-stereo-play_svg__a"
      cx={20.5}
      cy={18.293}
      r={1}
    />,
    <circle
      className="equalizer-stereo-play_svg__a"
      cx={20.5}
      cy={13.293}
      r={1}
    />,
    <path
      className="equalizer-stereo-play_svg__a"
      d="M14.5 14.293h-5a1 1 0 000 2h5a1 1 0 000-2zM8.75 19.793a.25.25 0 11-.25.25.25.25 0 01.25-.25M15.25 19.793a.25.25 0 11-.25.25.25.25 0 01.25-.25M10.5 18.293h3M1.914 4.293a2 2 0 012.829 0M.5 2.879a4 4 0 015.657 0M22.086 4.293a2 2 0 00-2.829 0M23.5 2.879a4 4 0 00-5.657 0"
    />
  );

export default SvgEqualizerStereoPlay;
