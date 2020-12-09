import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMailboxFull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mailbox-full_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="mailbox-full_svg__a"
      d="M18.5 6.5h2v10H.5v-6a4 4 0 014-4h10M11.5 16.5v7M16.5 9.5v-9M11.5.5h5v3h-5zM22.5 15.5h-2v-6h3l-1 6z"
    />
  );

export default SvgMailboxFull;
