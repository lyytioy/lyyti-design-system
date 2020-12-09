import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cloud-refresh_svg__a"
      d="M19.5 15.75h3.75v-4.5M23.061 15.75a6 6 0 10-1.121 5.243"
    />,
    <path
      className="cloud-refresh_svg__a"
      d="M22.484 8.25a4.867 4.867 0 00-6.873-1.385A7.5 7.5 0 108.25 15.75"
    />
  );

export default SvgCloudRefresh;
