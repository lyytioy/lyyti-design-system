import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernMusicDjTape = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-music-dj-tape_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="modern-music-dj-tape_svg__a"
      d="M6.658 16.913A8.251 8.251 0 1116.783 6.257"
    />,
    <circle className="modern-music-dj-tape_svg__a" cx={9} cy={9} r={1.65} />,
    <path
      className="modern-music-dj-tape_svg__a"
      d="M4.308 7.971a4.961 4.961 0 013.374-3.46M18.179 10.062a1.557 1.557 0 10-2.576 1.75l1.667 2.454L14.4 11.4a1.557 1.557 0 00-2.2 2.2l2.9 2.905-2.557-1.36a1.557 1.557 0 10-1.462 2.749l3.667 1.95-1.419-.3a1.45 1.45 0 10-.591 2.84l4.426.782a4.061 4.061 0 003.669-1.111l1.4-1.4a3.467 3.467 0 000-4.9z"
    />
  );

export default SvgModernMusicDjTape;
