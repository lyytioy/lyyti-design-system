import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserPageHierarchy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".browser-page-hierarchy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="browser-page-hierarchy_svg__a"
      x={1.5}
      y={2.25}
      width={21}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="browser-page-hierarchy_svg__a"
      d="M1.5 6.75h21M12 12.75v3"
    />,
    <rect
      className="browser-page-hierarchy_svg__a"
      x={10.5}
      y={9.75}
      width={3}
      height={3}
      rx={0.75}
      ry={0.75}
    />,
    <rect
      className="browser-page-hierarchy_svg__a"
      x={10.5}
      y={15.75}
      width={3}
      height={3}
      rx={0.75}
      ry={0.75}
    />,
    <rect
      className="browser-page-hierarchy_svg__a"
      x={4.5}
      y={15.75}
      width={3}
      height={3}
      rx={0.75}
      ry={0.75}
    />,
    <rect
      className="browser-page-hierarchy_svg__a"
      x={16.5}
      y={15.75}
      width={3}
      height={3}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="browser-page-hierarchy_svg__a"
      d="M10.5 11.25h-3a1.5 1.5 0 00-1.5 1.5v3M13.5 11.25h3a1.5 1.5 0 011.5 1.5v3"
    />
  );

export default SvgBrowserPageHierarchy;
