import React from "react";

const EnvPage = () => {
  return <pre>{JSON.stringify(process.env, null, 2)}</pre>;
};

export default EnvPage;
