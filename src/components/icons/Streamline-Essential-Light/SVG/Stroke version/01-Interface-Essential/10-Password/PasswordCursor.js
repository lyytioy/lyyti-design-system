import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordCursor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".password-cursor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="password-cursor_svg__a"
      d="M11 14.5H2.5a2 2 0 01-2-2v-7a2 2 0 012-2h19a2 2 0 012 2v7a2 2 0 01-2 2h-3"
    />,
    <circle className="password-cursor_svg__a" cx={5} cy={9} r={1.5} />,
    <circle className="password-cursor_svg__a" cx={12} cy={9} r={1.5} />,
    <circle className="password-cursor_svg__a" cx={19} cy={9} r={1.5} />,
    <path
      className="password-cursor_svg__a"
      d="M18.328 22.689a.5.5 0 01-.932.1l-3.725-7.449a.5.5 0 01.671-.671l7.449 3.731a.5.5 0 01-.1.932L19 20z"
    />
  );

export default SvgPasswordCursor;
