import React, { useState, useEffect } from 'react'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'


function App() {
    const [github_username, setGithubusername] = useState('')
    const [techs, setTechs] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)
        },
        (err) => {
          console.log(err)
        },
        {
          timeout: 30000,
        }
      )
    }, [])  

    async function handleAddDev(e) {
      e.preventDefault()
      
    }

    return (
        <div id="app">
          <aside>
            <strong>Register</strong>
            <form onSubmit={handleAddDev}>
              <div className="input-block">
                <label htmlFor="dataset">Github user</label>
                <input 
                  name="dataset" 
                  id="dataset" 
                  required 
                  value={github_username}
                  onChange={e => setGithubusername(e.target.value)}
                />
              </div>
              
              <div className="input-block">
                <label htmlFor="techs">Technologies</label>
                <input 
                  name="techs" 
                  id="techs" 
                  required 
                  value={techs}
                  onChange={e => setTechs(e.target.value)}
                />
              </div>

              <div className="input-group">
                <div className="input-block">
                  <label htmlFor="latitude">Latitude</label>
                  <input 
                    type="number" 
                    name="latitude" 
                    id="latitude" 
                    required 
                    value={latitude}
                    onChange={e => setLatitude(e.target.value)}
                  />
                </div>
                <div className="input-block">
                  <label htmlFor="longitude">Longitude</label>
                  <input 
                    type="number" 
                    name="longitude" 
                    id="longitude" 
                    required 
                    value={longitude}
                    onChange={e => setLongitude(e.target.value)}
                  />
                </div>
              </div>

              <button type="submit">Save</button>
            </form>
          </aside>
          <main>
            <ul>
              <li className="dev-item">
                <header>
                  <img src="https://avatars2.githubusercontent.com/u/1564559?s=460&v=4" alt="Rafael Soutelino"/>
                  <div className="user-info">
                    <strong>Rafael Soutelino</strong>
                    <span>ReactJS, React Native, Node.js</span>
                  </div>
                </header>
                <p>Biography bla bla bla</p>
                <a href="https://github.com/rsoutelino">Access Github profile</a>
              </li>
              <li className="dev-item">
                <header>
                  <img src="https://avatars2.githubusercontent.com/u/1564559?s=460&v=4" alt="Rafael Soutelino"/>
                  <div className="user-info">
                    <strong>Rafael Soutelino</strong>
                    <span>ReactJS, React Native, Node.js</span>
                  </div>
                </header>
                <p>Biography bla bla bla</p>
                <a href="https://github.com/rsoutelino">Access Github profile</a>
              </li>
              <li className="dev-item">
                <header>
                  <img src="https://avatars2.githubusercontent.com/u/1564559?s=460&v=4" alt="Rafael Soutelino"/>
                  <div className="user-info">
                    <strong>Rafael Soutelino</strong>
                    <span>ReactJS, React Native, Node.js</span>
                  </div>
                </header>
                <p>Biography bla bla bla</p>
                <a href="https://github.com/rsoutelino">Access Github profile</a>
              </li>
              <li className="dev-item">
                <header>
                  <img src="https://avatars2.githubusercontent.com/u/1564559?s=460&v=4" alt="Rafael Soutelino"/>
                  <div className="user-info">
                    <strong>Rafael Soutelino</strong>
                    <span>ReactJS, React Native, Node.js</span>
                  </div>
                </header>
                <p>Biography bla bla bla</p>
                <a href="https://github.com/rsoutelino">Access Github profile</a>
              </li>
            </ul>
          </main>
        </div>

    )
}

export default App;