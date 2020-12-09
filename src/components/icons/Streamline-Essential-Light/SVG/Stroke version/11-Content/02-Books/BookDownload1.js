import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookDownload1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-download-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="book-download-1_svg__a"
      d="M12 14.5v9M14.5 21L12 23.5 9.5 21M7.542 19.5H6a2 2 0 01-2-2v-15"
    />,
    <path
      className="book-download-1_svg__a"
      d="M20 .5H6a2 2 0 000 4h13a1 1 0 011 1v13a1 1 0 01-1 1h-2.458M6 2.5h13"
    />
  );

export default SvgBookDownload1;
