import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModuleHandPuzzle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".module-hand-puzzle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="module-hand-puzzle_svg__a"
      x={0.5}
      y={14.5}
      width={4}
      height={8}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="module-hand-puzzle_svg__a"
      d="M4.5 21.063c10.5 3.5 7 3.5 19-2.5a2.758 2.758 0 00-3-1l-4.317 1.367"
    />,
    <path
      className="module-hand-puzzle_svg__a"
      d="M4.5 15.5h3c2.353 0 4 2 4.5 2h3.5c1 0 1 2 0 2H10M17.571 11.4A2 2 0 1120.4 8.571a1.97 1.97 0 01.448.683.5.5 0 00.82.171l1.561-1.561a1 1 0 000-1.414l-1.6-1.6a2 2 0 10-2.454-2.45l-1.6-1.6a1 1 0 00-1.414 0l-1.45 1.449a.5.5 0 00.078.771 2 2 0 11-2.772 2.772.5.5 0 00-.771-.078L9.793 7.157a1 1 0 000 1.414l5.657 5.657a1 1 0 001.414 0l1.561-1.562a.5.5 0 00-.171-.819 1.979 1.979 0 01-.683-.447z"
    />
  );

export default SvgModuleHandPuzzle;
