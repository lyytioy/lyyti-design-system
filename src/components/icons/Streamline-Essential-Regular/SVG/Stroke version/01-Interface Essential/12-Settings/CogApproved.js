import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCogApproved = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cog-approved_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cog-approved_svg__a"
      d="M21.684 9.39a1.826 1.826 0 01-.539.876l-.972.878a1.828 1.828 0 000 2.714l.972.878a1.828 1.828 0 01-1.319 3.183l-1.308-.067a1.828 1.828 0 00-1.918 1.919l.067 1.308a1.828 1.828 0 01-3.184 1.321l-.878-.972a1.828 1.828 0 00-2.714 0l-.878.972a1.828 1.828 0 01-3.183-1.321l.07-1.308a1.828 1.828 0 00-1.919-1.919l-1.308.067a1.828 1.828 0 01-1.319-3.183l.972-.878a1.828 1.828 0 000-2.714l-.972-.878A1.828 1.828 0 012.67 7.083l1.308.067A1.828 1.828 0 005.9 5.231l-.07-1.308A1.828 1.828 0 019.013 2.6l.878.972a1.826 1.826 0 002.714 0l.878-.972a1.829 1.829 0 012.057-.46"
    />,
    <path
      className="cog-approved_svg__a"
      d="M7.6 10.641l2.513 3.351a1.5 1.5 0 002.347.066L23.248 1.251"
    />
  );

export default SvgCogApproved;
