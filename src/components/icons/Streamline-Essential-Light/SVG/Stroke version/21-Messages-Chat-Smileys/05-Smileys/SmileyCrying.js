import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyCrying = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-crying_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-crying_svg__a"
      d="M6.035 9.07A7.5 7.5 0 018.105 7M18.509 9.07A7.535 7.535 0 0016.439 7M21.76 18.5a11.5 11.5 0 111.468-10"
    />,
    <path
      className="smiley-crying_svg__a"
      d="M22.605 14.167a1.834 1.834 0 01-3.667 0c0-1.013 1.834-3.667 1.834-3.667s1.833 2.654 1.833 3.667zM7.772 18a4.5 4.5 0 119 0"
    />
  );

export default SvgSmileyCrying;
