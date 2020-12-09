import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIrisScanLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".iris-scan-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="iris-scan-lock_svg__a"
      d="M22.823 8.611a1.662 1.662 0 000-2.226C20.2 3.5 16.031.684 12 .751 7.969.684 3.8 3.5 1.179 6.385a1.663 1.663 0 000 2.226C3.742 11.435 7.9 14.317 12 14.249"
    />,
    <path
      className="iris-scan-lock_svg__a"
      d="M15.75 7.5A3.75 3.75 0 1112 3.75a3.75 3.75 0 013.75 3.75z"
    />,
    <rect
      className="iris-scan-lock_svg__a"
      x={14.25}
      y={15.75}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="iris-scan-lock_svg__a"
      d="M18.75 11.25a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM18.75 19.154a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgIrisScanLock;
