import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLockShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="lock-shield_svg__a"
      d="M22.5.53a1 1 0 011 1l-.008 7.57a14.7 14.7 0 01-11.435 14.43A14.7 14.7 0 01.492 9.207l.013-7.672a1 1 0 011-1z"
    />,
    <path
      className="lock-shield_svg__a"
      d="M16.516 14.51a1 1 0 01-1 1.005l-7 .031a1 1 0 01-1-.995l-.027-5.874a1 1 0 011-1l7-.031a1 1 0 011 .995zM11.966 3.53A3 3 0 008.98 6.544V7.67l6-.027V6.517a3 3 0 00-3.014-2.987z"
    />,
    <circle className="lock-shield_svg__a" cx={12.003} cy={11.593} r={1.25} />
  );

export default SvgLockShield;
