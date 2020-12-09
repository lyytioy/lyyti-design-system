import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerMail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-mail_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="server-mail_svg__a"
      d="M23.5 16v6.5a1 1 0 01-1 1h-10a1 1 0 01-1-1V16"
    />,
    <path
      className="server-mail_svg__a"
      d="M23.5 16v-.5a1 1 0 00-1-1h-10a1 1 0 00-1 1v.5l5.2 3.253a1.5 1.5 0 001.59 0zM5.5 20.5h3M8.501 15.5v5M3.25 20a.25.25 0 10.25.25.25.25 0 00-.25-.25M.75 20a.25.25 0 10.25.25.25.25 0 00-.25-.25M4.25 2.75A.25.25 0 104.5 3a.25.25 0 00-.25-.25M6.75 2.75A.25.25 0 107 3a.25.25 0 00-.25-.25"
    />,
    <path
      className="server-mail_svg__a"
      d="M17.5 3A2.5 2.5 0 0015 .5H3a2.5 2.5 0 000 5h12A2.5 2.5 0 0017.5 3zM4.25 7.75A.25.25 0 104.5 8a.25.25 0 00-.25-.25M6.75 7.75A.25.25 0 107 8a.25.25 0 00-.25-.25"
    />,
    <path
      className="server-mail_svg__a"
      d="M17.5 8A2.5 2.5 0 0015 5.5H3a2.5 2.5 0 000 5h12A2.5 2.5 0 0017.5 8zM4.25 12.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M6.75 12.75A.25.25 0 107 13a.25.25 0 00-.25-.25"
    />,
    <path
      className="server-mail_svg__a"
      d="M17 11.5a2.5 2.5 0 00-2-1H3a2.5 2.5 0 000 5h5.5"
    />
  );

export default SvgServerMail;
