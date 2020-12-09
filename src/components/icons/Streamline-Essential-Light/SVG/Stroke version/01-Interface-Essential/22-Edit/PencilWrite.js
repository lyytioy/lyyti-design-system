import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPencilWrite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pencil-write_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="pencil-write_svg__a"
      d="M19.5 10v11.5a2 2 0 01-2 2h-15a2 2 0 01-2-2v-17a2 2 0 012-2h13"
    />,
    <path
      className="pencil-write_svg__a"
      d="M12.808 13.314l-3.536 1.414 1.414-3.536L19.879 2 22 4.121l-9.192 9.193z"
    />,
    <path
      className="pencil-write_svg__a"
      d="M22 4.121L19.879 2l1.06-1.061a1.5 1.5 0 012.122 2.122z"
    />
  );

export default SvgPencilWrite;
