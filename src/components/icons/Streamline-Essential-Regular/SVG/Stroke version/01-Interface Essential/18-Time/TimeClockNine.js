import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockNine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-nine_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-nine_svg__a"
      d="M12 .75c-.253 0-.5.022-.75.038V11.25H.788c-.017.249-.038.5-.038.75A11.25 11.25 0 1012 .75z"
    />,
    <path
      className="time-clock-nine_svg__a"
      d="M19.875 11.625a.375.375 0 10.375.375.375.375 0 00-.375-.375M17.568 6.057a.37.37 0 00-.265.11.375.375 0 10.265-.11M17.568 17.194a.37.37 0 00-.265.11.375.375 0 10.265-.11M12 19.5a.375.375 0 10.375.375A.375.375 0 0012 19.5M6.7 17.3a.372.372 0 00-.265-.11.375.375 0 00-.266.64.375.375 0 00.531-.53"
    />
  );

export default SvgTimeClockNine;
