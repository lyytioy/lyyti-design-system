import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesBookText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-book-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="notes-book-text_svg__a"
      x={2}
      y={2.5}
      width={20}
      height={21}
      rx={1}
      ry={1}
    />,
    <path
      className="notes-book-text_svg__a"
      d="M6 4.5v-4M18 4.5v-4M10 4.5v-4M14 4.5v-4M6 9.5h12M6 12.5h12M6 15.5h12M6 18.5h7"
    />
  );

export default SvgNotesBookText;
