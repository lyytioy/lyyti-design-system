import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="server-warning_svg__a"
      d="M5.251 4.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M10.501 5.25h6.75M5.251 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="server-warning_svg__a"
      d="M5.251 9.75a4.5 4.5 0 010-9h12a4.5 4.5 0 013.073 7.787M9.751 18.75h-4.5a4.5 4.5 0 010-9H13.5M10.501 14.25h.75M17.251 20.25a.375.375 0 10.375.375.375.375 0 00-.375-.375M17.251 18v-3"
    />,
    <path
      className="server-warning_svg__a"
      d="M23.064 20.682a1.774 1.774 0 01-1.587 2.568h-8.452a1.774 1.774 0 01-1.587-2.568l4.226-8.451a1.774 1.774 0 013.174 0z"
    />
  );

export default SvgServerWarning;
