import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cloud-warning_svg__a"
      d="M17.25 20.25a.375.375 0 10.375.375.375.375 0 00-.375-.375M17.25 18v-3"
    />,
    <path
      className="cloud-warning_svg__a"
      d="M23.063 20.683a1.774 1.774 0 01-1.587 2.567h-8.452a1.773 1.773 0 01-1.586-2.567l4.225-8.452a1.774 1.774 0 013.174 0z"
    />,
    <path
      className="cloud-warning_svg__a"
      d="M22.829 12.86a4.871 4.871 0 00-7.218-5.995A7.5 7.5 0 108.25 15.75h2.25"
    />
  );

export default SvgCloudWarning;
