import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentBrowserEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-browser-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="content-browser-edit_svg__a"
      d="M18.746 2.25h-16.5a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h18a1.5 1.5 0 001.5-1.5v-9M.746 6.75h12.75"
    />,
    <path
      className="content-browser-edit_svg__a"
      d="M22.782 6.465l-5.723 5.723-2.813.562.563-2.812 5.723-5.723a1.585 1.585 0 012.243 0l.007.006a1.588 1.588 0 010 2.244zM5.246 12.75h4.5M5.246 17.25h9.75"
    />
  );

export default SvgContentBrowserEdit;
