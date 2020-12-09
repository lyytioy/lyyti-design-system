import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGenderFemale = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gender-female_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="gender-female_svg__cls-1" d="M12 15.75v7.5M9 20.25h6" />,
    <circle className="gender-female_svg__cls-1" cx={12} cy={8.25} r={7.5} />
  );

export default SvgGenderFemale;
