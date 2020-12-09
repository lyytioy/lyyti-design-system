import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookBookmark = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-bookmark_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="book-bookmark_svg__a"
      d="M20.959 10.5l-2-2-2 2v-8a.5.5 0 01.5-.5h3a.5.5 0 01.5.5z"
    />,
    <path
      className="book-bookmark_svg__a"
      d="M15 3c-2 0-3 1.5-3 3.5 0-2-1-3.5-3-3.5H2a1 1 0 00-1 1v14a1 1 0 001 1h7a2.652 2.652 0 013 3 2.652 2.652 0 013-3h7a1 1 0 001-1V4a1 1 0 00-1-1h-1M12 6.5v15"
    />
  );

export default SvgBookBookmark;
