import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="cloud-clock_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="cloud-clock_svg__a"
      d="M19.902 17.25H17.25v-2.651M22.479 8.242a4.867 4.867 0 00-6.868-1.377A7.5 7.5 0 108.25 15.75"
    />
  );

export default SvgCloudClock;
