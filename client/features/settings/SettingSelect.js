import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSettings } from './settingSelectSlice'

import { Link } from 'react-router-dom'

const SettingSelect = () => {

  const settingsArray = useSelector((state) => state.settingSelect.settings)
  const status = useSelector((state) => state.settingSelect.status)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSettings())
  }, [dispatch])

  return (
    <div className='settingsContainer'>
      <h1>{"> Choose your setting"}</h1>

      <br></br>

      <div className='settingList'>
        {/* o:
              this should ideally NOT be a an either or thing... in other words, 
              you should display loading if status is loading AND map through the list... let me explain
        */}
        {status === 'loading' ? (
          <div>LOADING....</div>
        ) : (
          settingsArray.map((setting) => (
            <Link key={setting.id} to={`/class/${setting.id}`}>
              <div className='singleClass'>
                <section>
                  <h2> {setting.name.toUpperCase() }</h2>
                </section>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}

export default SettingSelect
