import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCableSplit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cable-split_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="cable-split_svg__a" cx={11.311} cy={11.689} r={3} />,
    <rect
      className="cable-split_svg__a"
      x={15.085}
      y={2.218}
      width={6.894}
      height={4.5}
      rx={0.75}
      ry={0.75}
      transform="rotate(-45 18.533 4.468)"
    />,
    <path
      className="cable-split_svg__a"
      d="M9 19.5h4.5M9 23.25h4.5M7.598 4.795L4.416 7.977M4.947 2.143L1.765 5.325"
    />
  );

export default SvgCableSplit;
