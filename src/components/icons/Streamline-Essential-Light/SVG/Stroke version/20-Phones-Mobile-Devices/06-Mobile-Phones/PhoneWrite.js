import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneWrite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-write_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-write_svg__a"
      d="M17 12v9.5a2 2 0 01-2 2H4a2 2 0 01-2-2v-19a2 2 0 012-2h11a1.985 1.985 0 011 .265M17 19.5H2M7 2.5h5"
    />,
    <path
      className="phone-write_svg__a"
      d="M9.5 21a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M21.377 4.12l-7.63 7.63L10 12.5l.75-3.75 7.63-7.63a2.113 2.113 0 012.991 0l.009.008a2.116 2.116 0 01-.003 2.992z"
    />
  );

export default SvgPhoneWrite;
