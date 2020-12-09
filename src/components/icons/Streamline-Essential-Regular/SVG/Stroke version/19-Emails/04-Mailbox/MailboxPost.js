import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMailboxPost = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mailbox-post_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="mailbox-post_svg__a"
      d="M7.5.75A4.5 4.5 0 003 5.25v15h18v-15a4.5 4.5 0 00-4.5-4.5zM3 20.25v3M21 20.25v3M6.75.812V20.25M17.25.812V20.25M6.75 6.75h10.5"
    />,
    <path className="mailbox-post_svg__a" d="M10.5 11.25l3.75 2.25-3.75 2.25" />
  );

export default SvgMailboxPost;
