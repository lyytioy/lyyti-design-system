import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZipFileEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".zip-file-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="zip-file-edit_svg__a"
      d="M22.63 14.87L15 22.5l-3.75.75.75-3.75 7.63-7.63a2.114 2.114 0 012.992 0l.008.008a2.114 2.114 0 010 2.992zM10.226 4.557a1.951 1.951 0 01-.474 1.533 2.039 2.039 0 01-3 0 1.951 1.951 0 01-.474-1.533L6.75.75h3zM8.25 9.375a.375.375 0 01.375.375M7.875 9.75a.375.375 0 01.375-.375M8.25 10.125a.375.375 0 01-.375-.375M8.625 9.75a.375.375 0 01-.375.375M8.25 13.125a.375.375 0 01.375.375M7.875 13.5a.375.375 0 01.375-.375M8.25 13.875a.375.375 0 01-.375-.375M8.625 13.5a.375.375 0 01-.375.375M8.25 16.875a.375.375 0 01.375.375M7.875 17.25a.375.375 0 01.375-.375M8.25 17.625a.375.375 0 01-.375-.375M8.625 17.25a.375.375 0 01-.375.375"
    />,
    <path
      className="zip-file-edit_svg__a"
      d="M7.5 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V8.25"
    />
  );

export default SvgZipFileEdit;
