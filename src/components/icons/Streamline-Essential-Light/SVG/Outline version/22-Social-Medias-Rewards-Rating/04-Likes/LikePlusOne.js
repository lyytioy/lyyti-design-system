import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLikePlusOne = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.5 23A2.503 2.503 0 010 20.5v-17C0 2.121 1.121 1 2.5 1h19C22.878 1 24 2.121 24 3.5v17c0 1.378-1.122 2.5-2.5 2.5h-19zM1 20.5c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5V7H1v13.5zM23 6V3.5c0-.827-.673-1.5-1.5-1.5H17v4h6zm-7 0V2H8v4h8zM7 6V2H2.5C1.673 2 1 2.673 1 3.5V6h6z" />,
    <path d="M8.5 18a.5.5 0 01-.5-.5V15H5.5a.5.5 0 010-1H8v-2.5a.5.5 0 011 0V14h2.5a.5.5 0 010 1H9v2.5a.5.5 0 01-.5.5zM15.5 19.5a.5.5 0 01-.497-.555l.882-7.934-2.107 1.405a.497.497 0 01-.694-.139c-.074-.111-.101-.245-.074-.375a.496.496 0 01.213-.318l3-2a.496.496 0 01.538-.01c.164.1.257.289.236.482l-1 9a.5.5 0 01-.497.444z" />
  );

export default SvgLikePlusOne;
