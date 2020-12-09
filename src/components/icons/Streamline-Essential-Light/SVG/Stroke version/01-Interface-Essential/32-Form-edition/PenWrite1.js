import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPenWrite1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pen-write-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="pen-write-1_svg__a"
      d="M19 10.5h3.5a1 1 0 011 1v7a1 1 0 01-1 1h-21a1 1 0 01-1-1v-7a1 1 0 011-1H7"
    />,
    <path
      className="pen-write-1_svg__a"
      d="M12.782 12.547L8.54 13.959l1.414-4.243 8.132-8.131a2 2 0 012.828 2.828zM19.5 5.827l-2.829-2.828M12.782 12.547L9.954 9.716"
    />,
    <path
      className="pen-write-1_svg__a"
      d="M17.379 2.292a2 2 0 00-2.829 0l-2.121 2.121h-.707M8.54 13.959l-.707.707"
    />
  );

export default SvgPenWrite1;
