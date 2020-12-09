import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSdCardQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sd-card-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="sd-card-question_svg__a"
      d="M17.5 8.917v-3a1 1 0 00-.293-.707L12.8.793A1 1 0 0012.088.5H1.5a1 1 0 00-1 1v8h1v3h-1v10a1 1 0 001 1h8.459M4.502 3.5v5M7.502 3.5v5M10.502 3.5v5M13.502 5.5v4"
    />,
    <circle className="sd-card-question_svg__a" cx={17.498} cy={17.5} r={6} />,
    <path
      className="sd-card-question_svg__a"
      d="M15.623 16.042a1.875 1.875 0 111.877 1.875v1M17.5 20.917a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgSdCardQuestion;
