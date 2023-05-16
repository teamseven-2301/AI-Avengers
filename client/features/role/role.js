import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// o: selectRoles is not being used
import { fetchRoles, selectRoles } from './roleSlice';

import { Link, useParams, useLocation } from 'react-router-dom';

const RoleSelect = () => {
  const dispatch = useDispatch();
  const roles = useSelector(state => state.roleSelect);

  const location = useLocation();
  const { settingName } = location.state;

  // o: it looks like these are not being used
  const [roleName, setRoleName] = useState('');
  const [setting, seSettting] = useState('');

  const { settingID } = useParams();

  // o: please avoid doing this, you should be using useNavigate, you
  //  can import this from react-router-dom
  function goBack() {
    window.history.back();
  }

  useEffect(() => {
    dispatch(fetchRoles(settingID));
  }, [dispatch]);

  return (
    <>
      <>
        <div className='rolesContainer'>
          <h2>{'> Choose your role'}</h2>

          <div className='roleList'>
            {roles.map(aRole => (
              <Link
                to={`/chat`}
                state={{ roleName: aRole.name, setting: settingName }}
                key={aRole.id}
              >
                <div className='singleRole'>
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
