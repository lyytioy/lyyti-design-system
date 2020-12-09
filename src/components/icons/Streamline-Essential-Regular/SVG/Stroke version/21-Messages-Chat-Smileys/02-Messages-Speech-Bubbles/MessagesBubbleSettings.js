import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="messages-bubble-settings_svg__a"
      cx={17.25}
      cy={16.5}
      r={1.5}
    />,
    <path
      className="messages-bubble-settings_svg__a"
      d="M18.524 10.7l.442 1.453a.994.994 0 001.174.681l1.472-.341a1.338 1.338 0 011.274 2.218l-1.03 1.111a1 1 0 000 1.362l1.03 1.111a1.338 1.338 0 01-1.274 2.218l-1.472-.341a.994.994 0 00-1.174.681l-.442 1.447a1.33 1.33 0 01-2.548 0l-.443-1.453a.993.993 0 00-1.173-.681l-1.473.341a1.338 1.338 0 01-1.274-2.218l1.03-1.111a1 1 0 000-1.362l-1.03-1.111a1.338 1.338 0 011.274-2.218l1.473.341a.993.993 0 001.173-.681l.443-1.453a1.33 1.33 0 012.548.006z"
    />,
    <path
      className="messages-bubble-settings_svg__a"
      d="M23.136 9.7a10.5 10.5 0 10-19.3 7.073L.75 23.25l6.474-3.084a10.675 10.675 0 001.056.577"
    />
  );

export default SvgMessagesBubbleSettings;
