import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="cloud-lock_svg__a"
      x={14.25}
      y={15.75}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="cloud-lock_svg__a"
      d="M18.75 11.25a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM18.75 19.155a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="cloud-lock_svg__a"
      d="M23.1 9.659a4.868 4.868 0 00-7.486-2.794A7.5 7.5 0 108.25 15.75h3"
    />
  );

export default SvgCloudLock;
