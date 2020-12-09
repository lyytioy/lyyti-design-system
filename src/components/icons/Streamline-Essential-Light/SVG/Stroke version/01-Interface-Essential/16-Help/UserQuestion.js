import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUserQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".user-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="user-question_svg__a"
      d="M15.5 23.5v-3h1a3 3 0 003-3v-3h2.813a.5.5 0 00.473-.652c-1.874-5.8-3.231-12.035-9.42-13.167A9.99 9.99 0 001.542 9.337 9.726 9.726 0 005.5 18.112V23.5"
    />,
    <path
      className="user-question_svg__a"
      d="M8.5 8a3 3 0 113.759 2.9.966.966 0 00-.759.92v1.68M11.5 15.5a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgUserQuestion;
