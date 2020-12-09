import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-settings_svg__a"
      d="M21.76 8.253v-6a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h6M.76 5.253h21"
    />,
    <circle
      className="app-window-settings_svg__a"
      cx={17.26}
      cy={16.503}
      r={1.5}
    />,
    <path
      className="app-window-settings_svg__a"
      d="M18.534 10.7l.443 1.452a.992.992 0 001.173.681l1.472-.341a1.339 1.339 0 011.278 2.219l-1.031 1.111a1 1 0 000 1.362L22.9 18.3a1.339 1.339 0 01-1.275 2.218l-1.472-.341a.992.992 0 00-1.173.681l-.443 1.452a1.33 1.33 0 01-2.548 0l-.442-1.452a.993.993 0 00-1.174-.681l-1.472.341a1.338 1.338 0 01-1.277-2.218l1.03-1.112a1 1 0 000-1.362l-1.03-1.111a1.338 1.338 0 011.276-2.222l1.472.341a.993.993 0 001.174-.681l.442-1.452a1.33 1.33 0 012.546-.001z"
    />
  );

export default SvgAppWindowSettings;
