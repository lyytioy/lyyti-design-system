import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUserSignal1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".user-signal-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="user-signal-1_svg__a" cx={12} cy={12.499} r={3} />,
    <path
      className="user-signal-1_svg__a"
      d="M16.5 23.5c-.312-3.392-2.233-6-4.5-6s-4.188 2.608-4.5 6zM17.3 17.3a7.5 7.5 0 10-10.6 0M20.132 20.131a11.5 11.5 0 10-16.264 0"
    />
  );

export default SvgUserSignal1;
