import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-edit_svg__a"
      d="M5.5 17.5h6M.5 11.5h17M8.5 14.5V16A1.5 1.5 0 017 17.5"
    />,
    <path
      className="monitor-edit_svg__a"
      d="M14.5 14.5h-13a1 1 0 01-1-1v-12a1 1 0 011-1h18a1 1 0 011 1v8M15.7 22.3l-4.2 1.2 1.2-4.2 7.179-7.179a2.121 2.121 0 013 3zM18.979 13.021l3 3M12.7 19.3l3 3"
    />
  );

export default SvgMonitorEdit;
