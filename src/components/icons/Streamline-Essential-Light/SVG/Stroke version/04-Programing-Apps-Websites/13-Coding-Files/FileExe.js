import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileExe = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-exe_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-exe_svg__a"
      d="M20.5 23.5a1 1 0 001-1V6.478A5.975 5.975 0 0015.525.5H3.5a1 1 0 00-1 1v21a1 1 0 001 1z"
    />,
    <path
      className="file-exe_svg__a"
      d="M16.5.584V4.5a1 1 0 001 1h3.92M8.5 18.5h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2M5.5 15.504h2M18.5 18.5h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2M15.5 15.504h2M10.5 18.504l3-6M13.5 18.504l-3-6"
    />
  );

export default SvgFileExe;
