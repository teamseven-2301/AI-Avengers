import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoles, selectRoles } from './roleSlice';

import { Link, useParams, useLocation } from 'react-router-dom';

const RoleSelect = () => {
  const dispatch = useDispatch();
  const roles = useSelector(state => state.roleSelect);

  const location = useLocation();
  const { settingName } = location.state;

  const [RoleName, setRoleName] = useState('');
  const [setting, seSettting] = useState('');

  const { settingID } = useParams();

  function goBack() {
    window.history.back();
  }

  useEffect(() => {
    dispatch(fetchRoles(settingID));
  }, [dispatch]);

  return (
    <>
      <>
        <div roleName='rolesContainer'>
          <h2>{'> Choose your role'}</h2>

          <div roleName='roleList'>
            {roles.map(aRole => (
              <Link
                to={`/chat`}
                state={{ roleName: aRole.name, setting: settingName }}
                key={aRole.id}
              >
                <div roleName='singleRole'>
                  <section>
                    <h3> {aRole.name.toUpperCase()}</h3>
                  </section>
                </div>
              </Link>
            ))}
            <div onClick={goBack} id='back-btn'>
              {'<'}
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default RoleSelect;
