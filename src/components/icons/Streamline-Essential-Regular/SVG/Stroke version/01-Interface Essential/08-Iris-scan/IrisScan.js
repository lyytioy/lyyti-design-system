import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIrisScan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".iris-scan_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="iris-scan_svg__a"
      d="M12 5.251C7.969 5.184 3.8 8 1.179 10.885a1.663 1.663 0 000 2.226C3.742 15.935 7.9 18.817 12 18.749c4.1.068 8.257-2.814 10.824-5.638a1.663 1.663 0 000-2.226C20.2 8 16.031 5.184 12 5.251z"
    />,
    <path
      className="iris-scan_svg__a"
      d="M15.75 12A3.75 3.75 0 1112 8.25 3.75 3.75 0 0115.75 12zM.75 2.25l6 6M23.25 2.25l-6 6M.75 21.75l6-6M23.25 21.75l-6-6"
    />
  );

export default SvgIrisScan;
