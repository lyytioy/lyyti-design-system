import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentWrite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-write_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="content-write_svg__a"
      d="M12.5 20.5h-11a1 1 0 01-1-1v-18a1 1 0 011-1h14a1 1 0 011 1v5M6.5 3.5h6M6.5 6.5h6M6.5 9.5h1"
    />,
    <path
      className="content-write_svg__a"
      d="M3.5 3.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M3.5 6.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M3.5 9.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M14.609 10.353a3.562 3.562 0 00-.475-.286l-1.1-.549a1.924 1.924 0 00-1.979.155L9.343 10.9a2.424 2.424 0 00-.99 1.628l-.259 1.819M14 17.5l3 6M6.774 15.154L5 18l3.342-.288"
    />,
    <path
      className="content-write_svg__a"
      d="M11.951 15.5l5.77-3.535a1.5 1.5 0 00-1.567-2.558l-9.38 5.747 1.568 2.558 1.675-1.027"
    />,
    <path
      className="content-write_svg__a"
      d="M14.5 15.5H11a1 1 0 000 2h4.5M23.5 23.5l-7.038-10.764"
    />
  );

export default SvgContentWrite;
