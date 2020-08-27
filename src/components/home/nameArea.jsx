import React, { div } from "react";

const NameArea = (props) => {
  return (
    <div className="nameArea">
      <h5 className={props.name}>
        <span className={props.name_span}>I'm</span> Zakaria Hamdan
      </h5>
      <p className={props.jobInfos}>
        Front/ Back-End Developer currenlty living in Germany.
      </p>
    </div>
  );
};

export default NameArea;
