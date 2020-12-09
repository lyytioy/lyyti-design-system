import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookmarksDocument = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bookmarks-document_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="bookmarks-document_svg__a"
      d="M5.25 2.249h-3a1.5 1.5 0 00-1.5 1.5v18a1.5 1.5 0 001.5 1.5h19.5a1.5 1.5 0 001.5-1.5v-18a1.5 1.5 0 00-1.5-1.5h-10.5"
    />,
    <path
      className="bookmarks-document_svg__a"
      d="M11.25 11.249L8.25 9l-3 2.25V1.5A.75.75 0 016 .749h4.5a.75.75 0 01.75.75zM5.25 18.749h10.5M5.25 14.249h13.5M18.75 9.749h-4.5"
    />
  );

export default SvgBookmarksDocument;
