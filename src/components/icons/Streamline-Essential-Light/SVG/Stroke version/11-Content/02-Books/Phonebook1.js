import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhonebook1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phonebook-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phonebook-1_svg__a"
      d="M13.5 19.4c-1.394-1.394-.9-2.481-.147-3.235l.487-.487a1.241 1.241 0 011.754 0l2.1 2.105a.724.724 0 01-.239 1.183A7.231 7.231 0 018.032 9.54a.724.724 0 011.183-.24l2.105 2.105a1.241 1.241 0 010 1.754l-.487.487c-.753.753-1.838 1.246-3.23-.142"
    />,
    <path
      className="phonebook-1_svg__a"
      d="M21.5.5h-17a2 2 0 000 4h16a1 1 0 011 1v17a1 1 0 01-1 1h-16a2 2 0 01-2-2v-19M4.5 2.5h16"
    />
  );

export default SvgPhonebook1;
