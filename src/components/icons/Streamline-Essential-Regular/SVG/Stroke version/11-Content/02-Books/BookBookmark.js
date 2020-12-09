import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookBookmark = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-bookmark_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-bookmark_svg__a"
      d="M12 4.057v17.682M15.49 3.184a16.546 16.546 0 00-2.947.782 1.61 1.61 0 01-1.085 0 13.881 13.881 0 00-9.587-.2A1.607 1.607 0 00.75 5.3v14.337A1.607 1.607 0 002.756 21.2a13.663 13.663 0 018.7.448 1.6 1.6 0 001.085 0 13.66 13.66 0 018.7-.448 1.608 1.608 0 002.006-1.559V5.3a1.607 1.607 0 00-1.118-1.53 16.908 16.908 0 00-2.365-.576"
    />,
    <path
      className="book-bookmark_svg__a"
      d="M19.875 11.261l-2.25-2.25-2.25 2.25v-7.5a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5z"
    />
  );

export default SvgBookBookmark;
