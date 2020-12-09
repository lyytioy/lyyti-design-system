import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="email-action-download_svg__a"
      d="M18.75 9.75h3a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5H2.25a1.5 1.5 0 01-1.5-1.5v-10.5a1.5 1.5 0 011.5-1.5h3"
    />,
    <path
      className="email-action-download_svg__a"
      d="M23.25 12l-9.85 5.628a2.824 2.824 0 01-2.8 0L.75 12M12 .75v12"
    />,
    <path
      className="email-action-download_svg__a"
      d="M8.25 9.75l3.75 3 3.75-3"
    />
  );

export default SvgEmailActionDownload;
