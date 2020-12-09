import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="common-file-sync_svg__a"
      d="M15 18.5h-3.5V22M22.917 19.733A5.572 5.572 0 0112.1 18.5M20 16.5h3.5V13M12.083 15.267A5.572 5.572 0 0122.9 16.5"
    />,
    <path
      className="common-file-sync_svg__a"
      d="M8.5 23.5h-7a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5"
    />
  );

export default SvgCommonFileSync;
