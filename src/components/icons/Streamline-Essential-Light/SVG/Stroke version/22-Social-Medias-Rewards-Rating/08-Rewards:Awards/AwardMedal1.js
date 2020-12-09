import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardMedal1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-medal-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="award-medal-1_svg__a" cx={12} cy={16} r={7.5} />,
    <path
      className="award-medal-1_svg__a"
      d="M12.5.5h-5a1 1 0 00-1 1v1.333a.992.992 0 00.054.324L8.042 7.5M12.5.5h5.021a1 1 0 011 1v1.342a.973.973 0 01-.049.308L17.063 7.5M9.5.5v6M15.5.5v6M12.5.5v6M12.472 12.287L13.5 14.5h2a.49.49 0 01.346.855l-1.736 1.71.962 2.209a.524.524 0 01-.746.655L12 18.622l-2.322 1.307a.524.524 0 01-.746-.655l.962-2.209-1.736-1.708A.489.489 0 018.5 14.5h2l1.029-2.215a.53.53 0 01.943.002z"
    />
  );

export default SvgAwardMedal1;
