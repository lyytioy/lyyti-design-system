import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-search_svg__a"
      x={0.5}
      y={2.004}
      width={23}
      height={20}
      rx={2}
      ry={2}
    />,
    <path
      className="app-window-search_svg__a"
      d="M.5 7.004h23M4 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <circle className="app-window-search_svg__a" cx={11} cy={13.004} r={4} />,
    <path className="app-window-search_svg__a" d="M13.828 15.832L17 19.004" />
  );

export default SvgAppWindowSearch;
