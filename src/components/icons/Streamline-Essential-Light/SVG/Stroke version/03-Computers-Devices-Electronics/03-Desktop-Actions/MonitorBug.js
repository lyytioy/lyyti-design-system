import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorBug = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-bug_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-bug_svg__a"
      d="M5.5 17.5h4M.5 11.5h9M8.5 14.5V16A1.5 1.5 0 017 17.5"
    />,
    <path
      className="monitor-bug_svg__a"
      d="M20.5 9.5v-8a1 1 0 00-1-1h-18a1 1 0 00-1 1v12a1 1 0 001 1h9M21.5 18.5a4 4 0 01-8 0v-2a4 4 0 018 0zM13.5 16.5h8M11.5 18.5h2M21.5 18.5h2M12.5 23.5l2.171-2.172M11.5 11.5l2.716 2.716M22.5 23.5l-2.172-2.172M23.5 11.5l-2.716 2.716"
    />
  );

export default SvgMonitorBug;
