import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentTriangle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-triangle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="instrument-triangle_svg__a"
      d="M15 6.469V2.253a1.467 1.467 0 112.934-.011 2.445 2.445 0 001.754 2.337M11.068 13.976L15 6.469l8.159 15.583a.8.8 0 01-.707 1.168H7.544a.8.8 0 01-.706-1.168l1.215-2.32M.75 8.22l10.875 10.875"
    />
  );

export default SvgInstrumentTriangle;
