import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZipFileShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".zip-file-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="zip-file-share_svg__a" cx={13.5} cy={18} r={2.25} />,
    <circle className="zip-file-share_svg__a" cx={21} cy={21} r={2.25} />,
    <circle className="zip-file-share_svg__a" cx={21} cy={13.5} r={2.25} />,
    <path
      className="zip-file-share_svg__a"
      d="M15.425 16.845l3.65-2.19M15.588 18.835l3.324 1.33M10.226 4.557a1.951 1.951 0 01-.474 1.533 2.039 2.039 0 01-3 0 1.951 1.951 0 01-.474-1.533L6.75.75h3zM8.25 9.375a.375.375 0 11-.375.375.375.375 0 01.375-.375M8.25 13.125a.375.375 0 11-.375.375.375.375 0 01.375-.375M8.25 16.875a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <path
      className="zip-file-share_svg__a"
      d="M7.5 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V8.25"
    />
  );

export default SvgZipFileShare;
