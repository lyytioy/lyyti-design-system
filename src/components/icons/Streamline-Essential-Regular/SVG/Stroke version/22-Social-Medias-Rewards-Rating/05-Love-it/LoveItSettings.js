import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="love-it-settings_svg__a"
      cx={17.247}
      cy={16.5}
      r={1.5}
    />,
    <path
      className="love-it-settings_svg__a"
      d="M18.522 10.7l.442 1.453a.993.993 0 001.173.681l1.473-.341a1.338 1.338 0 011.274 2.218l-1.03 1.111a1 1 0 000 1.362l1.03 1.111a1.338 1.338 0 01-1.274 2.215l-1.473-.341a.993.993 0 00-1.173.681l-.442 1.45a1.331 1.331 0 01-2.549 0l-.442-1.453a.993.993 0 00-1.173-.681l-1.473.341a1.338 1.338 0 01-1.274-2.218l1.03-1.111a1 1 0 000-1.362l-1.03-1.111a1.338 1.338 0 011.274-2.218l1.473.341a.993.993 0 001.173-.681l.442-1.453a1.331 1.331 0 012.549.006z"
    />,
    <path
      className="love-it-settings_svg__a"
      d="M8.223 16.5l-5.811-6.065a5.672 5.672 0 01-1.063-6.548 5.672 5.672 0 019.085-1.474L12 3.978l1.566-1.565a5.672 5.672 0 019.085 1.474A5.676 5.676 0 0122.632 9"
    />
  );

export default SvgLoveItSettings;
