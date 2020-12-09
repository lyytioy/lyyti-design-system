import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentPiano = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-piano_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="instrument-piano_svg__a"
      d="M17 10.313h6M1 10.313h5.5M2 10.313v5a1 1 0 001 1h18a1 1 0 001-1v-5M2 14.313h20M3 16.313v7M21 16.313v7M14.5 19.313a1 1 0 01-1 1h-3a1 1 0 010-2h3a1 1 0 011 1zM12 20.313v3M11 23.313h2M2 10.313L17.645.832a1 1 0 011.373.337l1.3 2.138a1 1 0 01-.337 1.373 1.006 1.006 0 00-.358 1.348L22 10.313M16.149 4.313l3.351 6"
    />,
    <path
      className="instrument-piano_svg__a"
      d="M9.5 8.313h5a.5.5 0 01.5.5v5.5H9v-5.5a.5.5 0 01.5-.5zM11 10.313h2M11 12.313h2"
    />
  );

export default SvgInstrumentPiano;
