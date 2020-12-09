import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCogApproved = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cog-approved_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cog-approved_svg__a"
      d="M16.42 4.751a11.729 11.729 0 00-2.92-1V1.5a1 1 0 00-1-1h-1a1 1 0 00-1 1v2.249a11.736 11.736 0 00-2.921 1l-1.59-1.587a1 1 0 00-1.414 0L3.161 4.577a1 1 0 000 1.414L4.75 7.58a11.821 11.821 0 00-1 2.921H1.5a1 1 0 00-1 1v1a1 1 0 001 1h2.246a11.821 11.821 0 001 2.921l-1.59 1.59a1 1 0 000 1.414l1.419 1.414a1 1 0 001.414 0l1.589-1.59a11.763 11.763 0 002.922 1v2.25a1 1 0 001 1h1a1 1 0 001-1v-2.245a11.759 11.759 0 002.92-1l1.591 1.589a1 1 0 001.414 0l1.414-1.414a1 1 0 000-1.414l-1.589-1.59a11.821 11.821 0 001-2.921h2.25a1 1 0 001-1v-1a1 1 0 00-1-1h-2.247c-.121-.5-.286-1.151-.491-1.755"
    />,
    <path className="cog-approved_svg__a" d="M23.5.501l-11.5 14-4-4.5" />
  );

export default SvgCogApproved;
