import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionClock1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-clock-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-clock-1_svg__a"
      d="M15.5 19.5h-13M9 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M9 21.25"
    />,
    <path
      className="phone-action-clock-1_svg__a"
      d="M15.5 14.5v7a2 2 0 01-2 2h-9a2 2 0 01-2-2v-19a2 2 0 012-2H10"
    />,
    <circle className="phone-action-clock-1_svg__a" cx={15.5} cy={6.5} r={6} />,
    <path className="phone-action-clock-1_svg__a" d="M17.5 6.5h-2v-3" />
  );

export default SvgPhoneActionClock1;
