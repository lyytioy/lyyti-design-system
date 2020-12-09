import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentHarp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-harp_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="instrument-harp_svg__a" d="M1.536.75h3v22.5h-3z" />,
    <path
      className="instrument-harp_svg__a"
      d="M4.536 1.5a26.756 26.756 0 0016.069.527 1.5 1.5 0 011.855 1.567c-.645 8.8-5.427 15.648-14.347 19.419a3.02 3.02 0 01-1.167.237h-2.41"
    />,
    <path
      className="instrument-harp_svg__a"
      d="M4.536 5.25a16.681 16.681 0 0011.671.832A1.5 1.5 0 0118 8.034a19.956 19.956 0 01-9.772 11.1A3 3 0 016.8 19.5H4.536M7.536 6.31v13.098M10.536 6.734v10.99M13.536 6.605v8.607"
    />
  );

export default SvgInstrumentHarp;
