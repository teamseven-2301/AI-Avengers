import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchClasses, selectClasses } from './classSlice';

//get the class names from the classSlices object and render them to the broswer

const ClassSelect = () => {
  const dispatch = useDispatch();
  const classes = useSelector(selectClasses);

  useEffect(() => {
    dispatch(fetchClasses());
  }, [dispatch]);

  return (
    <div className='test'>
      <div>
        {classes.map(classx => {
          return <span>{classx.name}</span>;
        })}
      </div>
    </div>
  );
};

export default ClassSelect;
