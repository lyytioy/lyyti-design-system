import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTwoFingerTapClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-two-finger-tap-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-two-finger-tap-clock_svg__a"
      d="M17.504 2.503v2h1"
    />,
    <circle
      className="gesture-two-finger-tap-clock_svg__a"
      cx={17.504}
      cy={4.003}
      r={3}
    />,
    <path
      className="gesture-two-finger-tap-clock_svg__a"
      d="M7.5 10.483a1 1 0 012 0v4.754l1 .246 1.5-4.816a.93.93 0 011.8.454l-1.3 4.862c1.02.472 2.08.776 1.811 1.943-.13.564-.746 4-.85 4.577H7.348l-3.06-4.59c-1.215-1.858 1.836-2.5 3.216.59zM5 10a3.5 3.5 0 016.333-2.06M13.519 7.538a3.508 3.508 0 011.991 5.908"
    />
  );

export default SvgGestureTwoFingerTapClock;
