import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgReadEmailCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z" />,
    <path d="M6.75 18a2.252 2.252 0 01-2.25-2.25v-7.5A2.252 2.252 0 016.75 6h10.5c1.213 0 2.222.988 2.248 2.201l.002.049v7.5A2.252 2.252 0 0117.25 18H6.75zM6 15.75c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75V9.525l-5.636 3.131a.759.759 0 01-.728 0L6 9.525v6.225zm6-4.608l5.894-3.274a.749.749 0 00-.644-.368H6.75a.749.749 0 00-.644.368L12 11.142z" />
  );

export default SvgReadEmailCircle;
