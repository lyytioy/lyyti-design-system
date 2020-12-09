import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCertifiedDiploma2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".certified-diploma-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="certified-diploma-2_svg__a"
      d="M7.5 17h-6a1 1 0 01-1-1V2a1 1 0 011-1h21a1 1 0 011 1v14a1 1 0 01-1 1h-6M.5 6.5L6 1M18 17l5.5-5.5"
    />,
    <path
      className="certified-diploma-2_svg__a"
      d="M12 18a3.487 3.487 0 01-2.5-1.051V23l2.5-3 2.5 3v-6.051A3.487 3.487 0 0112 18z"
    />,
    <circle className="certified-diploma-2_svg__a" cx={12} cy={14.5} r={3.5} />,
    <circle className="certified-diploma-2_svg__a" cx={12} cy={14.5} r={1.5} />,
    <path className="certified-diploma-2_svg__a" d="M9.5 4h5M7 7h10" />
  );

export default SvgCertifiedDiploma2;
