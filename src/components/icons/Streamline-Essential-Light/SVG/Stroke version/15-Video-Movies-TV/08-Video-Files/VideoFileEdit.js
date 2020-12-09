import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-file-edit_svg__a"
      d="M22.88 15.12l-7.63 7.63-3.75.75.75-3.75 7.63-7.63a2.114 2.114 0 012.992 0l.008.008a2.114 2.114 0 010 2.992zM8.5 23.5h-7a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8"
    />,
    <path
      className="video-file-edit_svg__a"
      d="M7.636 8.214a.764.764 0 00-1.136.668v5.736a.764.764 0 001.136.668l4.971-3.059a.765.765 0 000-1.337z"
    />
  );

export default SvgVideoFileEdit;
