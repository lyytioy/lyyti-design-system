import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentFrenchHorn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-french-horn_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="instrument-french-horn_svg__a"
      d="M22.5 10.5c-1.641-3.517-6.478-4.837-13-5 6.522-.163 11.359-1.483 13-5zM8.5 23.5c-1.5-2-2-5.5-2-9 0 3.5-.5 7-2 9zM1.752 15.5h15.496M9 12.5h3l-1.5 3-1.5-3zM10.5 15.5v5.938M13 12.5h3l-1.5 3-1.5-3zM14.5 15.5v4.245"
    />,
    <path
      className="instrument-french-horn_svg__a"
      d="M7.369 21.213A8.007 8.007 0 0017.5 13.5a5 5 0 00-5-5h-1a5 5 0 00-5 5v1M9.5 5.5a8 8 0 00-3.685 15.1"
    />
  );

export default SvgInstrumentFrenchHorn;
