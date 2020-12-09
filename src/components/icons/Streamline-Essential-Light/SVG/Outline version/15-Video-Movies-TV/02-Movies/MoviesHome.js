import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoviesHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M3.5 24c-.551 0-1-.448-1-1v-4H2c-.827 0-1.5-.673-1.5-1.5v-2c0-.827.673-1.5 1.5-1.5h7.691l.5-1H3c-.827 0-1.5-.673-1.5-1.5v-10C1.5.673 2.173 0 3 0h18c.827 0 1.5.673 1.5 1.5v10c0 .827-.673 1.5-1.5 1.5h-7.191l.5 1H22c.827 0 1.5.673 1.5 1.5v2c0 .827-.673 1.5-1.5 1.5h-.5v4a1 1 0 01-1 1h-17zm17-1v-4h-17v4h1v-.5c0-.827.673-1.5 1.5-1.5h5c.827 0 1.5.673 1.5 1.5v.5h8zm-9 0v-.5a.5.5 0 00-.5-.5H6a.5.5 0 00-.5.5v.5h6zM22 18a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-9.5v3H22zM2 15a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h9.5v-3H2zm11.191-1l-.5-1h-1.382l-.5 1h2.382zM3 1a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h18a.5.5 0 00.5-.5v-10A.5.5 0 0021 1H3z" />,
    <circle cx={6.5} cy={16.5} r={0.75} />,
    <circle cx={17.5} cy={16.5} r={0.75} />
  );

export default SvgMoviesHome;
