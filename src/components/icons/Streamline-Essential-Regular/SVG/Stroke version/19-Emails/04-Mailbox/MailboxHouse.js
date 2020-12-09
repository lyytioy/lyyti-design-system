import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMailboxHouse = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mailbox-house_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="mailbox-house_svg__a"
      d="M23.071 8.25L20.26 1.221a.751.751 0 00-.7-.471H4.079a.749.749 0 00-.7.471l-2.4 6a.75.75 0 00.7 1.029h8.884a.751.751 0 00.7-.471L14.071.75"
    />,
    <path
      className="mailbox-house_svg__a"
      d="M21.571 4.5v6.75a1.5 1.5 0 01-1.5 1.5h-16.5a1.5 1.5 0 01-1.5-1.5v-3M15.571 5.25h3M12.571 12.75v10.5M9.571 12.75v10.5"
    />
  );

export default SvgMailboxHouse;
