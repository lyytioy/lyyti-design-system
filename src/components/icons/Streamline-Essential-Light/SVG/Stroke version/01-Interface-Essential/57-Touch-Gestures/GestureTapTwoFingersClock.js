import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapTwoFingersClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-two-fingers-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-two-fingers-clock_svg__a"
      d="M4.494 21.508v-8.5a3.5 3.5 0 017 0v8.5"
    />,
    <path
      className="gesture-tap-two-fingers-clock_svg__a"
      d="M9.494 13.008a1.5 1.5 0 00-3 0v1.5h3zM11.494 21.508v-9.5a3.5 3.5 0 017 0v9.5"
    />,
    <path
      className="gesture-tap-two-fingers-clock_svg__a"
      d="M16.494 12.008a1.5 1.5 0 00-3 0v1.5h3zM17.494 2.508v2h1"
    />,
    <circle
      className="gesture-tap-two-fingers-clock_svg__a"
      cx={17.494}
      cy={4.008}
      r={3}
    />,
    <path
      className="gesture-tap-two-fingers-clock_svg__a"
      d="M2.544 11.549a5.256 5.256 0 017.448-4.018M19.238 8.028a5.5 5.5 0 011.054 4.98M12.006 6.908a5.511 5.511 0 011.5-.679"
    />
  );

export default SvgGestureTapTwoFingersClock;
