import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEarpodsTap = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".earpods-tap_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="earpods-tap_svg__a"
      d="M6.75 11.944v-1.745M3.75 6.824a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="earpods-tap_svg__a"
      d="M9.75 7.2v15a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V11.944a5.255 5.255 0 01-6-1.071V3.525a5.25 5.25 0 019 3.674zM23.25 8.7l-5.773-4.89a1.5 1.5 0 10-1.953 2.277l3.759 3.862a1.963 1.963 0 01.345 2.244 1.963 1.963 0 01-2.634.878l-.5-.341a1.582 1.582 0 00-2.312.6 1.582 1.582 0 00.665 2.1l8.4 4.522M13.5 8.3a4.5 4.5 0 01.751-7.252"
    />
  );

export default SvgEarpodsTap;
