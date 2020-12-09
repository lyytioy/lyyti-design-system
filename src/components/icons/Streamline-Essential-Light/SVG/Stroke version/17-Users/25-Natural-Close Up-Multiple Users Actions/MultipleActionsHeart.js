import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-heart_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-heart_svg__cls-1"
      d="M18.643 23.5L14.5 19.182a2.45 2.45 0 01-.459-2.828 2.449 2.449 0 013.922-.636l.676.676.676-.676a2.449 2.449 0 013.922.636 2.45 2.45 0 01-.458 2.828zM.5 13.5a7.092 7.092 0 01.565-2.7c.4-.8 2.063-1.349 4.153-2.123.565-.21.472-1.685.222-1.96a4.169 4.169 0 01-1.085-3.232A2.725 2.725 0 017 .5a2.725 2.725 0 012.645 2.985A4.169 4.169 0 018.56 6.718c-.25.275-.343 1.75.222 1.96 2.09.774 3.754 1.326 4.153 2.123a7.092 7.092 0 01.565 2.7zM10.912.737A2.573 2.573 0 0112 .5a2.725 2.725 0 012.645 2.985 4.169 4.169 0 01-1.085 3.233c-.25.275-.343 1.75.222 1.96 2.09.774 3.754 1.326 4.153 2.123a5.723 5.723 0 01.487 1.718"
    />
  );

export default SvgMultipleActionsHeart;
