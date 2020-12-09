import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapAllDirection = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-all-direction_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-all-direction_svg__a"
      d="M11.492.506v4M8.992 2.506l2.5-2 2.5 2M11.492 23.506v-4M8.992 21.506l2.5 2 2.5-2M.492 11.506h3M2.492 14.006l-2-2.5 2-2.5M23.492 11.506h-3M21.492 14.006l2-2.5-2-2.5M6.479 16.452a6.5 6.5 0 1111.016.014"
    />,
    <path
      className="gesture-tap-all-direction_svg__a"
      d="M8.492 17.506v-4.5a3.5 3.5 0 017 0v4.5"
    />,
    <path
      className="gesture-tap-all-direction_svg__a"
      d="M13.492 13.006a1.5 1.5 0 00-3 0v1.5h3z"
    />
  );

export default SvgGestureTapAllDirection;
