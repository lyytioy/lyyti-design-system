import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentPianoKeys = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-piano-keys_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="instrument-piano-keys_svg__a"
      d="M4.5 4.5H3A1.5 1.5 0 001.5 6v13.5A1.5 1.5 0 003 21h18a1.5 1.5 0 001.5-1.5V6A1.5 1.5 0 0021 4.5h-1.5"
    />,
    <rect
      className="instrument-piano-keys_svg__a"
      x={4.5}
      y={3}
      width={3}
      height={9.75}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="instrument-piano-keys_svg__a"
      x={10.5}
      y={3}
      width={3}
      height={9.75}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="instrument-piano-keys_svg__a"
      x={16.5}
      y={3}
      width={3}
      height={9.75}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="instrument-piano-keys_svg__a"
      d="M6 12.75V21M12 12.75V21M18 12.75V21M10.5 4.5h-3 3zM16.5 4.5h-3 3z"
    />
  );

export default SvgInstrumentPianoKeys;
