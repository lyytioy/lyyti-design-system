import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordCursor1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".password-cursor-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="password-cursor-1_svg__a"
      d="M18.328 22.689a.5.5 0 01-.932.1l-3.725-7.449a.5.5 0 01.671-.671l7.449 3.731a.5.5 0 01-.1.932L19 20zM12 8.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M6 8.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M18 8.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <path
      className="password-cursor-1_svg__a"
      d="M10.5 13.5h-8a2 2 0 01-2-2v-5a2 2 0 012-2h19a2 2 0 012 2v5a2 2 0 01-2 2h-4"
    />
  );

export default SvgPasswordCursor1;
