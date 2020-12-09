import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIso = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".iso_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="iso_svg__a"
      x={0.5}
      y={5.004}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="iso_svg__a"
      d="M7 9.004v6M6 15.004h2M6 9.004h2M13 9h-1.7a1.3 1.3 0 00-.723 2.386l1.84 1.227A1.3 1.3 0 0111.7 15H10M18 13.5a1.5 1.5 0 01-3 0v-3a1.5 1.5 0 113 0z"
    />
  );

export default SvgIso;
