import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="calendar-question_svg__a" cx={17.5} cy={17.501} r={6} />,
    <path
      className="calendar-question_svg__a"
      d="M15.625 16.042a1.875 1.875 0 111.875 1.875v1M17.5 20.917a.25.25 0 11-.25.25.25.25 0 01.25-.25M9.5 18.5h-8a1 1 0 01-1-1v-14a1 1 0 011-1h18a1 1 0 011 1V10M5.5.501v5M15.5.501v5M.5 7.501h20"
    />
  );

export default SvgCalendarQuestion;
