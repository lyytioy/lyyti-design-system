import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPenWrite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pen-write_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="pen-write_svg__a"
      d="M19.5 10v11.5a2 2 0 01-2 2h-15a2 2 0 01-2-2v-17a2 2 0 012-2h10.931"
    />,
    <path
      className="pen-write_svg__a"
      d="M12.54 13.581l-3.536 1.415 1.415-3.536 9.192-9.192 2.121 2.121-9.192 9.192z"
    />,
    <path
      className="pen-write_svg__a"
      d="M21.732 4.389l-2.121-2.121 1.061-1.061a1.5 1.5 0 112.121 2.121zM10.419 11.46l2.121 2.121M19.611 2.268a2.036 2.036 0 00-2.879 0L14.5 4.5h-1M22.793 1.207L23.5.5M9.004 14.996L8 16"
    />
  );

export default SvgPenWrite;
