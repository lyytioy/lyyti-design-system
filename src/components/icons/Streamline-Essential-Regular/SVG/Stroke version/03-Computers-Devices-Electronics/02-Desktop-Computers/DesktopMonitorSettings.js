import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDesktopMonitorSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".desktop-monitor-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="desktop-monitor-settings_svg__a"
      d="M15.75 23.25h-7.5l.75-3h6l.75 3zM6 23.25h12M.75 17.25h22.5M23.25 14.25v3a3 3 0 01-3 3H3.75a3 3 0 01-3-3V6.75a3 3 0 013-3h4.5"
    />,
    <circle
      className="desktop-monitor-settings_svg__a"
      cx={17.25}
      cy={7.5}
      r={1.5}
    />,
    <path
      className="desktop-monitor-settings_svg__a"
      d="M18.524 1.7l.442 1.453a.994.994 0 001.174.681l1.472-.341a1.339 1.339 0 011.275 2.218l-1.031 1.108a1 1 0 000 1.362l1.031 1.111a1.339 1.339 0 01-1.275 2.218l-1.472-.341a.994.994 0 00-1.174.681l-.442 1.45a1.33 1.33 0 01-2.548 0l-.442-1.453a.994.994 0 00-1.174-.681l-1.472.341a1.339 1.339 0 01-1.275-2.218l1.031-1.111a1 1 0 000-1.362l-1.031-1.108a1.339 1.339 0 011.275-2.218l1.472.341a.994.994 0 001.174-.681l.442-1.45a1.33 1.33 0 012.548 0z"
    />
  );

export default SvgDesktopMonitorSettings;
