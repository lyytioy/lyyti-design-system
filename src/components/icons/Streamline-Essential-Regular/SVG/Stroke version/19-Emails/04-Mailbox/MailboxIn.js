import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMailboxIn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mailbox-in_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="mailbox-in_svg__a"
      d="M12.75 18.75v4.5M3.75 8.25h16.5a3 3 0 013 3V18a.75.75 0 01-.75.75H6.75v-7.5a3 3 0 00-3-3z"
    />,
    <path
      className="mailbox-in_svg__a"
      d="M6.75 18.75H1.5A.75.75 0 01.75 18v-6.75a3 3 0 016 0zM11.25 11.25V.75M11.25 5.25h5.25a2.25 2.25 0 000-4.5h-5.25z"
    />
  );

export default SvgMailboxIn;
