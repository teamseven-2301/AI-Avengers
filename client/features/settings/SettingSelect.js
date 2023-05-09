import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSettings } from './settingSelectSlice'

import { Link, useLocation } from 'react-router-dom'

const SettingSelect = () => {

const [settingName, setSettingName] = useState("");
const [settingID, setSettingID] = useState(NaN);


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
        {status === 'loading' ? (
          <div>LOADING....</div>

        ) : (

          settingsArray.map((setting) => (
            <Link state={{ chosenSetting: settingName }} key={setting.id} to={`/class/${setting.id}`}>

              <div onClick={async () => setSettingName(setting.name)}
              className='singleSetting'>
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
