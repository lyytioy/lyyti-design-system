import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneBook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-book_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-book_svg__a"
      d="M11.409 11.16a1.26 1.26 0 000-1.783l-1.337-1.339a1.264 1.264 0 00-1.785 0l-.734.735a1.888 1.888 0 00-.238 2.38 29.28 29.28 0 008.2 8.2 1.892 1.892 0 002.381-.239l.733-.733a1.261 1.261 0 000-1.784l-1.338-1.338a1.261 1.261 0 00-1.784 0l-.446.445a30.008 30.008 0 01-4.1-4.1z"
    />,
    <path
      className="phone-book_svg__a"
      d="M22 .5H5a2 2 0 000 4h16a1 1 0 011 1v17a1 1 0 01-1 1H5a2 2 0 01-2-2v-19M5 2.5h16M2 7.5h2M2 10.5h2M2 13.5h2M2 16.5h2M2 19.5h2"
    />
  );

export default SvgPhoneBook;
