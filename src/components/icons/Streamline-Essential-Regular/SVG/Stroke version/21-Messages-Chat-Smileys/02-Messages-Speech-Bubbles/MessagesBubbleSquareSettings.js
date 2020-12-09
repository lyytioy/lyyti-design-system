import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-settings_svg__a"
      d="M8.223 19.9L3.75 23.25v-4.5h-1.5a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v6"
    />,
    <circle
      className="messages-bubble-square-settings_svg__a"
      cx={17.248}
      cy={16.5}
      r={1.5}
    />,
    <path
      className="messages-bubble-square-settings_svg__a"
      d="M18.522 10.7l.443 1.453a.993.993 0 001.173.681l1.473-.341a1.338 1.338 0 011.274 2.218l-1.031 1.111a1 1 0 000 1.362l1.031 1.111a1.338 1.338 0 01-1.274 2.218l-1.473-.341a.993.993 0 00-1.173.681l-.443 1.447a1.33 1.33 0 01-2.548 0l-.442-1.453a.994.994 0 00-1.174-.681l-1.472.341a1.338 1.338 0 01-1.274-2.218l1.03-1.111a1 1 0 000-1.362l-1.03-1.111a1.338 1.338 0 011.274-2.218l1.472.341a.994.994 0 001.174-.681l.442-1.453a1.33 1.33 0 012.548.006z"
    />
  );

export default SvgMessagesBubbleSquareSettings;
