import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowLink = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-link_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="app-window-link_svg__a"
      d="M20.121 18.882l2.121-2.121a2 2 0 10-2.828-2.829l-2.121 2.122M15.878 17.468l-2.12 2.121a2 2 0 002.828 2.83l2.121-2.119M19.768 16.408l-3.536 3.535M2 5.176h20M5 2.926a.25.25 0 10.25.25.25.25 0 00-.25-.25M7 2.926a.25.25 0 10.25.25.25.25 0 00-.25-.25M9 2.926a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="app-window-link_svg__a"
      d="M10 17.176H4a2 2 0 01-2-2v-12a2 2 0 012-2h16a2 2 0 012 2v6"
    />
  );

export default SvgAppWindowLink;
