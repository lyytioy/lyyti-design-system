import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileHtml = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-html_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-html_svg__a"
      d="M19.5 9.5V6.478A5.975 5.975 0 0013.525.5H1.5a1 1 0 00-1 1v21a1 1 0 001 1h17a1 1 0 001-1v-1"
    />,
    <path
      className="file-html_svg__a"
      d="M14.5.584V4.5a1 1 0 001 1h3.92M7.5 12.504v6M4.5 18.504v-6M4.5 15.504h3M9.5 12.504h4M11.5 12.504v6M15.5 18.504v-6l1.5 3 1.5-3v6M20.5 12.5v5a1 1 0 001 1h2"
    />
  );

export default SvgFileHtml;
