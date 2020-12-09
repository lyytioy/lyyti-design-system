import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsDouble1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-double-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="tags-double-1_svg__a"
      d="M4.5 1.353H12l10.5 10.5M9.129 4.353H3a1.5 1.5 0 00-1.5 1.5v6.128a1.5 1.5 0 00.439 1.061l9.161 9.163a1.5 1.5 0 002.465-.534L15 17.853l3.819-1.433a1.5 1.5 0 00.534-2.465l-9.164-9.163a1.5 1.5 0 00-1.06-.439zM6 8.478"
    />,
    <path
      className="tags-double-1_svg__a"
      d="M6 8.478a.375.375 0 10.375.375A.374.374 0 006 8.478"
    />
  );

export default SvgTagsDouble1;
