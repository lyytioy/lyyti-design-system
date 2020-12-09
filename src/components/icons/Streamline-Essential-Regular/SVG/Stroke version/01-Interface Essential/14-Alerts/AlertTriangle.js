import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlertTriangle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alert-triangle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-width:1.5px;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="alert-triangle_svg__a"
      d="M12 18.75a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      strokeMiterlimit={10}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 15.75v-7.5"
    />,
    <path
      className="alert-triangle_svg__a"
      d="M13.621 1.76a1.806 1.806 0 00-3.242 0L.906 21.058a1.521 1.521 0 001.366 2.192h19.456a1.521 1.521 0 001.366-2.192z"
    />
  );

export default SvgAlertTriangle;
