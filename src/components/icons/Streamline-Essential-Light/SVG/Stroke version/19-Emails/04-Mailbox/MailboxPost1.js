import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMailboxPost1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mailbox-post-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="mailbox-post-1_svg__a"
      d="M19.5 7.5h-15a3.415 3.415 0 011 2.414V20.5l-1 3h15l-1-3V9.914a3.415 3.415 0 011-2.414z"
    />,
    <rect
      className="mailbox-post-1_svg__a"
      x={3.5}
      y={4.5}
      width={17}
      height={3}
      rx={1}
      ry={1}
    />,
    <path
      className="mailbox-post-1_svg__a"
      d="M17.975 3.975a8.45 8.45 0 00-11.95 0L5.5 4.5h13zM12 1.5v-1M8.5 13.5h7v4h-7zM8 10.5h8M5.5 20.5h13"
    />,
    <path className="mailbox-post-1_svg__a" d="M8.5 13.5l3.5 2 3.5-2" />
  );

export default SvgMailboxPost1;
