import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHourglass = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hourglass_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="hourglass_svg__a"
      d="M18.5 5.5a6.5 6.5 0 01-13 0v-5h13z"
    />,
    <path
      className="hourglass_svg__a"
      d="M18.5 18.5a6.5 6.5 0 00-13 0v5h13zM3.5.501h17M3.5 23.501h17"
    />,
    <path
      className="hourglass_svg__a"
      d="M5.5 19.501H9l3-3 3 3h3.5M6.896 9.501h10.208"
    />
  );

export default SvgHourglass;
