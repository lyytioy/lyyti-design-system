import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationUp1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-up-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="navigation-up-1_svg__a"
      d="M23.5 12L13.142 4.792a2 2 0 00-2.284 0L.5 12"
    />,
    <path
      className="navigation-up-1_svg__a"
      d="M23.5 19c0 .55-.369.743-.821.428l-9.858-6.857a1.549 1.549 0 00-1.642 0l-9.858 6.855C.869 19.741.5 19.548.5 19v-1.5a2.153 2.153 0 01.821-1.572l9.858-6.857a1.549 1.549 0 011.642 0l9.858 6.857A2.153 2.153 0 0123.5 17.5z"
    />
  );

export default SvgNavigationUp1;
