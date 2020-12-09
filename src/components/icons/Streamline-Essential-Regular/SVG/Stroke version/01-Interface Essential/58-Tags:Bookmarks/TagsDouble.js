import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsDouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-double_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="tags-double_svg__a"
      d="M4.5 1.06h6.879a1.5 1.5 0 011.06.439L22.5 11.56M9.129 4.06H3a1.5 1.5 0 00-1.5 1.5v6.128a1.5 1.5 0 00.439 1.061l9.75 9.75a1.5 1.5 0 002.122 0l6.128-6.129a1.5 1.5 0 000-2.121L10.189 4.5a1.5 1.5 0 00-1.06-.44z"
    />,
    <path
      className="tags-double_svg__a"
      d="M6 8.185a.375.375 0 10.375.375A.374.374 0 006 8.185"
    />
  );

export default SvgTagsDouble;
