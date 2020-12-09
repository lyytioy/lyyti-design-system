import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-file-search_svg__a"
      d="M9.5 23.5h-8a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5"
    />,
    <path
      className="video-file-search_svg__a"
      d="M7.636 8.214a.764.764 0 00-1.136.668v5.736a.764.764 0 001.136.668l4.971-3.059a.765.765 0 000-1.337z"
    />,
    <circle
      className="video-file-search_svg__a"
      cx={17.029}
      cy={17.029}
      r={4.529}
    />,
    <path className="video-file-search_svg__a" d="M23.5 23.5l-3.248-3.248" />
  );

export default SvgVideoFileSearch;
