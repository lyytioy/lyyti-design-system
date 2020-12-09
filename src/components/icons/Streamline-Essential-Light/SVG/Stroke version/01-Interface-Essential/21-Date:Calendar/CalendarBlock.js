import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarBlock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-block_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="calendar-block_svg__a" cx={17.5} cy={17.501} r={6} />,
    <path
      className="calendar-block_svg__a"
      d="M13.258 21.743l8.485-8.485M9.5 18.5h-8a1 1 0 01-1-1v-14a1 1 0 011-1h18a1 1 0 011 1V10M5.5.501v5M15.5.501v5M.5 7.501h20"
    />
  );

export default SvgCalendarBlock;
