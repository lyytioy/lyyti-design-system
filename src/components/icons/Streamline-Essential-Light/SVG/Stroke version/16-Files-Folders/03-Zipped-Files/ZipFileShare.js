import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZipFileShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".zip-file-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="zip-file-share_svg__a"
      d="M11.5 23.5h-10a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5"
    />,
    <path
      className="zip-file-share_svg__a"
      d="M7.255 8a.25.25 0 11.25.25.249.249 0 01-.25-.25M7.255 10.5a.25.25 0 11.25.25.249.249 0 01-.25-.25M7.255 13a.25.25 0 11.25.25.249.249 0 01-.25-.25M7.245 15.5a.25.25 0 11.25.25.25.25 0 01-.25-.25M7.245 18.021a.25.25 0 11.25.25.25.25 0 01-.25-.25M7.245 20.563a.25.25 0 11.25.25.249.249 0 01-.25-.25M8.989 4.111a1.488 1.488 0 01-.357 1.163 1.467 1.467 0 01-1.1.5H7.47a1.467 1.467 0 01-1.1-.5 1.488 1.488 0 01-.357-1.163L6.37.5H8.5z"
    />,
    <circle className="zip-file-share_svg__a" cx={13.75} cy={18.25} r={2.25} />,
    <circle className="zip-file-share_svg__a" cx={21.25} cy={21.25} r={2.25} />,
    <circle className="zip-file-share_svg__a" cx={21.25} cy={13.75} r={2.25} />,
    <path
      className="zip-file-share_svg__a"
      d="M15.675 17.095l3.65-2.19M15.838 19.085l3.324 1.33"
    />
  );

export default SvgZipFileShare;
