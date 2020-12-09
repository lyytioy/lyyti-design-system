import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-edit_svg__a"
      d="M22.631 14.87L15 22.5l-3.75.75.75-3.75 7.631-7.63a2.115 2.115 0 012.991 0l.009.009a2.115 2.115 0 010 2.991zM8.25 20.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.44l2.872 2.871a1.5 1.5 0 01.439 1.061V8.25"
    />,
    <circle
      className="time-clock-file-edit_svg__a"
      cx={8.25}
      cy={9.75}
      r={4.5}
    />,
    <path className="time-clock-file-edit_svg__a" d="M9.75 9.75h-1.5v-1.5" />
  );

export default SvgTimeClockFileEdit;
