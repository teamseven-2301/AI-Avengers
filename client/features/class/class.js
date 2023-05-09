import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchClasses, selectClasses } from './classSelectSlice';

//get the class names from the classSlices object and render them to the broswer

const ClassSelect = () => {
  const dispatch = useDispatch();
  const classes = useSelector(state => state.classes);

  useEffect(() => {
    dispatch(fetchClasses());
  }, [dispatch]);

  console.log('********', classes);
  return (
    <div>
      <div>
        {classes.map((classx, index) => {
          return (
            <div key={index}>
              <button type='checkbox' id='class' name={classx.name} />
              <label>{classx.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClassSelect;
