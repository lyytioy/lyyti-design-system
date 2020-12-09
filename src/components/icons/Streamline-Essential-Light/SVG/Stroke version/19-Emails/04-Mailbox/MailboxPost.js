import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMailboxPost = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mailbox-post_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="mailbox-post_svg__a" d="M9 18l1.5-3L9 12l7 3-7 3z" />,
    <path
      className="mailbox-post_svg__a"
      d="M7 .5h10a4 4 0 014 4v16H3v-16a4 4 0 014-4zM3 19.5v4M21 19.5v4"
    />,
    <path
      className="mailbox-post_svg__a"
      d="M6 .626V6.5h12V.626M8 9.5h8M6 6.5v14M18 6.5v14"
    />
  );

export default SvgMailboxPost;
