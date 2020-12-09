import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoodHappy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mood-happy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="mood-happy_svg__a"
      d="M12.75.75a10.485 10.485 0 00-8.917 16.025L.75 23.25l6.475-3.083A10.5 10.5 0 1012.75.75z"
    />,
    <path
      className="mood-happy_svg__a"
      d="M15.75 13.5a3 3 0 01-6 0zM8.25 9.375a.375.375 0 10.375.375.375.375 0 00-.375-.375M17.25 9.375a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgMoodHappy;
