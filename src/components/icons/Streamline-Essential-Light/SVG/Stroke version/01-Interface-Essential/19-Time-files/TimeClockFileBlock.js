import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileBlock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-block_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-block_svg__a"
      d="M10.5 23.5h-9a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.294L19.207 4.5a1 1 0 01.293.707V8.5M9 15.476a5 5 0 115.211-6.662"
    />,
    <path className="time-clock-file-block_svg__a" d="M9.5 7.501v3h2" />,
    <circle
      className="time-clock-file-block_svg__a"
      cx={17.5}
      cy={17.501}
      r={6}
    />,
    <path
      className="time-clock-file-block_svg__a"
      d="M13.258 21.743l8.485-8.485"
    />
  );

export default SvgTimeClockFileBlock;
