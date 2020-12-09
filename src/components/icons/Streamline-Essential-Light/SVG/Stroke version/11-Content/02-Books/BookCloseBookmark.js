import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookCloseBookmark = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-close-bookmark_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="book-close-bookmark_svg__a"
      d="M6 2.5H4a1 1 0 00-1 1v19a1 1 0 001 1h2M18 10.5l-2-2-2 2v-9a1 1 0 011-1h2a1 1 0 011 1z"
    />,
    <path
      className="book-close-bookmark_svg__a"
      d="M18 2.5h2a1 1 0 011 1v19a1 1 0 01-1 1H6v-21h8"
    />
  );

export default SvgBookCloseBookmark;
