import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserPageHierarchy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".browser-page-hierarchy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="browser-page-hierarchy_svg__a"
      x={0.5}
      y={2}
      width={23}
      height={20}
      rx={2}
      ry={2}
    />,
    <path
      className="browser-page-hierarchy_svg__a"
      d="M.5 7h23M4 4.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 4.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 4.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <rect
      className="browser-page-hierarchy_svg__a"
      x={4.5}
      y={16}
      width={3}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <circle
      className="browser-page-hierarchy_svg__a"
      cx={12}
      cy={11.5}
      r={1.5}
    />,
    <rect
      className="browser-page-hierarchy_svg__a"
      x={10.5}
      y={16}
      width={3}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="browser-page-hierarchy_svg__a"
      x={16.5}
      y={16}
      width={3}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="browser-page-hierarchy_svg__a"
      d="M13.5 12h3a1 1 0 011 1v3M10.5 12h-3a1 1 0 00-1 1v3M12 13v3"
    />
  );

export default SvgBrowserPageHierarchy;
