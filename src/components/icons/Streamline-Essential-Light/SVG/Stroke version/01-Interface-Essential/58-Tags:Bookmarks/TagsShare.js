import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="tags-share_svg__a"
      d="M12.042 13.891l6.3-6.429a2.824 2.824 0 00.7-1.714v-4a1 1 0 00-1-1l-4.258.007a2.789 2.789 0 00-1.707.708L1.249 12.291a1 1 0 000 1.414l4.836 4.836a.99.99 0 001.407-.007l1.26-1.286"
    />,
    <circle className="tags-share_svg__a" cx={15.542} cy={4.248} r={1.5} />,
    <circle className="tags-share_svg__a" cx={13.292} cy={17.998} r={2.25} />,
    <circle className="tags-share_svg__a" cx={20.792} cy={20.998} r={2.25} />,
    <circle className="tags-share_svg__a" cx={20.792} cy={13.498} r={2.25} />,
    <path
      className="tags-share_svg__a"
      d="M15.217 16.843l3.65-2.19M15.38 18.833l3.324 1.33"
    />
  );

export default SvgTagsShare;
