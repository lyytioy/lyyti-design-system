import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRankingWinnerBadge = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M20.75 8.75A8.75 8.75 0 107.5 16.24V23a1 1 0 001.708.707l2.615-2.616a.249.249 0 01.354 0l2.615 2.616A1 1 0 0016.5 23v-6.76a8.746 8.746 0 004.25-7.49zM12 16a7.25 7.25 0 117.25-7.25A7.258 7.258 0 0112 16z" />,
    <path d="M18 8.75a6 6 0 10-6 6 6.006 6.006 0 006-6zm-4.754 1.75a.5.5 0 110 1h-2a.5.5 0 010-1h.5v-4l-1.2.9a.5.5 0 11-.6-.8l1.2-.9a1 1 0 011.6.8v4z" />
  );

export default SvgRankingWinnerBadge;
