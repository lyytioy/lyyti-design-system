import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneRotate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-rotate_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="phone-rotate_svg__a"
      x={8.25}
      y={5.25}
      width={7.5}
      height={13.5}
      rx={1.5}
      ry={1.5}
      transform="rotate(-45 12 12)"
    />,
    <path
      className="phone-rotate_svg__a"
      d="M12 17.303L17.303 12M6.75 17.25v4.5H1.5"
    />,
    <path
      className="phone-rotate_svg__a"
      d="M4.37 3.75A11.207 11.207 0 00.75 12a11.56 11.56 0 006 9.75M17.25 6.75v-4.5h5.25"
    />,
    <path
      className="phone-rotate_svg__a"
      d="M19.63 20.25A11.206 11.206 0 0023.25 12a11.562 11.562 0 00-6-9.75"
    />
  );

export default SvgPhoneRotate;
