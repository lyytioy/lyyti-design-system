import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="tags-share_svg__a"
      d="M9 19.188a1.5 1.5 0 01-2.121 0L1.5 13.81a1.5 1.5 0 010-2.122L12 1.188a1.5 1.5 0 011.061-.439h5.378a1.5 1.5 0 011.5 1.5v5.379a1.5 1.5 0 01-.439 1.06"
    />,
    <path
      className="tags-share_svg__a"
      d="M16.189 4.124a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <circle className="tags-share_svg__a" cx={13.189} cy={17.999} r={2.25} />,
    <circle className="tags-share_svg__a" cx={20.689} cy={20.999} r={2.25} />,
    <circle className="tags-share_svg__a" cx={20.689} cy={13.499} r={2.25} />,
    <path
      className="tags-share_svg__a"
      d="M15.114 16.844l3.65-2.19M15.277 18.834l3.325 1.33"
    />
  );

export default SvgTagsShare;
