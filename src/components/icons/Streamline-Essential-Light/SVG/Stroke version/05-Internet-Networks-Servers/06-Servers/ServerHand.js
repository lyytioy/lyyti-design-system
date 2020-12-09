import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerHand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-hand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="server-hand_svg__a"
      d="M.5 23.5v-10M.5 15.5h7a3 3 0 013 3h6a3 3 0 013 3H.5zM10.5 18.5h-3M14.25 7.75a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="server-hand_svg__a"
      d="M23.5 8A2.5 2.5 0 0021 5.5h-8a2.5 2.5 0 000 5h8A2.5 2.5 0 0023.5 8zM14.25 12.75a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="server-hand_svg__a"
      d="M23.5 13a2.5 2.5 0 00-2.5-2.5h-8a2.5 2.5 0 000 5h8a2.5 2.5 0 002.5-2.5zM14.25 2.75a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="server-hand_svg__a"
      d="M23.5 3A2.5 2.5 0 0021 .5h-8a2.5 2.5 0 000 5h8A2.5 2.5 0 0023.5 3z"
    />
  );

export default SvgServerHand;
