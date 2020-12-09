import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderZip = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-zip_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-zip_svg__a"
      d="M17.75 12.5a.25.25 0 11-.25-.25.25.25 0 01.25.25M17.75 15a.25.25 0 11-.25-.25.25.25 0 01.25.25M17.75 17.5a.25.25 0 11-.25-.25.25.25 0 01.25.25M17.75 19.75a.25.25 0 11-.25-.25.25.25 0 01.25.25"
    />,
    <path
      className="folder-zip_svg__a"
      d="M11.736 5a1 1 0 01-.894-.553l-.948-1.894A1 1 0 009 2H1.5a1 1 0 00-1 1v18a1 1 0 001 1h21a1 1 0 001-1V6a1 1 0 00-1-1z"
    />,
    <path
      className="folder-zip_svg__a"
      d="M18.5 5l.489 3.611a1.479 1.479 0 01-1.468 1.663h-.06a1.479 1.479 0 01-1.468-1.663L16.354 5"
    />
  );

export default SvgFolderZip;
