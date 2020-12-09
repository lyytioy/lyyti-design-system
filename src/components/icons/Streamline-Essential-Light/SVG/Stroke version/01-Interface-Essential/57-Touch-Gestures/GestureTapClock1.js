import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapClock1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-clock-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-clock-1_svg__a"
      d="M17.183 9.955a6.508 6.508 0 01-.673 5.492M5.494 15.433a6.506 6.506 0 015.513-9.945M16.5 3.008v1.5h1"
    />,
    <circle
      className="gesture-tap-clock-1_svg__a"
      cx={16.5}
      cy={4.508}
      r={3}
    />,
    <path
      className="gesture-tap-clock-1_svg__a"
      d="M9.5 11.488a1 1 0 012 0v4.754l3.92 1.17a1.282 1.282 0 01.894 1.52c-.13.563-.746 4-.85 4.576H9.347l-3.061-4.59c-1.215-1.858 1.836-2.5 3.217.59z"
    />
  );

export default SvgGestureTapClock1;
