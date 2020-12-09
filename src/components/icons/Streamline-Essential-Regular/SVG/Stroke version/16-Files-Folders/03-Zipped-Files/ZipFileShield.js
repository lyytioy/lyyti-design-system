import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZipFileShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".zip-file-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="zip-file-shield_svg__a"
      d="M23.25 15.75a7.669 7.669 0 01-6 7.5 7.669 7.669 0 01-6-7.5v-3.541a1.5 1.5 0 01.915-1.382 12.543 12.543 0 0110.17 0 1.5 1.5 0 01.915 1.382zM17.25 12.75v6M14.25 15.75h6M10.226 4.557a1.951 1.951 0 01-.474 1.533 2.039 2.039 0 01-3 0 1.951 1.951 0 01-.474-1.533L6.75.75h3zM8.25 9.375a.375.375 0 11-.375.375.375.375 0 01.375-.375M8.25 13.125a.375.375 0 11-.375.375.375.375 0 01.375-.375M8.25 16.875a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <path
      className="zip-file-shield_svg__a"
      d="M7.5 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V6.84"
    />
  );

export default SvgZipFileShield;
