import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="network-upload_svg__a"
      d="M1.897 17.5H9.5M2.51 5.5h18.985M11 11.5H.509M11.376 23.484A11.5 11.5 0 1123.336 10M11.268.526c-6 6.5-5.892 14.958.108 22.958M12.729.526A16.134 16.134 0 0116.994 9"
    />,
    <circle className="network-upload_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="network-upload_svg__a"
      d="M17.5 20.5v-6M17.5 14.5l-2.25 2.25M17.5 14.5l2.25 2.25"
    />
  );

export default SvgNetworkUpload;
