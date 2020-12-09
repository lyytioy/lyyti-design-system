import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentFrenchHorn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-french-horn_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="instrument-french-horn_svg__a"
      d="M22.5 11.229C20.821 7.542 16.367 6.15 9.75 6c6.616-.2 11.1-1.555 12.75-5.253zM9.766 23.233a14.309 14.309 0 01-3.016-8.809 14.319 14.319 0 01-3 8.826zM1.629 15.003H17.37M12 12.003l.02 8.92"
    />,
    <path
      className="instrument-french-horn_svg__a"
      d="M8.4 21.17a7.968 7.968 0 001.319.106 7.838 7.838 0 007.81-7.866 4.9 4.9 0 00-4.919-4.881h-.979a4.9 4.9 0 00-4.881 4.92v.979"
    />,
    <path
      className="instrument-french-horn_svg__a"
      d="M9.75 6c-4.329.015-8.265 3.43-8.25 7.646a7.6 7.6 0 004.029 6.644M11.25 12.003h1.5"
    />
  );

export default SvgInstrumentFrenchHorn;
