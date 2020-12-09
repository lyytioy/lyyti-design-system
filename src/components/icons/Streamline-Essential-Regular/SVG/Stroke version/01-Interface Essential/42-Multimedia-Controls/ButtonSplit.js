import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonSplit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-split_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="button-split_svg__a"
      d="M20.25 14.998l3 3-3 3M20.25 2.998l3 3-3 3"
    />,
    <path
      className="button-split_svg__a"
      d="M23.25 6H18c-3.75 0-6.75 6-6.75 6s3 6 6.75 6h5.25M11.25 11.998H.75"
    />
  );

export default SvgButtonSplit;
