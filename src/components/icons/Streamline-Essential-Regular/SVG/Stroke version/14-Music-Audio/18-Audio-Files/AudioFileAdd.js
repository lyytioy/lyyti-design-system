import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="audio-file-add_svg__a" cx={17.25} cy={17.241} r={6} />,
    <path
      className="audio-file-add_svg__a"
      d="M17.25 14.241v6M14.25 17.241h6M8.25 20.259h-6a1.5 1.5 0 01-1.5-1.5v-16.5a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.44l2.872 2.871a1.5 1.5 0 01.439 1.061v3.128"
    />,
    <ellipse
      className="audio-file-add_svg__a"
      cx={6}
      cy={12.759}
      rx={2.25}
      ry={1.5}
    />,
    <path
      className="audio-file-add_svg__a"
      d="M8.25 12.759L7.955 6.83l1.062-.112A2.682 2.682 0 0111.6 8"
    />
  );

export default SvgAudioFileAdd;
