import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockSix = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-six_svg__b{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      d="M7 .75v22.5A11.25 11.25 0 007 .75z"
      fillRule="evenodd"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />,
    <path
      className="time-clock-six_svg__b"
      d="M14.875 11.625a.375.375 0 10.375.375.375.375 0 00-.375-.375M12.568 6.057a.37.37 0 00-.265.11.375.375 0 10.265-.11M12.568 17.194a.37.37 0 00-.265.11.375.375 0 10.265-.11"
    />
  );

export default SvgTimeClockSix;
