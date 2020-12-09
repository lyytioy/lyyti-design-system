import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileLight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-light_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="image-file-light_svg__a"
      d="M22.5 21.75a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5V2.25A1.5 1.5 0 013 .75h15.045a1.5 1.5 0 011.048.426l2.954 2.883a1.5 1.5 0 01.453 1.074z"
    />,
    <circle className="image-file-light_svg__a" cx={14.25} cy={15} r={3.75} />,
    <path
      className="image-file-light_svg__a"
      d="M12.504 11.681L9.408 6.107 5.25 14.25h5.326"
    />
  );

export default SvgImageFileLight;
