import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordDenied = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".password-denied_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="password-denied_svg__a"
      d="M10.75 10.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M6 10.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <circle className="password-denied_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="password-denied_svg__a"
      d="M19.621 15.379l-4.242 4.242M19.621 19.621l-4.242-4.242M9.5 15.5h-7a2 2 0 01-2-2v-5a2 2 0 012-2h19a2 2 0 012 2V12"
    />
  );

export default SvgPasswordDenied;
