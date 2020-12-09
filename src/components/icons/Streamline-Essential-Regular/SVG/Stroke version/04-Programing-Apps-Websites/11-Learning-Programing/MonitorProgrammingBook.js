import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorProgrammingBook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-programming-book_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-programming-book_svg__a"
      d="M17.25 14.452c0-1.492 2.662-2.353 5.479-2.448a.565.565 0 01.367.113.38.38 0 01.154.3v6.552a.457.457 0 01-.48.409A9.633 9.633 0 0017.25 21a9.633 9.633 0 00-5.52-1.629.458.458 0 01-.48-.409v-6.549a.38.38 0 01.154-.3.565.565 0 01.367-.113c2.817.1 5.479.96 5.479 2.452zM17.25 14.452v6.551"
    />,
    <path
      className="monitor-programming-book_svg__a"
      d="M8.25 17.253h-6.5a1.012 1.012 0 01-1-1.017V4.021A1.013 1.013 0 011.75 3h16a1.012 1.012 0 011 1.018v5.09M4.663 21.003H8.25M8.25 17.253v3.75"
    />,
    <path
      className="monitor-programming-book_svg__a"
      d="M3.75 6.753l3 2.25-3 2.25M9.75 9.003h3.75"
    />
  );

export default SvgMonitorProgrammingBook;
