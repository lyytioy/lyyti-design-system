import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-file-search_svg__a"
      d="M8.25 20.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V6.75"
    />,
    <path
      className="video-file-search_svg__a"
      d="M6.241 12.678a.685.685 0 01-.991-.613v-4.63a.685.685 0 01.991-.613l4.631 2.316a.684.684 0 010 1.224z"
    />,
    <circle
      className="video-file-search_svg__a"
      cx={15.75}
      cy={15.75}
      r={5.25}
    />,
    <path className="video-file-search_svg__a" d="M23.25 23.25l-3.788-3.788" />
  );

export default SvgVideoFileSearch;
