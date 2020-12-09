import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileHtml1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-html-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-html-1_svg__a"
      d="M19.5 12.5V6.478A5.975 5.975 0 0013.525.5H1.5a1 1 0 00-1 1v11"
    />,
    <path
      className="file-html-1_svg__a"
      d="M14.5.584V4.5a1 1 0 001 1h3.92M7.5 15.504h4M5.5 15.504v8M1.5 23.504v-8M1.5 19.504h4M9.5 15.504v8M13.5 23.504v-8l2 4 2-4v8M19.5 15.5V22a1.5 1.5 0 001.5 1.5h2.5"
    />
  );

export default SvgFileHtml1;
