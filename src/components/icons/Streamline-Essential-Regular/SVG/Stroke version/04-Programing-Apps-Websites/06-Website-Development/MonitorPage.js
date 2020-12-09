import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorPage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-page_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-page_svg__a"
      d="M8.25 23.25h7.5M12 20.25v3M.75 16.5h22.5M21.75 3a1.5 1.5 0 011.5 1.5v14.25a1.5 1.5 0 01-1.5 1.5H2.25a1.5 1.5 0 01-1.5-1.5V4.5A1.5 1.5 0 012.25 3"
    />,
    <path
      className="monitor-page_svg__a"
      d="M5.25 13.5V2.25a1.5 1.5 0 011.5-1.5h10.5a1.5 1.5 0 011.5 1.5V13.5"
    />,
    <path
      className="monitor-page_svg__a"
      d="M8.25 6.75h3v3h-3zM5.25 3.75h13.5M14.25 6.75h1.5M14.25 9h1.5M8.25 12.75h7.5"
    />
  );

export default SvgMonitorPage;
