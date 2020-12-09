import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="server-settings_svg__a"
      d="M5.251 4.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M5.251 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="server-settings_svg__a"
      d="M12.689 9.75H5.251a4.5 4.5 0 010-9h12a4.5 4.5 0 013.388 7.462M8.251 18.75h-3a4.5 4.5 0 010-9H12M10.501 5.25h6.75"
    />,
    <circle className="server-settings_svg__a" cx={17.251} cy={16.5} r={1.5} />,
    <path
      className="server-settings_svg__a"
      d="M18.525 10.7l.442 1.453a.994.994 0 001.174.681l1.472-.341a1.338 1.338 0 011.274 2.218l-1.03 1.111a1 1 0 000 1.362l1.03 1.111a1.338 1.338 0 01-1.274 2.218l-1.472-.341a.994.994 0 00-1.174.681l-.442 1.447a1.33 1.33 0 01-2.548 0l-.443-1.453a.993.993 0 00-1.173-.681l-1.473.341a1.338 1.338 0 01-1.274-2.218l1.031-1.111a1 1 0 000-1.362l-1.031-1.111a1.338 1.338 0 011.274-2.218l1.473.341a.993.993 0 001.173-.681l.443-1.453a1.33 1.33 0 012.548.006z"
    />
  );

export default SvgServerSettings;
