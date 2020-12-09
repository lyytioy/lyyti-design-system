import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSignalLoading = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".signal-loading_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="signal-loading_svg__a"
      d="M4.5 8.25L.75 12l3.75 3.75M19.5 8.25L23.25 12l-3.75 3.75M12 11.625a.375.375 0 10.375.375.375.375 0 00-.375-.375M16.5 11.625a.375.375 0 10.375.375.375.375 0 00-.375-.375M7.5 11.625a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgSignalLoading;
