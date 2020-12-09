import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserPageText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".browser-page-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="browser-page-text_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="browser-page-text_svg__a"
      d="M.5 5.5h23M4 2.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 2.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 2.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <rect
      className="browser-page-text_svg__a"
      x={3.5}
      y={8.5}
      width={17}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="browser-page-text_svg__a"
      x={3.5}
      y={13.5}
      width={3}
      height={7}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="browser-page-text_svg__a"
      d="M9.5 14.5h10M9.5 16.5h10M9.5 18.5h10M9.5 20.5h7"
    />
  );

export default SvgBrowserPageText;
