import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="server-lock_svg__a"
      d="M21.5 4.5a2 2 0 01-2 2h-17a2 2 0 01-2-2v-2a2 2 0 012-2h17a2 2 0 012 2zM2.5 12.5a2 2 0 01-2-2v-2a2 2 0 012-2h17a2 2 0 012 2V10"
    />,
    <path
      className="server-lock_svg__a"
      d="M4.75 3.25A.25.25 0 105 3.5a.25.25 0 00-.25-.25M8.25 3.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M4.75 9.25A.25.25 0 105 9.5a.25.25 0 00-.25-.25M8.25 9.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M12 18.5H2.5a2 2 0 01-2-2v-2a2 2 0 012-2h11"
    />,
    <path
      className="server-lock_svg__a"
      d="M4.75 15.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M8.25 15.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M23.5 22.5a1 1 0 01-1 1h-7a1 1 0 01-1-1v-6a1 1 0 011-1h7a1 1 0 011 1z"
    />,
    <circle className="server-lock_svg__a" cx={19} cy={19.563} r={1.25} />,
    <path className="server-lock_svg__a" d="M21.5 14a2.5 2.5 0 00-5 0v1.5h5z" />
  );

export default SvgServerLock;
