import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentPianoKeys = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-piano-keys_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="instrument-piano-keys_svg__a"
      d="M5.5 4h-4a1 1 0 00-1 1v16a1 1 0 001 1h6v-8M7.5 22h9M14.5 4h-5M16.5 14v8h6a1 1 0 001-1V5a1 1 0 00-1-1h-4"
    />,
    <rect
      className="instrument-piano-keys_svg__a"
      x={5.5}
      y={2}
      width={4}
      height={12}
      rx={1}
      ry={1}
    />,
    <rect
      className="instrument-piano-keys_svg__a"
      x={14.5}
      y={2}
      width={4}
      height={12}
      rx={1}
      ry={1}
    />
  );

export default SvgInstrumentPianoKeys;
