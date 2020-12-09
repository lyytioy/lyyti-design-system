import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAndroidSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".android-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="android-settings_svg__a"
      cx={17.25}
      cy={16.503}
      r={1.5}
    />,
    <path
      className="android-settings_svg__a"
      d="M18.524 10.7l.442 1.452a.993.993 0 001.174.681l1.472-.341a1.339 1.339 0 011.275 2.218l-1.031 1.111a1 1 0 000 1.362l1.031 1.117a1.339 1.339 0 01-1.275 2.218l-1.472-.341a.993.993 0 00-1.174.681l-.442 1.452a1.33 1.33 0 01-2.548 0l-.442-1.452a.993.993 0 00-1.174-.681l-1.472.341a1.339 1.339 0 01-1.275-2.218l1.031-1.112a1 1 0 000-1.362l-1.031-1.111a1.339 1.339 0 011.275-2.218l1.472.341a.993.993 0 001.174-.681l.442-1.452a1.33 1.33 0 012.548-.005zM9.75 11.253h-6v10.5a1.5 1.5 0 001.5 1.5h4.5M19.94 8.257A8.251 8.251 0 003.75 10.5v.75"
    />,
    <path
      className="android-settings_svg__a"
      d="M8.625 6.753a.375.375 0 11-.375.375.375.375 0 01.375-.375M15.375 6.753a.375.375 0 11-.375.375.375.375 0 01.375-.375M7.359 3.682L5.25.753M16.641 3.682L18.75.753M3.75 11.253a3 3 0 00-3 3v6"
    />
  );

export default SvgAndroidSettings;
