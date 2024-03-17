import Navbar from './subcomponents/navbar.jsx'
import Functionality from './subcomponents/functionality.jsx'
import Toggler from './subcomponents/toggler.jsx'

export default function Banner({handleChangeCategory, handleChangeSearchKey}) {

  return (
    <header>

      <Navbar/>

      <h1>Eflyer</h1>
    
      <Functionality handleChangeCategory={handleChangeCategory} handleChangeSearchKey={handleChangeSearchKey}/>

      <Toggler/>

      <button>BUY NOW</button>

    </header>
  );
}