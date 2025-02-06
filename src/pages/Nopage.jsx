import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Nopage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);
    return ()=>setInterval(timer)
  }, []);
  return <div>Nopage</div>;
};

export default Nopage;
