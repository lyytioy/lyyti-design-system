import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="love-it-edit_svg__a"
      d="M10 19.152l-7.8-8.031a5.669 5.669 0 01-1.088-6.607A5.839 5.839 0 0110.4 3.027L12 4.486l1.6-1.459a5.839 5.839 0 019.287 1.487 5.651 5.651 0 01.576 3.2"
    />,
    <path
      className="love-it-edit_svg__a"
      d="M15.7 20.951l-4.2 1.2 1.2-4.2 7.179-7.179a2.121 2.121 0 013 3zM18.979 11.672l3 3M12.7 17.951l3 3"
    />
  );

export default SvgLoveItEdit;
