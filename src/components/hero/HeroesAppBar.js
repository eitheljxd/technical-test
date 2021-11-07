import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
export const HeroesAppBar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  const hanleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div className="heroes__appbar">
      <span>
        <button className="btn" onClick={hanleLogout}>
          Logout
        </button>
      </span>
    </div>
  );
};
