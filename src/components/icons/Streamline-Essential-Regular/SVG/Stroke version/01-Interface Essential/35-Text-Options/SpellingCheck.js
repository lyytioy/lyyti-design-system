import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSpellingCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".spelling-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="spelling-check_svg__a"
      d="M2.25 9.748h9M2.25 15.748v-10.5a4.5 4.5 0 019 0v10.5M9.22 20.028l3 3a.749.749 0 001.06 0l8.47-8.47v-.086"
    />
  );

export default SvgSpellingCheck;
