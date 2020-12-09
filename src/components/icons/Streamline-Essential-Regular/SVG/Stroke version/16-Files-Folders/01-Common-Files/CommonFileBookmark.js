import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileBookmark = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-bookmark_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="common-file-bookmark_svg__a"
      d="M12.023.75v10.5l-3-2.25-3 2.25V.75"
    />,
    <path
      className="common-file-bookmark_svg__a"
      d="M22.477 21.75a1.5 1.5 0 01-1.5 1.5H3.023a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h15a1.5 1.5 0 011.047.426l2.955 2.883a1.5 1.5 0 01.452 1.074z"
    />
  );

export default SvgCommonFileBookmark;
