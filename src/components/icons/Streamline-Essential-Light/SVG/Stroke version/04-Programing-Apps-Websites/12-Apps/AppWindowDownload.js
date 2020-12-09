import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-download_svg__a"
      x={0.5}
      y={2.004}
      width={23}
      height={20}
      rx={2}
      ry={2}
    />,
    <path
      className="app-window-download_svg__a"
      d="M.5 7.004h23M4 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M12.5 16.012v-6.008M15.5 13.004l-3 3.008-3-3.008M7.5 16.012V17.5a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-1.488"
    />
  );

export default SvgAppWindowDownload;
