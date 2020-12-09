import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgViewSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M22 0H2a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2V2a2 2 0 00-2-2zm-2.552 13.615l-.3.318c-1.326 1.423-3.546 3.8-7.026 3.8-3.349 0-5.4-2.271-6.62-3.628-.161-.178-.31-.345-.452-.493a2 2 0 010-2.758c.142-.148.292-.315.453-.494 1.224-1.357 3.271-3.627 6.62-3.627 3.48 0 5.7 2.38 7.025 3.8l.3.32a2 2 0 010 2.762z" />,
    <path d="M12.25 8.236a4 4 0 104 4 4.005 4.005 0 00-4-4zm0 5.5a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5z" />
  );

export default SvgViewSquare;
