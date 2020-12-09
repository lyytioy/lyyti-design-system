import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRadioAntenna2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".radio-antenna-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="radio-antenna-2_svg__a"
      d="M.5 13.5h23v9a1 1 0 01-1 1h-21a1 1 0 01-1-1v-9z"
    />,
    <circle className="radio-antenna-2_svg__a" cx={5.5} cy={18.5} r={3} />,
    <circle className="radio-antenna-2_svg__a" cx={18.5} cy={18.5} r={3} />,
    <path
      className="radio-antenna-2_svg__a"
      d="M13.6 19.5a4.967 4.967 0 01.321-3h-3.843a4.967 4.967 0 01.321 3zM23.5 10.5a1 1 0 00-1-1h-21a1 1 0 00-1 1v3h23zM2.5 11.5h13M17.5 11.5v2M21.5 11.5h-2M3.5 9.5v-1M5.5 9.5v-1M7.5 9.5v-1M21.5 8.5a1 1 0 00-2 0v1h2zM19.571 8.128L.5.5"
    />
  );

export default SvgRadioAntenna2;
