import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-upload_svg__a"
      x={1.51}
      y={2.253}
      width={21}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="app-window-upload_svg__a"
      d="M1.51 6.753h21M12.01 15.753v-6M15.01 12.753l-3-3-3 3M6.01 17.253a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5"
    />
  );

export default SvgAppWindowUpload;
