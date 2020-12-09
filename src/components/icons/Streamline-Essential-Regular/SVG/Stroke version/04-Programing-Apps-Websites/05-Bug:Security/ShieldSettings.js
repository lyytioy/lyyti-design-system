import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShieldSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shield-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="shield-settings_svg__a"
      d="M23.25 9.938A13.5 13.5 0 0112 23.25 13.5 13.5 0 01.75 9.938V2.25a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5z"
    />,
    <circle className="shield-settings_svg__a" cx={12} cy={10.5} r={1.5} />,
    <path
      className="shield-settings_svg__a"
      d="M13.274 4.7l.442 1.453a.994.994 0 001.174.681l1.472-.341a1.339 1.339 0 011.275 2.218l-1.031 1.108a1 1 0 000 1.362l1.031 1.111a1.339 1.339 0 01-1.275 2.218l-1.472-.341a.994.994 0 00-1.174.681l-.442 1.45a1.33 1.33 0 01-2.548 0l-.442-1.453a.994.994 0 00-1.174-.681l-1.472.341a1.339 1.339 0 01-1.275-2.218l1.031-1.111a1 1 0 000-1.362L6.363 8.708A1.339 1.339 0 017.638 6.49l1.472.341a.994.994 0 001.174-.681l.442-1.45a1.33 1.33 0 012.548 0z"
    />
  );

export default SvgShieldSettings;
