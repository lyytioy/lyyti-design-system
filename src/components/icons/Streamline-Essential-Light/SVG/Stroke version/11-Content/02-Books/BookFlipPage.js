import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookFlipPage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-flip-page_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="book-flip-page_svg__a"
      d="M18 4.294a29.854 29.854 0 014.493-.372.5.5 0 01.507.5v15.766a.5.5 0 01-.493.5C14.4 20.791 12 23.419 12 23.419V6.653S9.6 4.028 1.507 3.922a.5.5 0 00-.507.5v15.766a.5.5 0 00.493.5C9.6 20.791 12 23.419 12 23.419"
    />,
    <path
      className="book-flip-page_svg__a"
      d="M12 22.919a6.96 6.96 0 016-6V1.081a.5.5 0 00-.662-.473C12.347 2.312 12 5.949 12 6.419"
    />
  );

export default SvgBookFlipPage;
