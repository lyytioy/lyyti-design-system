import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileRotate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-rotate_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="common-file-rotate_svg__a"
      d="M22.5 5.5V4A1.5 1.5 0 0021 2.5h-5"
    />,
    <path
      className="common-file-rotate_svg__a"
      d="M18 .5l-2 2 2 2M1.5 18.5V20A1.5 1.5 0 003 21.5h5"
    />,
    <path
      className="common-file-rotate_svg__a"
      d="M6 23.5l2-2-2-2M11 16.5H1.389a.889.889 0 01-.889-.889V1.389A.889.889 0 011.389.5h8.576a.893.893 0 01.629.26l2.146 2.146a.893.893 0 01.26.629V7.5"
    />,
    <path
      className="common-file-rotate_svg__a"
      d="M11.889 7.5h8.576a.893.893 0 01.629.26l2.146 2.146a.893.893 0 01.26.629v12.076a.889.889 0 01-.889.889H11.889a.889.889 0 01-.889-.889V8.389a.889.889 0 01.889-.889z"
    />
  );

export default SvgCommonFileRotate;
