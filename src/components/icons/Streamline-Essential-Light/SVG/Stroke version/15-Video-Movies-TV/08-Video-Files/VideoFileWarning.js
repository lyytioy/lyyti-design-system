import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-file-warning_svg__a"
      d="M10 23.5H1.5a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V10"
    />,
    <path
      className="video-file-warning_svg__a"
      d="M7.636 8.214a.764.764 0 00-1.136.668v5.736a.764.764 0 001.136.668l4.971-3.059a.765.765 0 000-1.337zM18.5 19v-2.5M23.376 22.021l-4-8a1 1 0 00-1.756 0l-4 8a1 1 0 00.88 1.479h8a1 1 0 00.876-1.479z"
    />,
    <path
      className="video-file-warning_svg__a"
      d="M18.5 20.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgVideoFileWarning;
