import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVinylRecord = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vinyl-record_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="vinyl-record_svg__a" cx={12} cy={12} r={11.5} />,
    <circle className="vinyl-record_svg__a" cx={12} cy={12} r={2.5} />,
    <path
      className="vinyl-record_svg__a"
      d="M20.877 10.58a9 9 0 00-7.193-7.417M18.9 10.9a7 7 0 00-5.59-5.773M16.932 11.211a5 5 0 00-4-4.12M3.123 13.42a9 9 0 007.193 7.417M5.1 13.1a7 7 0 005.594 5.769M7.068 12.789a5 5 0 004 4.121M12 11.752a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgVinylRecord;
