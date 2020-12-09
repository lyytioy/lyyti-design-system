import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMailboxFull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mailbox-full_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="mailbox-full_svg__a"
      d="M12 18.75v4.5M21 8.25H6a3 3 0 00-3 3V18a.75.75 0 00.75.75H21zM15 11.25V.75M15 5.25h-4.5A1.5 1.5 0 019 3.75v-1.5a1.5 1.5 0 011.5-1.5H15z"
    />
  );

export default SvgMailboxFull;
