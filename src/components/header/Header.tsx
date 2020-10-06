import React from "react";
import './Header.scss'
// import Search from  '../Search'
const Header = () => {
  return (
    <div className="dev-u-padding-horizontal">
      <div className={`dev-grid-wrapper__div--column--4 dev-u-padding-horizontal`}>
      
          <div><a href="/" className="logo"><h1>React News</h1></a></div>  
          {/* <div>
            <Search />
          </div> */}
            
            
     
        
      </div>
    </div>
  );
};
export default Header;
