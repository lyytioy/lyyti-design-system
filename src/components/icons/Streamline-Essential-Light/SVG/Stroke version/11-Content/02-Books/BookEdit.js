import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="book-edit_svg__a" d="M7.5 23.5h-4a2 2 0 01-2-2v-19" />,
    <path
      className="book-edit_svg__a"
      d="M20.5.5h-17a2 2 0 100 4h16a1 1 0 011 1V9M3.502 2.5h16M14.7 22.3l-4.2 1.2 1.2-4.2 7.179-7.179a2.121 2.121 0 013 3zM17.979 13.021l3 3M11.7 19.3l3 3"
    />
  );

export default SvgBookEdit;
