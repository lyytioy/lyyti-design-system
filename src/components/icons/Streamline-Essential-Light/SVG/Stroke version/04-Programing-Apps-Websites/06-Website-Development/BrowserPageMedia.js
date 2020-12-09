import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserPageMedia = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".browser-page-media_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="browser-page-media_svg__a"
      x={0.5}
      y={2}
      width={23}
      height={20}
      rx={2}
      ry={2}
    />,
    <path
      className="browser-page-media_svg__a"
      d="M.5 7h23M4 4.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 4.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 4.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <rect
      className="browser-page-media_svg__a"
      x={3.5}
      y={11}
      width={7}
      height={7}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="browser-page-media_svg__a"
      d="M3.631 17.838l3.45-4.251a.5.5 0 01.817.058l2.491 4.169"
    />,
    <rect
      className="browser-page-media_svg__a"
      x={13.5}
      y={11}
      width={7}
      height={7}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="browser-page-media_svg__a"
      d="M13.631 17.838l3.45-4.251a.5.5 0 01.817.058l2.491 4.169"
    />
  );

export default SvgBrowserPageMedia;
