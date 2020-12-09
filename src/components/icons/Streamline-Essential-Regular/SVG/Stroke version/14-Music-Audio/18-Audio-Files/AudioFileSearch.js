import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="audio-file-search_svg__a"
      d="M8.25 20.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V6.75"
    />,
    <ellipse
      className="audio-file-search_svg__a"
      cx={6}
      cy={12.75}
      rx={2.25}
      ry={1.5}
    />,
    <path
      className="audio-file-search_svg__a"
      d="M8.25 12.75l-.295-5.929 1.062-.113A2.685 2.685 0 0111.6 7.99"
    />,
    <circle
      className="audio-file-search_svg__a"
      cx={15.75}
      cy={15.75}
      r={5.25}
    />,
    <path className="audio-file-search_svg__a" d="M23.25 23.25l-3.788-3.788" />
  );

export default SvgAudioFileSearch;
