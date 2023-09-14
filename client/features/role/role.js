import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoles } from "./roleSlice";
import { setRole } from "./selectedroleSlice";

import { useParams, useNavigate } from "react-router-dom";

const RoleSelect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const roles = useSelector((state) => state.roleSelect);
  const { settingID } = useParams();

  const backButton = () => {
    navigate("/settings");
  };

  const handleRoleClick = (roleName) => {
    dispatch(setRole(roleName));
    navigate("/chat");
  };

  useEffect(() => {
    dispatch(fetchRoles(settingID));
  }, [dispatch]);

  return (
    <>
      <>
        <div className="rolesContainer">
          <h2>{"> Choose your role"}</h2>

          <div className="roleList">
            {roles.map((aRole, index) => (
              <div
                className="singleRole"
                key={index}
                onClick={() => handleRoleClick(aRole)}
              >
                <section>
                  <h3> {aRole.name.toUpperCase()}</h3>
                </section>
              </div>
            ))}
            <div onClick={backButton} id="back-btn">
              {"<"}
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default RoleSelect;
