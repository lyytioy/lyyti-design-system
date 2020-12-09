import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudServer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-server_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-server_svg__a"
      d="M20.5 6.927a3.631 3.631 0 00-3.828-3.564A5.184 5.184 0 0012 .5a5.1 5.1 0 00-5.158 4.7A2.749 2.749 0 003.5 7.82c0 2.722 2.956 2.68 2.956 2.68h10.718s3.326-.421 3.326-3.573zM6.75 20.749A.25.25 0 107 21a.249.249 0 00-.25-.25M9.25 20.749A.25.25 0 109.5 21a.249.249 0 00-.25-.25"
    />,
    <path
      className="cloud-server_svg__a"
      d="M20.5 22a1.5 1.5 0 01-1.5 1.5H5A1.5 1.5 0 013.5 22v-2A1.5 1.5 0 015 18.5h14a1.5 1.5 0 011.5 1.5zM6.75 15.749A.25.25 0 107 16a.249.249 0 00-.25-.25M9.25 15.749A.25.25 0 109.5 16a.249.249 0 00-.25-.25"
    />,
    <path
      className="cloud-server_svg__a"
      d="M20.5 17a1.5 1.5 0 01-1.5 1.5H5A1.5 1.5 0 013.5 17v-2A1.5 1.5 0 015 13.5h14a1.5 1.5 0 011.5 1.5z"
    />
  );

export default SvgCloudServer;
