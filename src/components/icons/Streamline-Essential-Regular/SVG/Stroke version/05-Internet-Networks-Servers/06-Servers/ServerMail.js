import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerMail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-mail_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="server-mail_svg__a"
      d="M4.5 3.375a.375.375 0 10.375.375.375.375 0 00-.375-.375M9.753 3.75h1.5M14.253 3.75h1.5M4.5 9.375a.375.375 0 10.375.375.375.375 0 00-.375-.375M9.753 9.75h1.5M14.253 9.75h1.5M4.501 18.75h3.752v-6M1.128 18a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="server-mail_svg__a"
      d="M18.753 3.75a3 3 0 01-3 3h-12a3 3 0 010-6h12a3 3 0 013 3zM9.751 12.75h-6a3 3 0 010-6h12a3.032 3.032 0 012.62 4.528M23.251 15.75v6a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5v-6"
    />,
    <path
      className="server-mail_svg__a"
      d="M23.251 15.75a1.5 1.5 0 00-1.5-1.5h-9a1.5 1.5 0 00-1.5 1.5L16.456 19a1.5 1.5 0 001.59 0z"
    />
  );

export default SvgServerMail;
