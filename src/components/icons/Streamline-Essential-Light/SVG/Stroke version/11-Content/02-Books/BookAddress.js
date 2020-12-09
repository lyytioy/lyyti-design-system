import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookAddress = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-address_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="book-address_svg__a" d="M5.5 2.5h11a1 1 0 011 1v1" />,
    <path
      className="book-address_svg__a"
      d="M19.5 4.5v-3a1 1 0 00-1-1h-13a2 2 0 000 4h14a1 1 0 011 1v17a1 1 0 01-1 1h-14a2 2 0 01-2-2v-19"
    />,
    <path
      className="book-address_svg__a"
      d="M17.5 18.719s-2.02-.893-3.432-1.415c-.926-.344-.794-1.907-.258-2.494a4.283 4.283 0 001.259-3.531A3 3 0 0012 8a3 3 0 00-3.07 3.279 4.283 4.283 0 001.259 3.531c.536.587.668 2.15-.258 2.494-1.412.523-3.431 1.415-3.431 1.415"
    />
  );

export default SvgBookAddress;
