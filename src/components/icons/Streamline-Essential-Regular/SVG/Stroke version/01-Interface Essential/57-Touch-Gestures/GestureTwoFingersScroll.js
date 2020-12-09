import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTwoFingersScroll = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-two-fingers-scroll_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-two-fingers-scroll_svg__a"
      d="M.75 17.248l2.856.816a3 3 0 003.507-1.543l.387-.773h3.75a1.5 1.5 0 000-3h1.5a1.5 1.5 0 000-3H6l.587-1.174a1.637 1.637 0 00-2.743-1.755L.75 10.608M11.25 12.748h-4.5M22.5 4.498L18.75.748 15 4.498M18.75.748v22.5M22.5 19.498l-3.75 3.75-3.75-3.75"
    />
  );

export default SvgGestureTwoFingersScroll;
