import './header.css';

function header() {
  const stackTokens = { childrenGap: 10 };
  return (
    <div className="header" >
      <i class="ms-Icon ms-font-l ms-Icon--WaffleOffice365 "></i>
      <span>Outlook</span>   
     {/* <i class="ms-Icon ms-font-l ms-Icon--Search "></i> */}
      <input type="search" placeholder="Search" />
      <div className="meetnow">
      <i class="ms-Icon ms-font-l ms-Icon--Video "></i><span>Meet Now</span>
      </div>
      
      
      
      
      <div className="icons">
        <i className="ms-Icon ms-font-l ms-Icon--OneNoteLogo"></i>
        <i className="ms-Icon ms-font-l ms-Icon--EventToDoLogo"></i>
        <i className="ms-Icon ms-font-l ms-Icon--Ringer "></i>
        <i className="ms-Icon ms-font-l ms-Icon--Settings "></i>
        <i className="ms-Icon ms-font-l ms-Icon--Help "></i>
        <i className="ms-Icon ms-font-l ms-Icon--Megaphone "></i>
      </div>
    </div>
  )
}

export default header
