import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserCom = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".browser-com_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="browser-com_svg__a"
      x={0.5}
      y={3}
      width={23}
      height={18}
      rx={2}
      ry={2}
    />,
    <path
      className="browser-com_svg__a"
      d="M.5 8h23M4 5.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 5.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 5.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M5 16.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M9.5 12a2 2 0 00-2 2v1a2 2 0 002 2M12.5 12a1 1 0 00-1 1v3a1 1 0 002 0v-3a1 1 0 00-1-1zM18.5 17v-5L17 14.5 15.5 12v5"
    />
  );

export default SvgBrowserCom;
