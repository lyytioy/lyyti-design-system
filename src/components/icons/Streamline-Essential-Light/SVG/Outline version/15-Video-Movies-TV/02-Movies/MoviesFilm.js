import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoviesFilm = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M3.5 24c-.827 0-1.5-.673-1.5-1.5v-21C2 .673 2.673 0 3.5 0h17c.827 0 1.5.673 1.5 1.5v21c0 .827-.673 1.5-1.5 1.5h-17zm0-23a.5.5 0 00-.5.5v21a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-21a.5.5 0 00-.5-.5h-17z" />,
    <path d="M8 11.01c-.551 0-1-.449-1-1v-6c0-.551.449-1 1-1h8c.552 0 1 .449 1 1v6c0 .551-.448 1-1 1H8zm0-1h8v-6H8v6zM8 21.01c-.551 0-1-.448-1-1v-6c0-.552.449-1 1-1h8a1 1 0 011 1v6a1 1 0 01-1 1H8zm0-1h8v-6H8v6z" />,
    <circle cx={5} cy={4} r={0.75} />,
    <circle cx={5} cy={8} r={0.75} />,
    <circle cx={5} cy={12} r={0.75} />,
    <circle cx={5} cy={16} r={0.75} />,
    <circle cx={5} cy={20} r={0.75} />,
    <circle cx={19} cy={4} r={0.75} />,
    <circle cx={19} cy={8} r={0.75} />,
    <circle cx={19} cy={12} r={0.75} />,
    <circle cx={19} cy={16} r={0.75} />,
    <circle cx={19} cy={20} r={0.75} />
  );

export default SvgMoviesFilm;
