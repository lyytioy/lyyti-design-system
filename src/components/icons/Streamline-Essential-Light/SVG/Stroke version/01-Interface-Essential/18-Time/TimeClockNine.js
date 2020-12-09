import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockNine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-nine_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-nine_svg__a"
      d="M12.5.5v11H.5c0 6.5 5.148 12 11.5 12A11.5 11.5 0 0023.5 12c0-6.351-5.148-11.5-11-11.5zM21.5 11.501h-2M18.718 18.719l-1.415-1.415M5.282 5.284l1.414 1.413M12.5 21.501v-2M5.282 18.719l1.414-1.415M18.718 5.284l-1.415 1.413"
    />
  );

export default SvgTimeClockNine;
