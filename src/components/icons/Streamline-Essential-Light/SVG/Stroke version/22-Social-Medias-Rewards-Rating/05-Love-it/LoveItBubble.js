import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItBubble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-bubble_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="love-it-bubble_svg__a"
      d="M12.69 15.777a.953.953 0 01-1.384 0l-3.447-3.6A2.451 2.451 0 017.4 9.354a2.449 2.449 0 013.922-.636l.678.676.676-.676a2.449 2.449 0 013.922.636 2.449 2.449 0 01-.459 2.827z"
    />,
    <path
      className="love-it-bubble_svg__a"
      d="M22.812 11.272a1.077 1.077 0 010 1.455l-1.635 1.733.551 2.319A1.074 1.074 0 0121 18.038l-2.285.68L18.036 21a1.073 1.073 0 01-1.258.727l-2.318-.551-1.733 1.635a1.076 1.076 0 01-1.454 0L9.54 21.178l-2.319.551A1.073 1.073 0 015.963 21l-.68-2.284L3 18.038a1.073 1.073 0 01-.727-1.259l.551-2.318-1.636-1.733a1.077 1.077 0 010-1.455L2.823 9.54l-.551-2.319A1.075 1.075 0 013 5.962l2.285-.68L5.964 3a1.073 1.073 0 011.258-.727l2.318.551 1.733-1.635a1.074 1.074 0 011.454 0l1.733 1.633 2.319-.551A1.073 1.073 0 0118.037 3l.68 2.285L21 5.963a1.073 1.073 0 01.727 1.258l-.551 2.318z"
    />
  );

export default SvgLoveItBubble;
