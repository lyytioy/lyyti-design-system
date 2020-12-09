import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRankingWinner = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M10.5 11.25a.75.75 0 010-1.5h.75V6h-.75a.75.75 0 010-1.5h.75c.827 0 1.5.673 1.5 1.5v3.75h.75a.75.75 0 010 1.5h-3z" />,
    <path d="M2.25 24A2.252 2.252 0 010 21.75V10.5a2.252 2.252 0 012.25-2.25h4.5v-6A2.252 2.252 0 019 0h6a2.252 2.252 0 012.25 2.25v10.5h4.5A2.252 2.252 0 0124 15v6.75A2.252 2.252 0 0121.75 24H2.25zm19.5-1.5a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-4.5v8.25h4.5zm-6 0V2.25A.75.75 0 0015 1.5H9a.75.75 0 00-.75.75V22.5h7.5zM2.25 9.75a.75.75 0 00-.75.75v11.25c0 .414.336.75.75.75h4.5V9.75h-4.5z" />
  );

export default SvgRankingWinner;
