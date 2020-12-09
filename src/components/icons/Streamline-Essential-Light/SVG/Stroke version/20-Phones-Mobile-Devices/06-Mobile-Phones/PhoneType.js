import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneType = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-type_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-type_svg__a"
      d="M11.5 14.5v7a2 2 0 01-2 2h-7a2 2 0 01-2-2v-15a2 2 0 012-2h4M6.5 8.5h-6M11.5 19.5H.5M4.5 6.5h2M23.5 8A1.5 1.5 0 0122 9.5h-5.5l-3 3v-3H10A1.5 1.5 0 018.5 8V2A1.5 1.5 0 0110 .5h12A1.5 1.5 0 0123.5 2zM16.25 4.5"
    />,
    <path
      className="phone-type_svg__a"
      d="M16.25 4.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M19.75 4.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M12.75 4.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M6 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25"
    />
  );

export default SvgPhoneType;
