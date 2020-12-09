import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhonebook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phonebook_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="phonebook_svg__a" d="M5.5 2.5h11a1 1 0 011 1v1" />,
    <path
      className="phonebook_svg__a"
      d="M19.5 4.5v-3a1 1 0 00-1-1h-13a2 2 0 000 4h14a1 1 0 011 1v17a1 1 0 01-1 1h-14a2 2 0 01-2-2v-19"
    />,
    <path
      className="phonebook_svg__a"
      d="M13.5 19.4c-1.394-1.394-.9-2.481-.147-3.235l.487-.487a1.241 1.241 0 011.754 0l2.106 2.105a.724.724 0 01-.239 1.183A7.231 7.231 0 018.034 9.54a.724.724 0 011.183-.24l2.1 2.105a1.241 1.241 0 010 1.754l-.487.487c-.753.753-1.838 1.246-3.23-.142"
    />
  );

export default SvgPhonebook;
