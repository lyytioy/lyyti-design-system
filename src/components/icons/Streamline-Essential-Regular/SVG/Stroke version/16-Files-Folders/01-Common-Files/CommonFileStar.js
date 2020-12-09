import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="common-file-star_svg__a"
      d="M17.956 11.68L19.5 15h2.99a.735.735 0 01.517 1.283l-2.6 2.563 1.44 3.313a.785.785 0 01-1.117.982l-3.48-1.958-3.48 1.961a.785.785 0 01-1.117-.982l1.44-3.313-2.6-2.563A.734.734 0 0112.008 15h3l1.541-3.323a.8.8 0 011.407.003z"
    />,
    <path
      className="common-file-star_svg__a"
      d="M8.25 20.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V8.25"
    />
  );

export default SvgCommonFileStar;
