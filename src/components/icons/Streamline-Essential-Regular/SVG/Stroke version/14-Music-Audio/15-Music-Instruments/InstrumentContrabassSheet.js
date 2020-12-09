import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentContrabassSheet = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-contrabass-sheet_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="instrument-contrabass-sheet_svg__a"
      d="M10.929 16.988a2.345 2.345 0 01-.614-4.043C10.576 10.81 8.412 8.87 6 9c-2.412-.13-4.577 1.81-4.315 3.945a2.345 2.345 0 01-.614 4.043.462.462 0 00-.321.446c.031 2.3 2.464 4.413 5.081 4.4h.338c2.617.01 5.05-2.1 5.081-4.4a.462.462 0 00-.321-.446zM6 13.5V.75M6 23.25V21M4.5 5.25h3M4.5 2.25h3M13.293 14.076a1.022 1.022 0 00.957.937l7.408-.029a1.022 1.022 0 00.951-.943l.629-4.5a1.258 1.258 0 00-.22-.911.917.917 0 00-.739-.4l-8.7.034a.919.919 0 00-.737.4 1.262 1.262 0 00-.212.913zM18 12.75v10.5M14.25 23.22L18 20.25l3.75 3"
    />
  );

export default SvgInstrumentContrabassSheet;
