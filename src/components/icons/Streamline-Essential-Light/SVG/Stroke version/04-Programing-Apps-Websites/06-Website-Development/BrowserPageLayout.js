import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserPageLayout = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".browser-page-layout_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="browser-page-layout_svg__a"
      x={0.5}
      y={2}
      width={23}
      height={20}
      rx={2}
      ry={2}
    />,
    <path
      className="browser-page-layout_svg__a"
      d="M.5 7h23M4 4.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 4.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 4.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M6.5 7v15M6.5 14h17"
    />
  );

export default SvgBrowserPageLayout;
