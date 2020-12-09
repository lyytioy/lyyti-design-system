import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComputerBug = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".computer-bug_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="computer-bug_svg__a"
      d="M16.425 8.842a.468.468 0 00.458-.57 5 5 0 00-9.757-.043.5.5 0 00.488.613z"
    />,
    <path
      className="computer-bug_svg__a"
      d="M8 .844v1c.006 1.134.916 2.216 1.6 3.111M16.009.842v1C16 2.978 15.083 4.058 14.4 4.956M7 10.842v6c0 2.121 2.951 5.114 4.318 6.388a1 1 0 001.363 0C14.048 21.959 17 18.965 17 16.844v-6zM7 10.844H5.75c-1.385 0-2.286 1.036-3.25 2M7 14.846H5.75c-1.385 0-2.286 1.036-3.25 2"
    />,
    <path
      className="computer-bug_svg__a"
      d="M7.633 18.844H6.25c-1.385 0-2.286 1.037-3.25 2M17 10.844h1.25c1.385 0 2.286 1.036 3.25 2M17 14.846h1.25c1.385 0 2.286 1.036 3.25 2M16.367 18.844h1.383c1.385 0 2.286 1.037 3.25 2"
    />
  );

export default SvgComputerBug;
