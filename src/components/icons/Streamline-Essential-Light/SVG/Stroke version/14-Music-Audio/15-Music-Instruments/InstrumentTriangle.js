import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentTriangle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-triangle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="instrument-triangle_svg__a"
      d="M11.66 3.5V2a1.5 1.5 0 013 0 2.5 2.5 0 002.5 2.5h.5M15.403 17.757L22.66 10.5M18.16 19.5h2.6a1 1 0 00.824-1.567L19.913 15.5M17.847 12.5l-6.187-9L1.522 17.925A1 1 0 002.34 19.5h6.32M12.221 23.061a1.5 1.5 0 11-2.121-2.122l3.889-3.889a.5.5 0 01.707 0l1.414 1.414a.5.5 0 010 .708z"
    />
  );

export default SvgInstrumentTriangle;
