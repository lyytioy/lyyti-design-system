import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowSearchText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-search-text_svg__a,.app-window-search-text_svg__b{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}.app-window-search-text_svg__b{fill-rule:evenodd}"
        }
      </style>
    </defs>,
    <path
      className="app-window-search-text_svg__a"
      d="M4 2.754A.25.25 0 113.75 3 .25.25 0 014 2.754M.5 5.504h23"
    />,
    <path
      className="app-window-search-text_svg__b"
      d="M7 2.754A.25.25 0 116.75 3 .25.25 0 017 2.754M10 2.754A.25.25 0 119.75 3a.25.25 0 01.25-.25"
    />,
    <path
      className="app-window-search-text_svg__a"
      d="M10.5 20.5h-8a2 2 0 01-2-2v-16a2 2 0 012-2h19a2 2 0 012 2V18"
    />,
    <circle
      className="app-window-search-text_svg__a"
      cx={17}
      cy={17.504}
      r={4}
    />,
    <path
      className="app-window-search-text_svg__a"
      d="M19.828 20.332L23 23.504M3.5 8.504H7M8 12.504h3.5M10 8.504h6M3.5 16.504h6M18.5 8.504h2M3.5 12.504h2"
    />
  );

export default SvgAppWindowSearchText;
