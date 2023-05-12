import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClasses, selectClasses } from './classSlice';

import { Link, useParams, useLocation } from 'react-router-dom';

//get the class names from the classSlices object and render them to the broswer

const ClassSelect = () => {
  const dispatch = useDispatch();
  const classes = useSelector(state => state.classSelect);

  const location = useLocation();
  const { settingName } = location.state;

  const [ClassName, setClassName] = useState('');
  const [setting, seSettting] = useState('');

  const { settingID } = useParams();

  useEffect(() => {
    dispatch(fetchClasses(settingID));
  }, [dispatch]);

  return (
    <div className='classesContainer'>
      <h1>{'> Choose your class'}</h1>

      <div className='classList'>
        {classes.map(aClass => (
          <Link
            to={`/chat`}
            state={{ className: aClass.name, setting: settingName }}
            key={aClass.id}
          >
            <div className='singleClass'>
              <section>
                <h3> {aClass.name.toUpperCase()}</h3>
              </section>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClassSelect;
