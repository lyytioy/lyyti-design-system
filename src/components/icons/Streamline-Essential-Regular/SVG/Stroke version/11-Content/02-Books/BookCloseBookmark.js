import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookCloseBookmark = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-close-bookmark_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-close-bookmark_svg__a"
      d="M18 2.25h1.5a1.5 1.5 0 011.5 1.5v18a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-18a1.5 1.5 0 011.5-1.5H12M7.5 2.25v21"
    />,
    <path
      className="book-close-bookmark_svg__a"
      d="M18 12.75l-3-3-3 3V2.25a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5z"
    />
  );

export default SvgBookCloseBookmark;
