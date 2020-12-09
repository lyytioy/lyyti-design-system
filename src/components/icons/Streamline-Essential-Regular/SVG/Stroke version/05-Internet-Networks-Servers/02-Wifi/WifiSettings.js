import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="wifi-settings_svg__a"
      d="M5.96 11.284A5.254 5.254 0 0111 9.921M3.07 7.822a9.754 9.754 0 0111.854-1.036M.75 3.885a14.252 14.252 0 0117.85.007"
    />,
    <circle className="wifi-settings_svg__a" cx={17.25} cy={16.5} r={1.5} />,
    <path
      className="wifi-settings_svg__a"
      d="M18.524 10.7l.442 1.452a.993.993 0 001.174.681l1.472-.341a1.339 1.339 0 011.275 2.218l-1.031 1.111a1 1 0 000 1.362l1.031 1.111a1.339 1.339 0 01-1.275 2.219l-1.472-.342a.994.994 0 00-1.174.681l-.442 1.448a1.33 1.33 0 01-2.548 0l-.442-1.453a.994.994 0 00-1.174-.681l-1.472.342a1.339 1.339 0 01-1.275-2.219l1.031-1.111a1 1 0 000-1.362l-1.031-1.111a1.339 1.339 0 011.275-2.218l1.472.341a.993.993 0 001.174-.681l.442-1.452a1.33 1.33 0 012.548.005z"
    />
  );

export default SvgWifiSettings;
