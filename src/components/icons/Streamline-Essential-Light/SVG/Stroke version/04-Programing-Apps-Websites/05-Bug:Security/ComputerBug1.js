import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComputerBug1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".computer-bug-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="computer-bug-1_svg__a" cx={12} cy={14.5} r={9} />,
    <circle className="computer-bug-1_svg__a" cx={6.5} cy={2} r={1.5} />,
    <circle className="computer-bug-1_svg__a" cx={17.5} cy={2} r={1.5} />,
    <path
      className="computer-bug-1_svg__a"
      d="M4.5 9.498h15M12 9.498V23.5M.5 14.498H3M1.664 19.541l2.247-1.096M1.494 9.823l2.284 1.017M23.5 14.498H21M22.336 19.541l-2.247-1.096M22.506 9.823l-2.284 1.017M6.71 3.479a5.5 5.5 0 001.764 2.74M15.526 6.219a5.5 5.5 0 001.764-2.74"
    />
  );

export default SvgComputerBug1;
