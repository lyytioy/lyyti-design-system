import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="email-action-upload_svg__a"
      d="M15 9.75h6.75a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5H2.25a1.5 1.5 0 01-1.5-1.5v-10.5a1.5 1.5 0 011.5-1.5H9"
    />,
    <path
      className="email-action-upload_svg__a"
      d="M23.25 12l-9.85 5.628a2.824 2.824 0 01-2.8 0L.75 12M12 12.75v-12M15.75 3.75L12 .75l-3.75 3"
    />
  );

export default SvgEmailActionUpload;
