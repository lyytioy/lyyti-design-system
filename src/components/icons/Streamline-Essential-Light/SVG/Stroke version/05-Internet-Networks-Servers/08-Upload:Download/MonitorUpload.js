import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-upload_svg__a"
      d="M9 22.5h6M12 20.5v2M4 18.5h16M12 1.5v12M16 5.5l-4-4-4 4M15 10.5h3.5A1.5 1.5 0 0120 12v7a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 19v-7a1.5 1.5 0 011.5-1.5H9"
    />
  );

export default SvgMonitorUpload;
