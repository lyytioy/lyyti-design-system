import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArchiveBooks = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".archive-books_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="archive-books_svg__a"
      x={3}
      y={0.75}
      width={9}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="archive-books_svg__a"
      x={12}
      y={0.75}
      width={9}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <circle className="archive-books_svg__a" cx={16.5} cy={18.75} r={1.5} />,
    <circle className="archive-books_svg__a" cx={7.5} cy={18.75} r={1.5} />,
    <rect
      className="archive-books_svg__a"
      x={6}
      y={4.5}
      width={3}
      height={9.75}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="archive-books_svg__a"
      x={15}
      y={4.5}
      width={3}
      height={9.75}
      rx={0.5}
      ry={0.5}
    />
  );

export default SvgArchiveBooks;
