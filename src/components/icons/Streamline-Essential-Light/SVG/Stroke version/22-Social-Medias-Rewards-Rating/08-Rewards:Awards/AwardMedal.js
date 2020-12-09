import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardMedal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-medal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="award-medal_svg__a" cx={12} cy={16} r={7.5} />,
    <path
      className="award-medal_svg__a"
      d="M18 .5l-2.862 6.01M17.198 7.47L20.5.5M20.5.5l-3.302 6.97M18.988 8.855L23 .5M6 .5l2.862 6.01M6.801 7.47L3.5.5M3.5.5l3.301 6.97M5.01 8.855L1 .5M12.472 12.287L13.5 14.5h2a.49.49 0 01.346.855l-1.736 1.708.962 2.209a.524.524 0 01-.746.655L12 18.622l-2.323 1.307a.524.524 0 01-.746-.655l.962-2.209-1.736-1.708A.489.489 0 018.5 14.5h2l1.029-2.215a.53.53 0 01.943.002z"
    />
  );

export default SvgAwardMedal;
