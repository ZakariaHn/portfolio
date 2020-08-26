import React, { div } from "react";

const NameArea = (props) => {
  console.log(props);
  return (
    <div className="nameArea">
      <h5 className="name-info">I'm Zakaria Hamdan</h5>
      <p className={props.jobInfos}>
        Front/ Back-End Developer currenlty living in Germany.
      </p>
    </div>
  );
};

export default NameArea;
