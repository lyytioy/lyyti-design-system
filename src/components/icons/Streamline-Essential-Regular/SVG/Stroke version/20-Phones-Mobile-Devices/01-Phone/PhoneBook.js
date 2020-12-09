import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneBook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-book_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="phone-book_svg__a"
      x={2.25}
      y={0.763}
      width={18}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="phone-book_svg__a"
      d="M23.25 3.013v3M23.25 9.013v3M23.25 15.013v3M11.972 17.148h.005a2.591 2.591 0 003.2.526l.447-.251a.864.864 0 00.328-1.176l-1.06-1.877a.864.864 0 00-1.176-.328.863.863 0 01-1.176-.329L10.845 10.7a.864.864 0 01.328-1.176.864.864 0 00.327-1.174l-1.057-1.881a.864.864 0 00-1.176-.329l-.447.252A2.591 2.591 0 007.612 9.4v.006a23.393 23.393 0 004.36 7.742zM.75 5.263h3M.75 14.263h3M.75 9.763h3M.75 18.763h3"
    />
  );

export default SvgPhoneBook;
