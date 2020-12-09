import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="calendar-download_svg__a" cx={17.5} cy={17.501} r={6} />,
    <path
      className="calendar-download_svg__a"
      d="M17.5 14.501v6M17.5 20.501l-2.25-2.25M17.5 20.501l2.25-2.25M9.5 18.5h-8a1 1 0 01-1-1v-14a1 1 0 011-1h18a1 1 0 011 1V10M5.5.501v5M15.5.501v5M.5 7.501h20"
    />
  );

export default SvgCalendarDownload;
