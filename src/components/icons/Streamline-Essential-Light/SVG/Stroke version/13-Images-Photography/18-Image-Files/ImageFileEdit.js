import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="image-file-edit_svg__a" cx={7} cy={7.5} r={2} />,
    <path
      className="image-file-edit_svg__a"
      d="M14.767 13.927l-2.343-3.749a.5.5 0 00-.848 0L8.937 14.4l-1.075-1.722a.5.5 0 00-.848 0L4 17.5h6.687"
    />,
    <path
      className="image-file-edit_svg__a"
      d="M8.5 23.5h-7a1 1 0 01-1-1v-21a1 1 0 011-1h12.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V8.5M22.88 15.12l-7.63 7.63-3.75.75.75-3.75 7.63-7.63a2.114 2.114 0 012.992 0l.008.008a2.114 2.114 0 010 2.992z"
    />
  );

export default SvgImageFileEdit;
