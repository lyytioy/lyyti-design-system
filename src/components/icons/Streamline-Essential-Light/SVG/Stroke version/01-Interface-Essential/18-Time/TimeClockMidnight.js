import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockMidnight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-midnight_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-midnight_svg__a"
      d="M12.027 21.503v-2M12.027 2.503v2M21.527 12.003h-2M2.527 12.003h2M18.744 5.286L17.33 6.7M5.309 18.721l1.415-1.414M5.309 5.286L6.724 6.7M18.744 18.721l-1.414-1.414"
    />,
    <circle
      className="time-clock-midnight_svg__a"
      cx={12.027}
      cy={12.003}
      r={11.5}
    />
  );

export default SvgTimeClockMidnight;
