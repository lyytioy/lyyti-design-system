import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileBlock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-block_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="time-clock-file-block_svg__a"
      cx={17.25}
      cy={17.25}
      r={6}
    />,
    <path
      className="time-clock-file-block_svg__a"
      d="M13.008 21.492l8.484-8.484M8.25 14.25a4.5 4.5 0 114.25-5.978"
    />,
    <path className="time-clock-file-block_svg__a" d="M9.75 9.75h-1.5v-1.5" />,
    <path
      className="time-clock-file-block_svg__a"
      d="M7.5 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.44l2.872 2.871a1.5 1.5 0 01.439 1.061V7.5"
    />
  );

export default SvgTimeClockFileBlock;
