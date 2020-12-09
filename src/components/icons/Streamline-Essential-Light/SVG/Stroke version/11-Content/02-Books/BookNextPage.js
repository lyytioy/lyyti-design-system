import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookNextPage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-next-page_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="book-next-page_svg__a"
      d="M12 4.983s2.4-2.626 10.493-2.731a.5.5 0 01.507.5v12.5l-4 4c-5.313.659-7 2.5-7 2.5V4.983S9.6 2.357 1.507 2.252a.5.5 0 00-.507.5v15.765a.5.5 0 00.493.5C9.6 19.12 12 21.748 12 21.748"
    />,
    <path
      className="book-next-page_svg__a"
      d="M19 19.245v-4a.5.5 0 01.5-.5H23"
    />
  );

export default SvgBookNextPage;
