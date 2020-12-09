import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookLibrary1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-library-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="book-library-1_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1}
      ry={1}
    />,
    <path
      className="book-library-1_svg__a"
      d="M23.25 12H.75M12.75 3.75h3.75V12h-3.75zM16.5 6h3.75v6H16.5zM4.5 15h3.75v8.25H4.5zM8.25 15H12v8.25H8.25zM13.5 15.566l3.494-1.364 3 7.685-3.494 1.364z"
    />
  );

export default SvgBookLibrary1;
