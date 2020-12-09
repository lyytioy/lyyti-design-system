import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserPageMedia = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".browser-page-media_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="browser-page-media_svg__a"
      x={1.5}
      y={2.25}
      width={21}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="browser-page-media_svg__a" d="M1.5 6.75h21" />,
    <rect
      className="browser-page-media_svg__a"
      x={7.5}
      y={9.75}
      width={9}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="browser-page-media_svg__a"
      d="M7.5 17.25l4.5-4.5 4.5 4.5"
    />
  );

export default SvgBrowserPageMedia;
