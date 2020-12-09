import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserPageText2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".browser-page-text-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="browser-page-text-2_svg__a"
      x={1.5}
      y={2.25}
      width={21}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="browser-page-text-2_svg__a"
      d="M1.5 6.75h21M9 6.75v15M4.5 9.75H6M4.5 12.75H6M4.5 15.75H6M4.5 18.75H6"
    />,
    <rect
      className="browser-page-text-2_svg__a"
      x={12}
      y={9.75}
      width={7.5}
      height={9}
      rx={0.75}
      ry={0.75}
    />,
    <path className="browser-page-text-2_svg__a" d="M12 14.25h7.5" />
  );

export default SvgBrowserPageText2;
