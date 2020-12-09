import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMailboxPost1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mailbox-post-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="mailbox-post-1_svg__a"
      d="M5.25 5.25h13.5v18H5.25zM3 5.25h18M3.75 23.25h16.5M18.75 5.25H5.25a4.5 4.5 0 014.5-4.5h4.5a4.5 4.5 0 014.5 4.5zM9 8.25h6"
    />,
    <path
      className="mailbox-post-1_svg__a"
      d="M15.75 23.25h-7.5v-9a1.5 1.5 0 011.5-1.5h4.5a1.5 1.5 0 011.5 1.5z"
    />,
    <path
      className="mailbox-post-1_svg__a"
      d="M12 15.75a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgMailboxPost1;
