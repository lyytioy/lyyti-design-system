import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEarpodListen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".earpod-listen_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="earpod-listen_svg__a"
      d="M12 12.5a1.5 1.5 0 011.5 1.5M16.5 22.5a1 1 0 01-1 1h-1a1 1 0 01-1-1V14a5.9 5.9 0 01-2.5.5 5.712 5.712 0 01-4.241-1.821 1 1 0 01-.259-.672V6.993a1 1 0 01.259-.672A5.712 5.712 0 0111 4.5a5.268 5.268 0 015.5 5z"
    />,
    <path
      className="earpod-listen_svg__a"
      d="M9.25 9.25A.25.25 0 119 9.5a.25.25 0 01.25-.25M17 .5A6.5 6.5 0 0123.5 7M17 2.5A4.5 4.5 0 0121.5 7M7 .5A6.5 6.5 0 00.5 7M7 2.5A4.5 4.5 0 002.5 7"
    />
  );

export default SvgEarpodListen;
