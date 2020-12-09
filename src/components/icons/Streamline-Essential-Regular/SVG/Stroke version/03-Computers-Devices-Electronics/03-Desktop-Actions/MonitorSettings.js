import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-settings_svg__a"
      d="M8.25 20.25l.75-4.5M6 20.25h2.25M.75 12.75h7.633M9 15.75H3.75a3 3 0 01-3-3v-9a3 3 0 013-3h16.5a3 3 0 013 3V9"
    />,
    <circle className="monitor-settings_svg__a" cx={17.25} cy={16.5} r={1.5} />,
    <path
      className="monitor-settings_svg__a"
      d="M18.524 10.7l.442 1.453a.994.994 0 001.174.681l1.472-.341a1.339 1.339 0 011.275 2.218l-1.031 1.111a1 1 0 000 1.362l1.031 1.111a1.339 1.339 0 01-1.275 2.218l-1.472-.341a.994.994 0 00-1.174.681l-.442 1.447a1.33 1.33 0 01-2.548 0l-.442-1.453a.994.994 0 00-1.174-.681l-1.472.341a1.339 1.339 0 01-1.275-2.218l1.031-1.111a1 1 0 000-1.362l-1.031-1.111a1.339 1.339 0 011.275-2.218l1.472.341a.994.994 0 001.174-.681l.442-1.453a1.33 1.33 0 012.548.006z"
    />
  );

export default SvgMonitorSettings;
