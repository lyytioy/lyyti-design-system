import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComputerChipSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".computer-chip-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="computer-chip-search_svg__a"
      d="M17.583 17.545l5.956 5.955"
    />,
    <circle
      className="computer-chip-search_svg__a"
      cx={10.5}
      cy={10.485}
      r={10}
    />,
    <rect
      className="computer-chip-search_svg__a"
      x={6.539}
      y={6.5}
      width={8}
      height={8}
      rx={1}
      ry={1}
    />,
    <path
      className="computer-chip-search_svg__a"
      d="M12.539 14.5V17M12.539 4v2.5M8.539 14.5V17M8.539 4v2.5M14.539 12.5h2.5M6.539 8.5h-2.5M17.039 8.5h-2.5M6.539 12.5h-2.5M12.539 12.5h-2"
    />
  );

export default SvgComputerChipSearch;
