import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="time-clock-file-upload_svg__a"
      cx={17.254}
      cy={17.25}
      r={5.996}
    />,
    <path
      className="time-clock-file-upload_svg__a"
      d="M17.254 20.25v-6M17.254 14.25l-2.249 2.25M17.254 14.25l2.248 2.25M8.245 14.25a4.5 4.5 0 114.249-5.978"
    />,
    <path
      className="time-clock-file-upload_svg__a"
      d="M9.744 9.75H8.245v-1.5"
    />,
    <path
      className="time-clock-file-upload_svg__a"
      d="M7.5 20.25H2.249a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.622a1.5 1.5 0 011.06.44L16.8 4.061a1.5 1.5 0 01.439 1.061V7.5"
    />
  );

export default SvgTimeClockFileUpload;
