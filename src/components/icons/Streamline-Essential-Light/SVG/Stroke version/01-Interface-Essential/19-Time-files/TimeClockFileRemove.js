import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-remove_svg__a"
      d="M9.5 23.5h-8a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.294L19.207 4.5a1 1 0 01.293.707V8.5M9.013 15.477a5 5 0 115.382-6"
    />,
    <path className="time-clock-file-remove_svg__a" d="M9.5 7.501v3h2" />,
    <circle
      className="time-clock-file-remove_svg__a"
      cx={17.5}
      cy={17.501}
      r={6}
    />,
    <path
      className="time-clock-file-remove_svg__a"
      d="M19.621 15.38l-4.242 4.242M19.621 19.622l-4.242-4.242"
    />
  );

export default SvgTimeClockFileRemove;
