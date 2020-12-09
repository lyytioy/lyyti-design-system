import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="love-it-share_svg__a" cx={13.497} cy={18} r={2.25} />,
    <circle className="love-it-share_svg__a" cx={20.997} cy={21} r={2.25} />,
    <circle className="love-it-share_svg__a" cx={20.997} cy={13.5} r={2.25} />,
    <path
      className="love-it-share_svg__a"
      d="M15.422 16.845l3.65-2.19M15.585 18.835l3.325 1.33M8.223 16.5l-5.811-6.065a5.673 5.673 0 01-1.063-6.549 5.672 5.672 0 019.085-1.473L12 3.978l1.566-1.565a5.672 5.672 0 019.085 1.473 5.673 5.673 0 01.29 4.386"
    />
  );

export default SvgLoveItShare;
