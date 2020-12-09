import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModule = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".module_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="module_svg__a"
      d="M22.751 4.254a1 1 0 01.749.968v12.524a1 1 0 01-.684.949L11.83 22.357a1 1 0 01-.658-.009L1.158 18.706a1 1 0 01-.658-.94V5.222a1 1 0 01.749-.968l10.5-2.722a.993.993 0 01.5 0zM11.5 7.467v15"
    />,
    <path className="module_svg__a" d="M23.227 4.536L11.5 7.467.77 4.54" />
  );

export default SvgModule;
