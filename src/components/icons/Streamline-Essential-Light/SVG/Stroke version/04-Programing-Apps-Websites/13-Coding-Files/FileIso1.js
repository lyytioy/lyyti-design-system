import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileIso1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-iso-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-iso-1_svg__a"
      d="M19.5 12.5V6.478A5.975 5.975 0 0013.525.5H1.5a1 1 0 00-1 1v21a1 1 0 001 1h3"
    />,
    <path
      className="file-iso-1_svg__a"
      d="M14.5.584V4.5a1 1 0 001 1h3.92M9.5 15.504v8M7.5 23.504h4M7.5 15.504h4M17.5 15.5h-2.146a1.854 1.854 0 00-.829 3.512l1.95.975a1.854 1.854 0 01-.829 3.513H13.5M23.5 21.5a2 2 0 11-4 0v-4a2 2 0 114 0z"
    />
  );

export default SvgFileIso1;
