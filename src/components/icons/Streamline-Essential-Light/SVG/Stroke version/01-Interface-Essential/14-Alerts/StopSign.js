import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgStopSign = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".stop-sign_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="stop-sign_svg__a"
      d="M16.781 15.29a3.685 3.685 0 01.434-1.738l1.463-2.747a1.024 1.024 0 00-1.746-1.071l-1.858 2.926 1.1-6.024a1.025 1.025 0 10-2-.432l-1.15 5.09V4.806a1.024 1.024 0 00-2.048 0V11.3L9.827 5.957a1.024 1.024 0 10-2 .431l1.105 7.639-2.04-1.781a1.025 1.025 0 00-1.384 1.512L9.1 18.539a3.079 3.079 0 002.224.951h2.39c2.423-.001 3.067-1.896 3.067-4.2z"
    />,
    <path
      className="stop-sign_svg__a"
      d="M8.244 23.5a2.794 2.794 0 01-1.709-.7l-5.326-5.31a2.771 2.771 0 01-.709-1.7V8.332a2.81 2.81 0 01.7-1.712l5.341-5.408A2.759 2.759 0 018.244.5H15.7a2.778 2.778 0 011.706.708l5.39 5.414a2.794 2.794 0 01.704 1.71v7.453a2.75 2.75 0 01-.712 1.7L17.41 22.8a2.81 2.81 0 01-1.712.7z"
    />
  );

export default SvgStopSign;
