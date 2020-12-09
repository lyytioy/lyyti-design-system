import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralPhoneBook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-phone-book_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-phone-book_svg__cls-1"
      d="M17.5 17.5s-2.02-.892-3.432-1.415c-.926-.344-.794-1.907-.258-2.494a4.283 4.283 0 001.259-3.531A3 3 0 0012 6.78a3 3 0 00-3.069 3.279 4.283 4.283 0 001.259 3.531c.536.587.668 2.15-.258 2.494C8.52 16.607 6.5 17.5 6.5 17.5"
    />,
    <path
      className="single-neutral-phone-book_svg__cls-1"
      d="M20.5 22.5a1 1 0 01-1 1h-16V.5h16a1 1 0 011 1zM3.5.5h-2a1 1 0 00-1 1v21a1 1 0 001 1h2M20.5 2.5h1a2.006 2.006 0 012 2v2h-3M20.5 6.5h3v5h-3M20.5 11.5h3v5h-3M20.5 16.5h3v2a2.006 2.006 0 01-2 2h-1"
    />
  );

export default SvgSingleNeutralPhoneBook;
