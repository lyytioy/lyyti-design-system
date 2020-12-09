import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGenderFemale = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gender-female_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="gender-female_svg__cls-1" cx={12} cy={7.5} r={7} />,
    <path className="gender-female_svg__cls-1" d="M12 14.5v9M9 20.5h6" />
  );

export default SvgGenderFemale;
