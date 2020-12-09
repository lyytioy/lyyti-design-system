import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPrinter = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".printer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="printer_svg__a"
      d="M6.5 7.5h11M16.5 7.5h-9v-7h7l2 2v5zM6.25 18.5H3.383a1 1 0 01-.992-.876L1.5 10.5h21l-.891 7.124a1 1 0 01-.992.876H17.25"
    />,
    <path
      className="printer_svg__a"
      d="M16.5 5.5h3.323a1 1 0 01.928.629L22.5 10.5h-21l1.749-4.371a1 1 0 01.928-.629H7.5M7 15.5h9.5l2 8H5l2-8zM19.5 12.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M19.5 15.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M11.5 17.5H14M8.5 19.5h6M7.5 21.5H15"
    />
  );

export default SvgPrinter;
