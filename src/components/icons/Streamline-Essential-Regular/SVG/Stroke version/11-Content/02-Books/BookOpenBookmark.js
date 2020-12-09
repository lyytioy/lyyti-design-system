import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookOpenBookmark = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-open-bookmark_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-open-bookmark_svg__a"
      d="M12 22.8V5.387S9.545 2.66 1.268 2.55A.514.514 0 00.9 2.7a.526.526 0 00-.152.37v16.374a.516.516 0 00.5.52C9.543 20.071 12 22.8 12 22.8M9 11.855A21.258 21.258 0 003.74 10.8M9 16.05A21.311 21.311 0 003.74 15M15 11.855a21.258 21.258 0 015.26-1.055M15 16.05A21.311 21.311 0 0120.26 15"
    />,
    <path
      className="book-open-bookmark_svg__a"
      d="M20.26 2.67c.76-.066 1.582-.108 2.472-.12a.514.514 0 01.366.15.526.526 0 01.152.37v16.374a.516.516 0 01-.5.52C14.457 20.071 12 22.8 12 22.8M12 22.8V5.387s1.143-1.27 4.5-2.111"
    />,
    <path
      className="book-open-bookmark_svg__a"
      d="M20.25 7.8V1.2a24.031 24.031 0 00-3.75.6v6l1.875-1.5z"
    />
  );

export default SvgBookOpenBookmark;
