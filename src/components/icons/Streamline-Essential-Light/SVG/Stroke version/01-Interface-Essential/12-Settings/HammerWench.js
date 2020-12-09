import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHammerWench = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hammer-wench_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="hammer-wench_svg__a"
      d="M18.25 2.251c-1.061 1.061-3.04.96-4.75-.75L12 3l8 8 3.5-3.5zM11.939 9.94L8.146 6.148A4 4 0 002.854.855L5 3v2H3L.854 2.855a4 4 0 005.292 5.293l3.793 3.792M12.061 14.062l3.793 3.793a4 4 0 005.292 5.293L19 21v-2h2l2.146 2.147a4 4 0 00-5.292-5.293l-3.793-3.793"
    />,
    <path
      className="hammer-wench_svg__a"
      d="M15.439 6.44l-14.5 14.5a1.5 1.5 0 002.122 2.122l14.5-14.5"
    />
  );

export default SvgHammerWench;
