import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookLibraryShelf = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-library-shelf_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-library-shelf_svg__a"
      d="M8.25 19.5a3.75 3.75 0 01-7.5 0V6.75M15.75 19.5a3.75 3.75 0 01-7.5 0M23.25 6.75V19.5a3.75 3.75 0 01-7.5 0"
    />,
    <path
      className="book-library-shelf_svg__a"
      d="M8.25 6.75a3.75 3.75 0 01-7.5 0v-6M15.75 6.75a3.75 3.75 0 01-7.5 0M23.25.75v6a3.75 3.75 0 01-7.5 0M4.5.75V7.5M12 .75V7.5M19.5.75V7.5M8.25 19.5V.75M15.75 19.5V.75"
    />
  );

export default SvgBookLibraryShelf;
