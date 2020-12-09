import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMailboxIn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mailbox-in_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="mailbox-in_svg__a"
      d="M6.5 17.5h-5a1 1 0 01-1-1v-8a3 3 0 016 0z"
    />,
    <path
      className="mailbox-in_svg__a"
      d="M3.5 5.5h17a3 3 0 013 3v8a1 1 0 01-1 1h-16M13.5 17.5v6M2.5 15.5h2M4.5 5.5v-3M4.5.5h3v2h-3z"
    />
  );

export default SvgMailboxIn;
