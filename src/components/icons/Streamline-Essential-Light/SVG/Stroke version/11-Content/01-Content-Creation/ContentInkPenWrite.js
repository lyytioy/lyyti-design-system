import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentInkPenWrite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-ink-pen-write_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="content-ink-pen-write_svg__a"
      d="M18.328 5.671a4 4 0 00-5.657 0c-1.1 1.1-2.491 5.695-3.083 7.983a.622.622 0 00.758.758c2.288-.592 6.878-1.98 7.982-3.084a4 4 0 000-5.657z"
    />,
    <circle
      className="content-ink-pen-write_svg__a"
      cx={15.5}
      cy={8.5}
      r={1}
    />,
    <path
      className="content-ink-pen-write_svg__a"
      d="M14.796 9.204L9.75 14.25M19.5.5l4 4L21 6l-3-3L19.5.5zM17.5 5l1-1.5M20.5 5.5l-1.5 1M8 15.5H4.5a2 2 0 000 4h12a2 2 0 010 4H.5"
    />
  );

export default SvgContentInkPenWrite;
