import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchClasses, selectClasses } from './classSlice';

//get the class names from the classSlices object and render them to the broswer

const ClassSelect = () => {
  const dispatch = useDispatch();
  const classes = useSelector(state => state.classSelect);

  const { settingID } = useParams();
  console.log(`settingID is: ${settingID} `);

  useEffect(() => {
    dispatch(fetchClasses(settingID));
  }, [dispatch]);

  return (
    <div className='classesContainer'>
      <h1>{'> Choose your class'}</h1>
      <div className='classList'>
        {classes.map(aClass => (
          <Link key={aClass.id} to={`/chat`}>
            <div className='singleClass'>
              <section>
                <h2> {aClass.name.toUpperCase()}</h2>
              </section>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClassSelect;
