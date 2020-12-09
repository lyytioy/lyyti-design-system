import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSearchText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".search-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="search-text_svg__a"
      d="M16.718 16.716A9.5 9.5 0 1119.5 10a9.474 9.474 0 01-2.782 6.718M16.716 16.714l6.784 6.784"
    />,
    <path
      className="search-text_svg__a"
      d="M4.5 11.5v-2a1 1 0 011-1h10a1 1 0 011 1v2M10.5 21.498v2M10.5 8.498v9M8 23.498h5"
    />
  );

export default SvgSearchText;
