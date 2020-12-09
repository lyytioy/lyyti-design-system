import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bin_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="bin_svg__a"
      x={0.5}
      y={5.004}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="bin_svg__a"
      d="M12 9.004v6M11 15.004h2M11 9.004h2M9 10.5A1.5 1.5 0 017.5 12H6V9h1.5A1.5 1.5 0 019 10.5zM9 13.5A1.5 1.5 0 017.5 15H6v-3h1.5A1.5 1.5 0 019 13.5zM15 15.004v-6l3 6v-6"
    />
  );

export default SvgBin;
