import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorProgrammingBook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-programming-book_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-programming-book_svg__a"
      d="M17.5 13c0-1.822 2.662-2.874 5.479-2.99a.5.5 0 01.521.5v8a.5.5 0 01-.48.5A8.591 8.591 0 0017.5 21a8.591 8.591 0 00-5.52-1.991.5.5 0 01-.48-.5v-8a.5.5 0 01.521-.5C14.838 10.13 17.5 11.182 17.5 13zM17.5 13.004v8"
    />,
    <path
      className="monitor-programming-book_svg__a"
      d="M9.5 17H2a1.5 1.5 0 01-1.5-1.5v-11A1.5 1.5 0 012 3h15a1.5 1.5 0 011.5 1.5V9M4.5 21.004h8M8.5 17.004v4"
    />,
    <path
      className="monitor-programming-book_svg__a"
      d="M3 6.504l2 2-2 2M6 10.004h3.5"
    />
  );

export default SvgMonitorProgrammingBook;
