import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-edit_svg__a"
      d="M8.5 23.5h-7a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.294L19.207 4.5a1 1 0 01.293.707V8.5"
    />,
    <circle
      className="time-clock-file-edit_svg__a"
      cx={9.5}
      cy={10.501}
      r={5}
    />,
    <path
      className="time-clock-file-edit_svg__a"
      d="M9.5 7.501v3h2M22.88 15.12l-7.63 7.631-3.75.75.75-3.75 7.63-7.631a2.116 2.116 0 012.992 0l.008.009a2.113 2.113 0 010 2.991z"
    />
  );

export default SvgTimeClockFileEdit;
