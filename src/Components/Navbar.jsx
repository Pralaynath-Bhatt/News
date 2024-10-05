import React from 'react'
import Countrys from './countrySF.json'
 const Navbar = ({setCategory,setSelectedCountry}) => {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">News</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("general")}>General</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("technology")}>Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("business")}>Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("health")}>Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("science")}>Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("sports")}>Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</a>
        </li>    
      </ul>
    </div>
    <select>
    <option value="us" onClick={() => setSelectedCountry('us')}>United States</option>
                <option value="ca" onClick={() => setSelectedCountry('ca')}>Canada</option>
                <option value="gb" onClick={() => setSelectedCountry('gb')}>United Kingdom</option>
                <option value="au" onClick={() => setSelectedCountry('au')}>Australia</option>
                <option value="in" onClick={() => setSelectedCountry('in')}>India</option>
                <option value="jp" onClick={() => setSelectedCountry('jp')}>Japan</option>
                <option value="de" onClick={() => setSelectedCountry('de')}>Germany</option>
                <option value="fr" onClick={() => setSelectedCountry('fr')}>France</option>
                <option value="it" onClick={() => setSelectedCountry('it')}>Italy</option>
                <option value="es" onClick={() => setSelectedCountry('es')}>Spain</option>
                <option value="cn" onClick={() => setSelectedCountry('cn')}>China</option>
                <option value="br" onClick={() => setSelectedCountry('br')}>Brazil</option>
                <option value="za" onClick={() => setSelectedCountry('za')}>South Africa</option>
                <option value="mx" onClick={() => setSelectedCountry('mx')}>Mexico</option>
                <option value="ru" onClick={() => setSelectedCountry('ru')}>Russia</option>
                <option value="kr" onClick={() => setSelectedCountry('kr')}>South Korea</option>
                <option value="se" onClick={() => setSelectedCountry('se')}>Sweden</option>
                <option value="no" onClick={() => setSelectedCountry('no')}>Norway</option>
                <option value="fi" onClick={() => setSelectedCountry('fi')}>Finland</option>
                <option value="dk" onClick={() => setSelectedCountry('dk')}>Denmark</option>
                <option value="nl" onClick={() => setSelectedCountry('nl')}>Netherlands</option>
                <option value="be" onClick={() => setSelectedCountry('be')}>Belgium</option>
                <option value="at" onClick={() => setSelectedCountry('at')}>Austria</option>
                <option value="ch" onClick={() => setSelectedCountry('ch')}>Switzerland</option>
                <option value="pl" onClick={() => setSelectedCountry('pl')}>Poland</option>
                <option value="pt" onClick={() => setSelectedCountry('pt')}>Portugal</option>
                <option value="ie" onClick={() => setSelectedCountry('ie')}>Ireland</option>
                <option value="nz" onClick={() => setSelectedCountry('nz')}>New Zealand</option>
                <option value="sg" onClick={() => setSelectedCountry('sg')}>Singapore</option>
                <option value="my" onClick={() => setSelectedCountry('my')}>Malaysia</option>
                <option value="th" onClick={() => setSelectedCountry('th')}>Thailand</option>
                <option value="ph" onClick={() => setSelectedCountry('ph')}>Philippines</option>
                <option value="vn" onClick={() => setSelectedCountry('vn')}>Vietnam</option>
                <option value="id" onClick={() => setSelectedCountry('id')}>Indonesia</option>
                <option value="ae" onClick={() => setSelectedCountry('ae')}>United Arab Emirates</option>
                <option value="sa" onClick={() => setSelectedCountry('sa')}>Saudi Arabia</option>
                <option value="il" onClick={() => setSelectedCountry('il')}>Israel</option>
                <option value="eg" onClick={() => setSelectedCountry('eg')}>Egypt</option>
                <option value="ng" onClick={() => setSelectedCountry('ng')}>Nigeria</option>
                <option value="ke" onClick={() => setSelectedCountry('ke')}>Kenya</option>
                <option value="gh" onClick={() => setSelectedCountry('gh')}>Ghana</option>
                <option value="tz" onClick={() => setSelectedCountry('tz')}>Tanzania</option>
                <option value="ug" onClick={() => setSelectedCountry('ug')}>Uganda</option>
                <option value="pk" onClick={() => setSelectedCountry('pk')}>Pakistan</option>
                <option value="bd" onClick={() => setSelectedCountry('bd')}>Bangladesh</option>
                <option value="lk" onClick={() => setSelectedCountry('lk')}>Sri Lanka</option>
                <option value="tw" onClick={() => setSelectedCountry('tw')}>Taiwan</option>
                <option value="hk" onClick={() => setSelectedCountry('hk')}>Hong Kong</option>
                <option value="mo" onClick={() => setSelectedCountry('mo')}>Macau</option>
                </select>
  </div>
  </nav>
  )
}
export default Navbar;