import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileSetting = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-setting_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="time-clock-file-setting_svg__a"
      cx={17.25}
      cy={16.5}
      r={1.5}
    />,
    <path
      className="time-clock-file-setting_svg__a"
      d="M18.524 10.7l.442 1.452a.993.993 0 001.174.681l1.472-.341a1.339 1.339 0 011.275 2.218l-1.031 1.111a1 1 0 000 1.362l1.031 1.111a1.339 1.339 0 01-1.275 2.219l-1.472-.342a1 1 0 00-1.174.681l-.442 1.448a1.33 1.33 0 01-2.548 0l-.442-1.453a1 1 0 00-1.174-.681l-1.472.342a1.339 1.339 0 01-1.275-2.219l1.031-1.111a1 1 0 000-1.362l-1.031-1.111a1.339 1.339 0 011.275-2.218l1.472.341a.993.993 0 001.174-.681l.442-1.452a1.33 1.33 0 012.548.005zM8.25 14.25a4.5 4.5 0 114.25-5.978"
    />,
    <path
      className="time-clock-file-setting_svg__a"
      d="M9.75 9.75h-1.5v-1.5"
    />,
    <path
      className="time-clock-file-setting_svg__a"
      d="M7.5 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.44l2.872 2.871a1.5 1.5 0 01.439 1.061V6.75"
    />
  );

export default SvgTimeClockFileSetting;
