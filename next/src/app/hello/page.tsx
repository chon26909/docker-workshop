"use client";
import { getHello } from "@/services/hello";
import React, { useEffect, useState } from "react";

const HelloPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const handleHello = async () => {
      const res = await getHello();
      setData(res.data);
    };

    handleHello();
  }, []);

  return (
    <div>
      <h1>Hello from server</h1>
      <pre>data:{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default HelloPage;
