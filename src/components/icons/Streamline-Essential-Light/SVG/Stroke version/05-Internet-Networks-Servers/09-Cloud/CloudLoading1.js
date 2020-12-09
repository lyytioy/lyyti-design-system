import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudLoading1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-loading-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-loading-1_svg__a"
      d="M23.5 9.5a4.991 4.991 0 00-5.18-4.991A6.989 6.989 0 005.021 7.08 3.75 3.75 0 00.5 10.75c0 3.81 4 3.75 4 3.75H19s4.5-.586 4.5-5zM22.5 20.5a3 3 0 01-3 3h-15a3 3 0 010-6h15a3 3 0 013 3zM5.735 17.5l-2.39 5.77M8.735 17.5l-2.485 6"
    />
  );

export default SvgCloudLoading1;
