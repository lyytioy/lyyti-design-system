import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerChoose = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-choose_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="server-choose_svg__a"
      d="M12.751 15a3 3 0 010 6h-9a3 3 0 010-6zM15.751 12a3 3 0 01-3 3h-9a3 3 0 010-6h9a3 3 0 013 3zM15.751 6a3 3 0 01-3 3h-9a3 3 0 010-6h9a3 3 0 013 3z"
    />,
    <path
      className="server-choose_svg__a"
      d="M3.751 5.625A.375.375 0 104.126 6a.375.375 0 00-.375-.375M3.751 11.625a.375.375 0 10.375.375.375.375 0 00-.375-.375M3.751 17.625a.375.375 0 10.375.375.375.375 0 00-.375-.375M9.001 6h3.75M9.001 12h3.75M9.001 18h3.75M18.751 7.5H21a2.25 2.25 0 010 4.5h-2.25M18.751 12H21a2.25 2.25 0 110 4.5h-2.25M18.751 16.5H21a2.25 2.25 0 110 4.5h-2.25"
    />
  );

export default SvgServerChoose;
