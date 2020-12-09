import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCopyrightUser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-copyright-user_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-copyright-user_svg__a"
      d="M13.5 23.5h9a1 1 0 001-1V6.475A5.975 5.975 0 0017.525.5H5.5a1 1 0 00-1 1v7"
    />,
    <path
      className="file-copyright-user_svg__a"
      d="M18.5.58V4.5a1 1 0 001 1h3.92"
    />,
    <circle className="file-copyright-user_svg__a" cx={6.5} cy={17.5} r={6} />,
    <circle
      className="file-copyright-user_svg__a"
      cx={6.5}
      cy={16.5}
      r={2.5}
    />,
    <path
      className="file-copyright-user_svg__a"
      d="M2.677 22.125a4.5 4.5 0 017.646 0"
    />
  );

export default SvgFileCopyrightUser;
