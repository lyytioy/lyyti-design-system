import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEnvelopePigeon = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".envelope-pigeon_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="envelope-pigeon_svg__a"
      d="M15.745 20.616c5.785.394 7.505-4.116 7.505-4.116s-1.5.75-5.25-1.5a32.127 32.127 0 01-1.571-1.017C24 10.5 22.5 2.25 22.5 2.25S17.25 4.5 15.75 6c-.953.953-1.824 4.086-2.25 5.25-1.945-1.28-3.75-2.25-6-1.5a3.156 3.156 0 00-2.25 3.75l-.75 2.25h2.25"
    />,
    <path
      className="envelope-pigeon_svg__a"
      d="M1.55 15.75h-.8v7.5h12v-7.5h-2.4"
    />,
    <path
      className="envelope-pigeon_svg__a"
      d="M.75 16.5l6 3.75 6-3.75M8.625 12a.375.375 0 11-.375.375.375.375 0 01.375-.375M20.398 19.648L21.75 21M17.593 20.593L19.5 22.5M10.463 9.693A9.4 9.4 0 019 5.25a9.507 9.507 0 011.5-4.5 14.194 14.194 0 013 4.5"
    />
  );

export default SvgEnvelopePigeon;
