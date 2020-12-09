import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHyperlink3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hyperlink-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="hyperlink-3_svg__a"
      d="M12.47 18.105l-4.227 4.227a3.987 3.987 0 01-5.637 0l-.939-.939a3.985 3.985 0 010-5.635l6.106-6.107a3.987 3.987 0 015.637 0l.939.94"
    />,
    <path
      className="hyperlink-3_svg__a"
      d="M11.53 5.893l4.227-4.226a3.985 3.985 0 015.637 0l.939.938a3.985 3.985 0 010 5.635l-6.106 6.107a3.985 3.985 0 01-5.637 0l-.939-.94"
    />
  );

export default SvgHyperlink3;
