import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileHqx = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-hqx_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-hqx_svg__a"
      d="M20.5 23.5a1 1 0 001-1V6.478A5.975 5.975 0 0015.525.5H3.5a1 1 0 00-1 1v21a1 1 0 001 1z"
    />,
    <path
      className="file-hqx_svg__a"
      d="M16.5.584V4.5a1 1 0 001 1h3.92M8.5 12.504v6M5.5 18.504v-6M5.5 15.504h3M13.5 16.5a1.5 1.5 0 01-3 0V14a1.5 1.5 0 113 0zM13.5 19.504l-2-1.586M15.5 18.504l3-6M18.5 18.504l-3-6"
    />
  );

export default SvgFileHqx;
