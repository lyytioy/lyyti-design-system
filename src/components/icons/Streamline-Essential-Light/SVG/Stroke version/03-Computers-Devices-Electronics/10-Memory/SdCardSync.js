import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSdCardSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sd-card-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="sd-card-sync_svg__a"
      d="M17.531 8.917v-3a1 1 0 00-.293-.707L12.824.793A1 1 0 0012.117.5H1.531a1 1 0 00-1 1v8h1v3h-1v10a1 1 0 001 1h8.457M4.531 3.5v5M7.531 3.5v5M10.531 3.5v5M13.531 5.5v4"
    />,
    <path
      className="sd-card-sync_svg__a"
      d="M15.03 18.5h-3.5V22M22.947 19.733A5.572 5.572 0 0112.133 18.5M20.03 16.5h3.5V13M12.113 15.267A5.572 5.572 0 0122.927 16.5"
    />
  );

export default SvgSdCardSync;
