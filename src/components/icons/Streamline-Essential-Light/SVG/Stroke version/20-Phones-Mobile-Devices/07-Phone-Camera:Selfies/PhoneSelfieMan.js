import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneSelfieMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-selfie-man_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-selfie-man_svg__a"
      d="M4 23.491V5.5a2 2 0 012-2M18 3.5a2 2 0 012 2v17.991M20 8.5H4"
    />,
    <circle className="phone-selfie-man_svg__a" cx={12} cy={5.5} r={1} />,
    <path
      className="phone-selfie-man_svg__a"
      d="M12 2.5v-2M10 3.5L8.5 2M14 3.5L15.5 2M15 5.5h2M7 5.5h2M17 23.5a5 5 0 00-10 0zM9.424 12.486A4.987 4.987 0 0014.96 13.6"
    />,
    <circle className="phone-selfie-man_svg__a" cx={12} cy={14} r={3} />
  );

export default SvgPhoneSelfieMan;
