import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="network-upload_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="network-upload_svg__a"
      d="M17.25 20.25v-6M17.25 14.25L15 16.5M17.25 14.25l2.25 2.25M10.484 23.149a11.251 11.251 0 1112.537-13.42"
    />,
    <path
      className="network-upload_svg__a"
      d="M9.289 22.921C7.768 20.689 6.75 16.633 6.75 12S7.768 3.312 9.289 1.079M.775 11.25h9.523M2.999 5.25H21M2.048 17.25h5.166M14.711 1.079a16.993 16.993 0 012.3 7.147"
    />
  );

export default SvgNetworkUpload;
