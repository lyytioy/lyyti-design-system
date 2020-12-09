import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingUserHead = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-user-head_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="programming-user-head_svg__a"
      d="M11.5 20.5h1M18 14.5a6 6 0 00-12 0v2a6 6 0 0012 0z"
    />,
    <path
      className="programming-user-head_svg__a"
      d="M6 14.481C7.288 14.37 9.5 13 9.5 11c1.5 2.5 3.5 3.5 6.5 3.5h2M6 16.786c0 .946 1.766 1.714 2.917 1.714A1.926 1.926 0 0011 16.786c0-.947-.933-1.286-2.083-1.286S6 15.839 6 16.786zM18 16.786c0 .946-1.766 1.714-2.917 1.714A1.926 1.926 0 0113 16.786c0-.947.933-1.286 2.083-1.286S18 15.839 18 16.786zM13 16.5h-2M20.5 1.5h.5a.5.5 0 01.5.5v3.5M20.5 5.5h2M20.5 8.5h.5a.5.5 0 01.5.5v3.5M20.5 12.5h2M1.5 1.5H2a.5.5 0 01.5.5v3.5M1.5 5.5h2M1.5 16.5H2a.5.5 0 01.5.5v3.5M1.5 20.5h2M16.5 4.5a1 1 0 01-2 0v-2a1 1 0 012 0zM22.5 19.5a1 1 0 01-2 0v-2a1 1 0 012 0zM9.5 4.5a1 1 0 01-2 0v-2a1 1 0 012 0zM3.5 11.5a1 1 0 01-2 0v-2a1 1 0 012 0z"
    />
  );

export default SvgProgrammingUserHead;
