import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentBrowserEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-browser-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="content-browser-edit_svg__a"
      d="M23.5 11v8.5a2 2 0 01-2 2h-19a2 2 0 01-2-2v-15a2 2 0 012-2h19a2 2 0 012 2M.5 7.5H16"
    />,
    <path
      className="content-browser-edit_svg__a"
      d="M4.25 4.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M7.25 4.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M10.25 4.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M17 14.5l-3.5 1 1-3.5 5.982-5.982a1.768 1.768 0 012.5 2.5zM19.733 6.768l2.5 2.5M14.5 12l2.5 2.5M3.5 11.5H8M3.5 14.5H11M3.5 17.5h16"
    />
  );

export default SvgContentBrowserEdit;
