import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pin_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="pin_svg__a"
      d="M9.914 14.085L.5 23.499M21.414 8.585a.707.707 0 001 0l.793-.793a1 1 0 000-1.414L17.621.792a1 1 0 00-1.414 0l-.793.793a.707.707 0 000 1 .707.707 0 010 1l-4.207 4.207a1 1 0 01-.707.293H7.328a1 1 0 00-.707.293l-.5.5a1 1 0 000 1.414l7.586 7.586a1 1 0 001.414 0l.5-.5a1 1 0 00.293-.707V13.5a1 1 0 01.293-.707l4.207-4.207a.707.707 0 011-.001z"
    />
  );

export default SvgPin;
