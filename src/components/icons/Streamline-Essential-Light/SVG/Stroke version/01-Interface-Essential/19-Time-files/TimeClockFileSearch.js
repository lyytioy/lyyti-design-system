import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-search_svg__a"
      d="M13.5 23.5h-12a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.294L19.207 4.5a1 1 0 01.293.707V9.5M9.5 15.5a5 5 0 115-5"
    />,
    <path className="time-clock-file-search_svg__a" d="M9.5 7.501v3h2" />,
    <circle
      className="time-clock-file-search_svg__a"
      cx={17.029}
      cy={17.03}
      r={4.529}
    />,
    <path
      className="time-clock-file-search_svg__a"
      d="M23.5 23.501l-3.248-3.248"
    />
  );

export default SvgTimeClockFileSearch;
