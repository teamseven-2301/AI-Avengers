import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchClasses } from './classSlice';

//get the class names from the classSlices object and render them to the broswer

const ClassSelect = () => {
  const dispatch = useDispatch();
  const classes = useSelector(state => state.classes);

  useEffect(() => {
    dispatch(fetchClasses());
  }, [dispatch]);

  return (
    <>
      <>
        {classes.map((classx, index) => {
          return (
            <div key={index} id='class-selection'>
              <Link to='/chat'>{classx.name}</Link>
            </div>
          );
        })}
      </>
    </>
  );
};

export default ClassSelect;
