import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-text_svg__a"
      d="M22 4.5H9a1 1 0 01-.72-.306L6.938 2.806a1 1 0 00-.72-.306H2.786A1.286 1.286 0 001.5 3.786V15.5"
    />,
    <rect
      className="folder-text_svg__a"
      x={4.5}
      y={7.5}
      width={18}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="folder-text_svg__a"
      d="M7.5 11.5h12M7.5 14.5h5M7.5 17.5h5M15.5 15.5v-1h4v1M17.5 14.5v4M16.5 18.5h2"
    />
  );

export default SvgFolderText;
