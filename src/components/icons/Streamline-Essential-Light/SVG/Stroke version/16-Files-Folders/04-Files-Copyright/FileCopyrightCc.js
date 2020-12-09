import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCopyrightCc = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-copyright-cc_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-copyright-cc_svg__a"
      d="M13.5 23.5h9a1 1 0 001-1V6.475A5.975 5.975 0 0017.525.5H5.5a1 1 0 00-1 1v7"
    />,
    <path
      className="file-copyright-cc_svg__a"
      d="M18.5.58V4.5a1 1 0 001 1h3.92"
    />,
    <circle className="file-copyright-cc_svg__a" cx={6.5} cy={17.5} r={6} />,
    <path
      className="file-copyright-cc_svg__a"
      d="M5.5 19.5a2.006 2.006 0 01-2-2 2.006 2.006 0 012-2M9.5 19.5a2.006 2.006 0 01-2-2 2.006 2.006 0 012-2"
    />
  );

export default SvgFileCopyrightCc;
