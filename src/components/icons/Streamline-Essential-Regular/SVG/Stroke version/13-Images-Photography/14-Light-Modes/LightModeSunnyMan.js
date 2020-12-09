import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeSunnyMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-sunny-man_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="light-mode-sunny-man_svg__a"
      d="M18.008.814v.864M21.731 2.333l-.611.611M23.25 6.056h-.864M21.731 9.667l-.611-.611M18.008 11.186v-.864M14.397 9.667l.611-.611M12.878 6.056h.864M14.397 2.333l.611.611"
    />,
    <circle
      className="light-mode-sunny-man_svg__a"
      cx={18}
      cy={6.064}
      r={2.25}
    />,
    <path
      className="light-mode-sunny-man_svg__a"
      d="M12.75 23.186a6.018 6.018 0 00-6-6 6.018 6.018 0 00-6 6M3.518 10.032a6.235 6.235 0 006.948 1.4"
    />,
    <circle
      className="light-mode-sunny-man_svg__a"
      cx={6.75}
      cy={11.936}
      r={3.75}
    />
  );

export default SvgLightModeSunnyMan;
