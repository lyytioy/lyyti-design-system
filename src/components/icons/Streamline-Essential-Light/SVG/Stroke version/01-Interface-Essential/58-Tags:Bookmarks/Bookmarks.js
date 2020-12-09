import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookmarks = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bookmarks_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="bookmarks_svg__a"
      d="M18.5 22.741c0 .55-.318.681-.707.293L12 17.241l-5.793 5.793c-.389.388-.707.257-.707-.293v-21a1 1 0 011-1h11a1 1 0 011 1zM8.5.741v20M15.5.741v20"
    />
  );

export default SvgBookmarks;
