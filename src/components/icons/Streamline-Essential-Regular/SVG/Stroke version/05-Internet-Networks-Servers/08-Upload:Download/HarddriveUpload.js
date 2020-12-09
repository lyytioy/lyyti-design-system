import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHarddriveUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".harddrive-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="harddrive-upload_svg__a"
      d="M20.25 17.25a3 3 0 010 6H3.75a3 3 0 010-6z"
    />,
    <path
      className="harddrive-upload_svg__a"
      d="M7.5 6.751H6.144a3 3 0 00-2.925 2.333L.825 19.583M23.175 19.583l-2.394-10.5a3 3 0 00-2.925-2.333H16.5M19.125 19.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M9.75 20.25H4.5M15 3.75l-3-3-3 3M12 .75v12"
    />
  );

export default SvgHarddriveUpload;
