import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentPanFlute = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-pan-flute_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="instrument-pan-flute_svg__a"
      x={1}
      y={16.5}
      width={22}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="instrument-pan-flute_svg__a"
      d="M22 19.5v3a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3M18 16.5v-15a1 1 0 011-1h2a1 1 0 011 1v15M18 19.5v3a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3M14 16.5v-12a1 1 0 011-1h2a1 1 0 011 1v12M14 19.5v3a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3M10 16.5v-9a1 1 0 011-1h2a1 1 0 011 1v9M10 19.5v3a1 1 0 01-1 1H7a1 1 0 01-1-1v-3M6 16.5v-6a1 1 0 011-1h2a1 1 0 011 1v6M6 19.5v3a1 1 0 01-1 1H3a1 1 0 01-1-1v-3M2 16.5v-3a1 1 0 011-1h2a1 1 0 011 1v3"
    />
  );

export default SvgInstrumentPanFlute;
