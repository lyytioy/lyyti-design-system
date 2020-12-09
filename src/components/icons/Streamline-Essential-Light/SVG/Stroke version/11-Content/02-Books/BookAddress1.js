import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookAddress1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-address-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="book-address-1_svg__a"
      d="M21.5.5h-17a2 2 0 000 4h16a1 1 0 011 1v17a1 1 0 01-1 1h-16a2 2 0 01-2-2v-19M4.5 2.5h16"
    />,
    <path
      className="book-address-1_svg__a"
      d="M17.5 18.719s-2.02-.893-3.432-1.415c-.926-.344-.794-1.907-.258-2.494a4.283 4.283 0 001.259-3.531A3 3 0 0012 8a3 3 0 00-3.069 3.279 4.283 4.283 0 001.259 3.531c.536.587.668 2.15-.258 2.494-1.415.523-3.432 1.415-3.432 1.415"
    />
  );

export default SvgBookAddress1;
