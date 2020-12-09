import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-share_svg__a"
      d="M8.25 20.25l.75-4.5M6 20.25h3M.75 12.75h14.383M9 15.75H3.75a3 3 0 01-3-3v-9a3 3 0 013-3h16.5a3 3 0 013 3v4.5"
    />,
    <circle className="monitor-share_svg__a" cx={13.5} cy={18} r={2.25} />,
    <circle className="monitor-share_svg__a" cx={21} cy={21} r={2.25} />,
    <circle className="monitor-share_svg__a" cx={21} cy={13.5} r={2.25} />,
    <path
      className="monitor-share_svg__a"
      d="M15.425 16.845l3.65-2.19M15.588 18.835l3.324 1.33"
    />
  );

export default SvgMonitorShare;
