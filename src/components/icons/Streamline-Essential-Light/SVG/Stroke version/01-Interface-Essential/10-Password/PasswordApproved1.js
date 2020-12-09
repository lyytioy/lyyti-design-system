import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordApproved1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".password-approved-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="password-approved-1_svg__a"
      d="M9.5 13.5h-8a1 1 0 01-1-1v-7a1 1 0 011-1h21a1 1 0 011 1v5.021M4.5 7v4M6.173 7.903l-3.345 2.194M6.164 10.11L2.836 7.89M10.5 7v4M12.173 7.903l-3.345 2.194M12.164 10.11L8.836 7.89"
    />,
    <circle className="password-approved-1_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="password-approved-1_svg__a"
      d="M20.174 15.756l-2.905 3.873a.751.751 0 01-1.13.081l-1.5-1.5"
    />
  );

export default SvgPasswordApproved1;
