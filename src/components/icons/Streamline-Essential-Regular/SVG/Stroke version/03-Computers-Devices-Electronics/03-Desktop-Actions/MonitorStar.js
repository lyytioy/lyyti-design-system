import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-star_svg__a"
      d="M8.25 20.25l.75-4.5M6 20.25h3.75M.75 12.75h12M9 15.75H3.75a3 3 0 01-3-3v-9a3 3 0 013-3h16.5a3 3 0 013 3v9"
    />,
    <path
      className="monitor-star_svg__a"
      d="M17.952 11.68l1.538 4.073h3a.735.735 0 01.51 1.283l-2.6 1.813 1.44 3.313a.785.785 0 01-1.117.982l-3.48-1.961-3.481 1.961a.785.785 0 01-1.117-.982l1.44-3.313-2.6-1.813A.734.734 0 0112 15.753h3l1.54-4.073a.8.8 0 011.412 0z"
    />
  );

export default SvgMonitorStar;
