import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="monitor-lock_svg__a"
      x={14.5}
      y={15.501}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <circle className="monitor-lock_svg__a" cx={19} cy={19.563} r={1.25} />,
    <path
      className="monitor-lock_svg__a"
      d="M21.5 14a2.5 2.5 0 00-5 0v1.5h5zM5.5 17.5h7M.5 11.5h14M8.5 14.5V16A1.5 1.5 0 017 17.5"
    />,
    <path
      className="monitor-lock_svg__a"
      d="M12.5 14.5h-11a1 1 0 01-1-1v-12a1 1 0 011-1h18a1 1 0 011 1v8"
    />
  );

export default SvgMonitorLock;
