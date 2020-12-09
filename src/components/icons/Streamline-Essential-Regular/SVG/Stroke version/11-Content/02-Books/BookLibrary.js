import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookLibrary = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-library_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-library_svg__a"
      d="M4.384 23.25H2.366a1.5 1.5 0 01-1.5-1.5V7.5a1.5 1.5 0 011.5-1.5h2.018"
    />,
    <rect
      className="book-library_svg__a"
      x={15.75}
      y={3.75}
      width={4.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
      transform="rotate(-20.824 18 13.499)"
    />,
    <rect
      className="book-library_svg__a"
      x={6.866}
      y={0.75}
      width={6}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="book-library_svg__a"
      d="M9.866 3.75v12M9.866 19.125a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgBookLibrary;
