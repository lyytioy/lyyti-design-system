import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTwoFingerTap = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-two-finger-tap_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-two-finger-tap_svg__a"
      d="M19.629 14.515A8.992 8.992 0 103 9.777 8.919 8.919 0 004.69 15M17.25 9.777a5.25 5.25 0 00-10.5 0"
    />,
    <path
      className="gesture-two-finger-tap_svg__a"
      d="M16.5 23.248l.816-2.856a3 3 0 00-1.543-3.507L15 16.5v-3.75a1.5 1.5 0 10-3 0v-1.5a1.5 1.5 0 10-3 0V18l-1.174-.587a1.638 1.638 0 00-1.755 2.744l3.789 3.091M12 12.748v4.5"
    />
  );

export default SvgGestureTwoFingerTap;
