import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUserSignal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".user-signal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="user-signal_svg__a"
      d="M17.657 17.156a8 8 0 10-11.314 0M19.778 19.277a11 11 0 10-15.556 0M16.177 14.25a5 5 0 10-8.354 0"
    />,
    <circle className="user-signal_svg__a" cx={12} cy={10.999} r={2} />,
    <path
      className="user-signal_svg__a"
      d="M12 14a3 3 0 00-3 3v3h1.5l.248 3.5h2.5L13.5 20H15v-3a3 3 0 00-3-3z"
    />
  );

export default SvgUserSignal;
