import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgResponsiveDesignCursor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".responsive-design-cursor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="responsive-design-cursor_svg__a"
      d="M3.75 17.25h-1.5a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h7.5a1.5 1.5 0 011.5 1.5v1.5M.75 14.25h3M.75 3.75h10.5"
    />,
    <path
      className="responsive-design-cursor_svg__a"
      d="M8.25 17.25a1.5 1.5 0 01-1.5-1.5v-7.5a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5v4.5M9.75 6.75v9M20.25 6.75v3"
    />,
    <path
      className="responsive-design-cursor_svg__a"
      d="M13.1 13.461l2.9 9.262a.75.75 0 001.218.334L23 17.847a.75.75 0 00-.185-1.237l-8.683-4.052a.75.75 0 00-1.032.903z"
    />
  );

export default SvgResponsiveDesignCursor;
