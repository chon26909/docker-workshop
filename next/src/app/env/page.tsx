import React from "react";

const EnvPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">env</h1>
      <pre>NEXT_PUBLIC_API_URL: {process.env.NEXT_PUBLIC_API_URL}</pre>
    </div>
  );
};

export default EnvPage;
