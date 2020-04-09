import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class ahsin extends React.Component {
    constructor() {
      super();
      this.state = {color: "red"};
    }
    render() {
      return (
        <div>
            <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Charts
            </NavText>
            <NavItem eventKey="charts/linechart">
                <NavText>
                    Line Chart
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                    Bar Chart
                </NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>
        <h1 >Hafiz Ahsin Raza</h1>
    
        <p>
        Every year, Shab-e-Barat is observed on the night between the 14 and 15 of Sha'aban, the eighth month of the Islamic calendar. In Islam, Shab-e-Barat means the night of forgiveness, or Day of Atonement. It is considered to be the night when God forgives sinners.
    
    The festival falls in the run-up to Ramzan and this year, the month began on April 18.
    
    According to this, Shab-e-Barat takes place from dusk today, May 1, until dawn tomorrow.
        </p>
        </div>
      );
    }
  }
  export default ahsin;