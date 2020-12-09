import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentDholak = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-dholak_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="instrument-dholak_svg__a"
      d="M19.5 2.25a1.5 1.5 0 01-1.5 1.5H6a1.5 1.5 0 010-3h12a1.5 1.5 0 011.5 1.5zM18 3.75V9c0 4.142-2.686 7.5-6 7.5S6 13.142 6 9V3.75"
    />,
    <path
      className="instrument-dholak_svg__a"
      d="M12 16.5a3.122 3.122 0 00-2.962 2.135l-.88 2.641a1.5 1.5 0 001.423 1.974h4.838a1.5 1.5 0 001.423-1.974l-.88-2.641A3.122 3.122 0 0012 16.5zM6.026 9.705l1.583-2.771a1.5 1.5 0 012.644.073l.551 1.1a1.5 1.5 0 002.614.124l.811-1.3a1.5 1.5 0 012.651.2l1.1 2.558"
    />
  );

export default SvgInstrumentDholak;
