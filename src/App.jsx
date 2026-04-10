import { useEffect, useState } from 'react'
import data from '../data'
import darkThemeIcon from './assets/images/icon-sun.svg'
import lightThemeIcon from './assets/images/icon-moon.svg'
import logo from './assets/images/logo.svg'
import Card from './components/Card';

function App() {

  const [extensions, setExtensions] = useState([]);
  const [filter, setFilter] = useState('all');
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    setExtensions(data)
  }, [])

  const filteredExtensions = extensions.filter(item => {
    if (filter === 'active') {
      return item.isActive;
    }
    if (filter === 'inactive') {
      return !item.isActive;
    }
    return true;
  })

  const toggleActive = (name) => {
    const updated = extensions.map((item) => {
      if (item.name === name) {
        return { ...item, isActive: !item.isActive }
      }
      return item;
    })
    setExtensions(updated);
  };

  const removeExt = (name) => {
    const updated = extensions.filter(item => item.name !== name);
    setExtensions(updated)
  }
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [theme]);

  return (
    <main className="app">
      <header className="header">
        <img src={logo} alt="logo" className="logo" />
        <button className="theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <img src={theme === 'dark' ? darkThemeIcon : lightThemeIcon} alt='dark-theme' className="dark-theme" />
        </button>
      </header>

      <section className="menu">
        <h2>Extensions List</h2>

        <div className="status-btns">
          <button
            className={`status ${filter === "all" ? "activebtn" : ""}`}
            onClick={() => setFilter("all")}
          >All </button>

          <button
            className={`status ${filter === "active" ? "activebtn" : ""}`}
            onClick={() => setFilter("active")}
          >Active </button>

          <button
            className={`status ${filter === "inactive" ? "activebtn" : ""}`}
            onClick={() => setFilter("inactive")}
          >Inactive </button>
        </div>
      </section>

      <section id="extensions-container">
        {filteredExtensions.map((extension) => {
          const { logo, name, description, isActive } = extension;

          return <Card key={name} logo={logo} name={name} isActive={isActive} description={description} toggle={toggleActive} remove={removeExt}/>
        })}
      </section>
    </main>
  )
}

export default App
