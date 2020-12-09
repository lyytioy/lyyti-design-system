import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorUser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-user_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-user_svg__a"
      d="M8.25 22.503h7.5M12 19.503v3M.75 15.753h22.5M19.5 1.5h2.25a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-1.5 1.5H2.25A1.5 1.5 0 01.75 18V3a1.5 1.5 0 011.5-1.5h3"
    />,
    <circle className="monitor-user_svg__a" cx={12} cy={4.128} r={2.625} />,
    <path className="monitor-user_svg__a" d="M7.5 12a4.5 4.5 0 019 0z" />
  );

export default SvgMonitorUser;
