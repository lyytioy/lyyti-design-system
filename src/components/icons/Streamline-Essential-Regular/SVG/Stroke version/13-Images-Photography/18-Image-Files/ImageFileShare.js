import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="image-file-share_svg__a" cx={13.5} cy={18} r={2.25} />,
    <circle className="image-file-share_svg__a" cx={21} cy={21} r={2.25} />,
    <circle className="image-file-share_svg__a" cx={21} cy={13.5} r={2.25} />,
    <path
      className="image-file-share_svg__a"
      d="M15.425 16.845l3.65-2.19M15.588 18.835l3.324 1.33M8.25 20.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V8.25"
    />,
    <path
      className="image-file-share_svg__a"
      d="M5.25 5.625A.375.375 0 114.875 6a.375.375 0 01.375-.375M12.856 10.82L11.25 8.25a.749.749 0 00-1.238-.014l-2 2.851L6.78 10.1a.75.75 0 00-1.093.169L3.75 14.25h4.5"
    />
  );

export default SvgImageFileShare;
