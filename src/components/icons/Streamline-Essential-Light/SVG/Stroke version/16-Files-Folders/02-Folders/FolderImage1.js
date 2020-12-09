import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderImage1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-image-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-image-1_svg__a"
      d="M11.736 5a1 1 0 01-.894-.553l-.948-1.894A1 1 0 009 2H1.5a1 1 0 00-1 1v18a1 1 0 001 1h21a1 1 0 001-1V6a1 1 0 00-1-1z"
    />,
    <path
      className="folder-image-1_svg__a"
      d="M7 17l2.45-3.151a1 1 0 011.274-.206L12.5 15l1.663-2.14a1 1 0 011.587.067L18.5 17z"
    />,
    <circle className="folder-image-1_svg__a" cx={8.5} cy={9.5} r={1.5} />
  );

export default SvgFolderImage1;
