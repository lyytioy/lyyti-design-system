import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-share_svg__a"
      d="M5.5 17.5h4M.5 11.5h17M8.5 14.5V16A1.5 1.5 0 017 17.5"
    />,
    <path
      className="monitor-share_svg__a"
      d="M20.5 9.5v-8a1 1 0 00-1-1h-18a1 1 0 00-1 1v12a1 1 0 001 1h10"
    />,
    <circle className="monitor-share_svg__a" cx={13.75} cy={18.25} r={2.25} />,
    <circle className="monitor-share_svg__a" cx={21.25} cy={21.25} r={2.25} />,
    <circle className="monitor-share_svg__a" cx={21.25} cy={13.75} r={2.25} />,
    <path
      className="monitor-share_svg__a"
      d="M15.675 17.095l3.65-2.19M15.838 19.085l3.324 1.33"
    />
  );

export default SvgMonitorShare;
