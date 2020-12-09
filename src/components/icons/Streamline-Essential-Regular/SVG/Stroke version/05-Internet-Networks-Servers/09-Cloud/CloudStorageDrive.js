import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudStorageDrive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-storage-drive_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cloud-storage-drive_svg__a"
      d="M15 19.5a.375.375 0 10.375.375A.375.375 0 0015 19.5"
    />,
    <path
      className="cloud-storage-drive_svg__a"
      d="M15.374 23.251a3.375 3.375 0 000-6.75h-8.25a3.375 3.375 0 000 6.75z"
    />,
    <path
      className="cloud-storage-drive_svg__a"
      d="M18.489 18.577l-1.971-4.73A3 3 0 0013.749 12h-5a3 3 0 00-2.769 1.847l-1.971 4.73"
    />,
    <path
      className="cloud-storage-drive_svg__a"
      d="M20.883 15.056a4.873 4.873 0 10-5.273-8.191 7.5 7.5 0 10-12.927 6.412"
    />
  );

export default SvgCloudStorageDrive;
