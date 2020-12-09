import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRetouchFace = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".retouch-face_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="retouch-face_svg__a"
      d="M13.888 15.641a3.041 3.041 0 01-3.646 0M17.892 10.35A6.736 6.736 0 0112 6.926a6.738 6.738 0 01-5.893 3.424q-.308 0-.607-.03v3.568a6.7 6.7 0 006.5 6.36 6.7 6.7 0 006.5-6.36V10.32q-.3.03-.608.03z"
    />,
    <path
      className="retouch-face_svg__a"
      d="M15.5 2.036a8.171 8.171 0 00-3.5-.788 8.677 8.677 0 00-8.5 8.71s0 5.648-2.712 9.473a1 1 0 00.159 1.333c1.962 1.7 6.489 2.544 11.052 2.484 4.563.06 9.09-.78 11.053-2.484a1 1 0 00.159-1.333C20.5 15.606 20.5 9.958 20.5 9.958a8.723 8.723 0 00-.286-2.212M15.5 5.248h4M17.5 3.248v4M20 2.248h3M21.5.748v3"
    />
  );

export default SvgRetouchFace;
