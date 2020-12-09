import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="wifi-question_svg__a"
      d="M3.032 7.6a8.946 8.946 0 0112.654 0M18.216 4.169a12.527 12.527 0 00-17.716 0M15.686 7.6a8.946 8.946 0 00-12.654 0M12.355 10.36a5.37 5.37 0 00-6.793.66M9.358 17.5a1.79 1.79 0 010-3.579"
    />,
    <circle className="wifi-question_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="wifi-question_svg__a"
      d="M15.625 16.042a1.875 1.875 0 111.875 1.875v1M17.5 20.917a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgWifiQuestion;
