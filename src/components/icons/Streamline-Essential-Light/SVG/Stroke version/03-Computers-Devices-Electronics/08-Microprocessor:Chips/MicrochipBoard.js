import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrochipBoard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".microchip-board_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="microchip-board_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="microchip-board_svg__a"
      d="M14.5 3.5h5.999M14.5 5.5h5.999M14.5 7.5h5.999M5.5 12.5h6v6h-6zM6.5 12.5v-2M8.5 12.5v-2M8.5 20.5v-2M10.5 12.5v-2M6.5 20.5v-2M10.5 20.5v-2M11.5 13.5h2M11.5 15.5h2M11.5 17.5h2M3.5 13.5h2M3.5 15.5h2M3.5 17.5h2M16.749 11.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M16.749 15a.25.25 0 11-.25.25.25.25 0 01.25-.25M16.749 18.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M20.5 10.5v10"
    />,
    <circle className="microchip-board_svg__a" cx={5} cy={6} r={1.5} />,
    <circle className="microchip-board_svg__a" cx={10} cy={6} r={1.5} />
  );

export default SvgMicrochipBoard;
