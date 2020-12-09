import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookClose = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-close_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="book-close_svg__a"
      d="M12 7.512l10-5v14.882a1 1 0 01-.553.894L12 23.012l-9.447-4.724A1 1 0 012 17.394V2.512z"
    />,
    <path
      className="book-close_svg__a"
      d="M19.999.988l-8 4.048-8-4.048M12 7.512v15.5"
    />
  );

export default SvgBookClose;
