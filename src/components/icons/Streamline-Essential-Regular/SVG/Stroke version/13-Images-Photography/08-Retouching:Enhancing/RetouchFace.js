import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRetouchFace = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".retouch-face_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="retouch-face_svg__a"
      d="M13.863 14.927a3 3 0 01-3.6 0M17.439 9.911A6.219 6.219 0 0112 6.75a6.221 6.221 0 01-5.44 3.161A5.454 5.454 0 016 9.883v3.294a6.184 6.184 0 006 5.871 6.185 6.185 0 006-5.871V9.883a5.488 5.488 0 01-.561.028z"
    />,
    <path
      className="retouch-face_svg__a"
      d="M15.455 1.727A7.891 7.891 0 0012 .929a8.693 8.693 0 00-8.391 8.835s0 5.73-2.677 9.61a1.034 1.034 0 00.157 1.352C3.026 22.456 7.5 23.308 12 23.247c4.5.061 8.973-.791 10.91-2.521a1.032 1.032 0 00.157-1.352c-2.677-3.88-2.677-9.61-2.677-9.61a9.052 9.052 0 00-.282-2.243M20.25 2.25h3M21.75.75v3M15.75 5.25h3M17.25 3.75v3"
    />
  );

export default SvgRetouchFace;
