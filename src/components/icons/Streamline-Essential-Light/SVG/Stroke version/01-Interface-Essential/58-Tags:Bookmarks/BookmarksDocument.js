import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookmarksDocument = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bookmarks-document_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="bookmarks-document_svg__a"
      d="M11.5 1.5h11a1 1 0 011 1v20a1 1 0 01-1 1h-21a1 1 0 01-1-1v-20a1 1 0 011-1h3"
    />,
    <path
      className="bookmarks-document_svg__a"
      d="M11.5 10.5c0 .55-.3.661-.659.248L8 7.5l-2.844 3.246c-.363.414-.659.3-.659-.247v-9a1 1 0 011-1h5a1 1 0 011 1zM14.5 6.499h6M14.5 10.499h6M3.5 14.499h17M3.5 18.499h16.497"
    />
  );

export default SvgBookmarksDocument;
