import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComputerShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".computer-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="computer-shield_svg__a"
      d="M19.5 10.746V5.287a1.3 1.3 0 00-.785-1.2A19.565 19.565 0 0012 2.842 19.565 19.565 0 005.285 4.09a1.3 1.3 0 00-.785 1.2v5.459M6.082 16.058c1.809 2.419 4.68 3.784 5.918 3.784s4.109-1.365 5.918-3.784M4.377 13.83C4.164 15.348 1.8 16.289.685 16.651a.269.269 0 00-.055.485l2.155 1.293-.842 1.684a.267.267 0 00.284.383 7.974 7.974 0 003.791-1.487M19.623 13.83c.213 1.518 2.576 2.459 3.692 2.821a.269.269 0 01.055.485l-2.155 1.293.842 1.684a.267.267 0 01-.284.383 7.97 7.97 0 01-3.791-1.487"
    />,
    <path
      className="computer-shield_svg__a"
      d="M12 13.845c3.406 0 5.188 1.392 5.978 2.279a.5.5 0 00.843-.162l1.543-4.244a.5.5 0 00-.207-.6A16.1 16.1 0 0012 8.845a16.1 16.1 0 00-8.157 2.277.5.5 0 00-.207.6l1.543 4.244a.5.5 0 00.843.162c.79-.891 2.572-2.283 5.978-2.283z"
    />
  );

export default SvgComputerShield;
