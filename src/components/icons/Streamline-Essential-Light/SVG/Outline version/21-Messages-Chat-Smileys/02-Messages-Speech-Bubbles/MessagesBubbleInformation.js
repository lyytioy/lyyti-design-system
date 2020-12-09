import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleInformation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.583 23.5a.5.5 0 01-.462-.692l2.256-5.413A9.211 9.211 0 01.083 10.51C.083 4.988 5.466.5 12.083.5s12 4.486 12 10-5.383 10-12 10c-1.38 0-2.749-.202-4.068-.599l-6.183 3.533a.507.507 0 01-.249.066zm10.5-22c-6.065 0-11 4.037-11 9a8.192 8.192 0 003.205 6.345.5.5 0 01.156.588l-1.836 4.405 5.098-2.913a.503.503 0 01.399-.043c1.287.41 2.625.618 3.977.618 6.065 0 11-4.037 11-9s-4.934-9-10.999-9z" />,
    <path d="M10.583 15.5a.5.5 0 010-1h1.5V9a.5.5 0 00-.5-.5h-1a.5.5 0 010-1h1c.827 0 1.5.673 1.5 1.5v5.5h1.5a.5.5 0 010 1h-4z" />,
    <circle cx={12.333} cy={5.75} r={0.75} />
  );

export default SvgMessagesBubbleInformation;
