import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-question_svg__a"
      d="M10.5 23.5h-9a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.294L19.207 4.5a1 1 0 01.293.707V8.5M8.981 15.474A5 5 0 1114.4 9.487"
    />,
    <path className="time-clock-file-question_svg__a" d="M9.5 7.501v3h2" />,
    <circle
      className="time-clock-file-question_svg__a"
      cx={17.5}
      cy={17.501}
      r={6}
    />,
    <path
      className="time-clock-file-question_svg__a"
      d="M15.625 16.042a1.875 1.875 0 111.875 1.875v1M17.5 20.917a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgTimeClockFileQuestion;
