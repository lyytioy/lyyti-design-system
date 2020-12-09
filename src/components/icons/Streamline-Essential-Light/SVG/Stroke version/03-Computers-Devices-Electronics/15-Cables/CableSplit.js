import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCableSplit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cable-split_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="cable-split_svg__a" cx={11.739} cy={11.5} r={3} />,
    <rect
      className="cable-split_svg__a"
      x={15.672}
      y={2.355}
      width={7.071}
      height={4.243}
      rx={0.5}
      ry={0.5}
      transform="rotate(-45 19.207 4.477)"
    />,
    <rect
      className="cable-split_svg__a"
      x={1.336}
      y={2.665}
      width={4.243}
      height={2.121}
      rx={0.5}
      ry={0.5}
      transform="rotate(-45 3.458 3.725)"
    />,
    <rect
      className="cable-split_svg__a"
      x={4.336}
      y={5.665}
      width={4.243}
      height={2.121}
      rx={0.5}
      ry={0.5}
      transform="rotate(-45 6.458 6.725)"
    />,
    <rect
      className="cable-split_svg__a"
      x={9.739}
      y={21.5}
      width={4}
      height={2}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="cable-split_svg__a"
      x={9.739}
      y={17.5}
      width={4}
      height={2}
      rx={0.5}
      ry={0.5}
    />
  );

export default SvgCableSplit;
