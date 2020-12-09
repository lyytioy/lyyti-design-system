import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManSetting = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-setting_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-man-setting_svg__cls-1"
      cx={17.25}
      cy={7.5}
      r={1.5}
    />,
    <path
      className="single-man-setting_svg__cls-1"
      d="M18.524 1.7l.442 1.453a1 1 0 001.174.681l1.472-.342a1.339 1.339 0 011.275 2.219l-1.031 1.108a1 1 0 000 1.362l1.031 1.111a1.339 1.339 0 01-1.275 2.218l-1.472-.341a.993.993 0 00-1.174.681l-.442 1.45a1.33 1.33 0 01-2.548 0l-.442-1.452a.993.993 0 00-1.174-.681l-1.472.341a1.339 1.339 0 01-1.275-2.218l1.031-1.111a1 1 0 000-1.362l-1.031-1.109a1.339 1.339 0 011.275-2.219l1.472.342a1 1 0 001.174-.681l.442-1.45a1.33 1.33 0 012.548 0z"
    />,
    <circle
      className="single-man-setting_svg__cls-1"
      cx={5.25}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-man-setting_svg__cls-1"
      d="M5.25 8.25v6M7.5 23.25l.75-7.5h1.5v-3a4.5 4.5 0 00-9 0v3h1.5l.75 7.5z"
    />
  );

export default SvgSingleManSetting;
