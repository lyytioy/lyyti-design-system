import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordApproved = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".password-approved_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="password-approved_svg__a"
      d="M10.75 10.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M6 10.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <circle className="password-approved_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="password-approved_svg__a"
      d="M20.174 15.756l-2.905 3.873a.752.752 0 01-1.131.081l-1.5-1.5M9.5 15.5h-7a2 2 0 01-2-2v-5a2 2 0 012-2h19a2 2 0 012 2V12"
    />
  );

export default SvgPasswordApproved;
