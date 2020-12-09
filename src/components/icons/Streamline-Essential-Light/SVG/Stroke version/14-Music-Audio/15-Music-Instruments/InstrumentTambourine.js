import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentTambourine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-tambourine_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="instrument-tambourine_svg__a"
      d="M12.871 22.305a1.687 1.687 0 002.46.825A10.5 10.5 0 102.35 6.8 10.36 10.36 0 00.873 8.663a1.689 1.689 0 00.827 2.466"
    />,
    <path
      className="instrument-tambourine_svg__a"
      d="M2.006 12.8a1.5 1.5 0 011.735-2.4 23.846 23.846 0 019.859 9.854 1.5 1.5 0 11-2.68 1.35 20.779 20.779 0 00-8.525-8.525 1.5 1.5 0 01-.389-.279z"
    />,
    <circle
      className="instrument-tambourine_svg__a"
      cx={17.882}
      cy={7.117}
      r={3.5}
    />,
    <circle
      className="instrument-tambourine_svg__a"
      cx={19.882}
      cy={18.117}
      r={3.5}
    />,
    <circle
      className="instrument-tambourine_svg__a"
      cx={6.882}
      cy={4.117}
      r={3.5}
    />
  );

export default SvgInstrumentTambourine;
