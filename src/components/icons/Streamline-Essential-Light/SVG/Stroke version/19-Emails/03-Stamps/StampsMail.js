import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgStampsMail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".stamps-mail_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="stamps-mail_svg__a" cx={12} cy={12} r={3.5} />,
    <path
      className="stamps-mail_svg__a"
      d="M15.4 18.063a7.162 7.162 0 01-3.555.937 7 7 0 11-.039-14c9.5 0 8.982 10.5 4.944 10.5a1.25 1.25 0 01-1.25-1.25V9"
    />,
    <path
      className="stamps-mail_svg__a"
      d="M.5 4.5H1a1.5 1.5 0 010 3H.5v3H1a1.5 1.5 0 010 3H.5v3H1a1.5 1.5 0 010 3H.5v3a1 1 0 001 1h3V23a1.5 1.5 0 013 0v.5h3V23a1.5 1.5 0 013 0v.5h3V23a1.5 1.5 0 013 0v.5h3a1 1 0 001-1v-3H23a1.5 1.5 0 010-3h.5v-3H23a1.5 1.5 0 010-3h.5v-3H23a1.5 1.5 0 010-3h.5v-3a1 1 0 00-1-1h-3V1a1.5 1.5 0 01-3 0V.5h-3V1a1.5 1.5 0 01-3 0V.5h-3V1a1.5 1.5 0 01-3 0V.5h-3a1 1 0 00-1 1z"
    />
  );

export default SvgStampsMail;
