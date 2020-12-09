import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudStorageDrive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-storage-drive_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-storage-drive_svg__a"
      d="M19.151 14.473S23.5 13.914 23.5 9.5a4.991 4.991 0 00-5.18-4.992A6.989 6.989 0 005.022 7.08 3.75 3.75 0 00.5 10.75c0 3.809 3.835 3.744 3.835 3.744M21.5 21a2.5 2.5 0 01-2.5 2.5H5A2.5 2.5 0 012.5 21v-2.5h19z"
    />,
    <path
      className="cloud-storage-drive_svg__a"
      d="M2.5 18.5l2.333-5.092A1.7 1.7 0 016.25 12.5H17a1.935 1.935 0 011.5.863l3 5.137zM15 21.5h3"
    />
  );

export default SvgCloudStorageDrive;
