import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMailboxHouse = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mailbox-house_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="mailbox-house_svg__a"
      d="M23.25 4.5L19.543.793A1 1 0 0018.836.5H5.164a1 1 0 00-.707.293L.75 4.5h10.5l4-4"
    />,
    <path
      className="mailbox-house_svg__a"
      d="M13.75 2v9.5h-11a1 1 0 01-1-1v-6M20.75 2v8.5a1 1 0 01-1 1h-6"
    />,
    <path
      className="mailbox-house_svg__a"
      d="M15.75 3.5h3v2h-3zM18.75 8.5v1M9.75 23.5v-12h3v12"
    />
  );

export default SvgMailboxHouse;
