import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCss1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-css-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-css-1_svg__a"
      d="M19.5 12.5V6.478A5.975 5.975 0 0013.525.5H1.5a1 1 0 00-1 1v21a1 1 0 001 1h4"
    />,
    <path
      className="file-css-1_svg__a"
      d="M14.5.584V4.5a1 1 0 001 1h3.92M11.5 23.5a4 4 0 110-8M23.5 15.5h-2.146a1.854 1.854 0 00-.829 3.512l1.95.975a1.854 1.854 0 01-.829 3.513H19.5M17.5 15.5h-2.146a1.854 1.854 0 00-.829 3.512l1.95.975a1.854 1.854 0 01-.829 3.513H13.5"
    />
  );

export default SvgFileCss1;
