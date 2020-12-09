import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="server-edit_svg__a"
      d="M5.251 4.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M5.251 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="server-edit_svg__a"
      d="M12.751 9.75h-7.5a4.5 4.5 0 010-9h12a4.5 4.5 0 012.458 8.27M8.251 18.75h-3a4.5 4.5 0 010-9M10.501 5.25h6.75M22.631 14.869L15 22.5l-3.75.75.75-3.75 7.63-7.631a2.116 2.116 0 012.992 0l.008.009a2.115 2.115 0 01.001 2.991zM10.501 14.25h3"
    />
  );

export default SvgServerEdit;
