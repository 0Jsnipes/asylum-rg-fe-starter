import React from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
// for the purposes of testing PageNav
//import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>
      <div className='graphs-section'>
        <div className='graph-cont'><img className='graph-img'src={GrantRatesByOfficeImg} alt='A bar graph'/>
        <h1 className='h1-under-img'>Search Grant Rates By Office</h1>
        </div>
        <div className='graph-cont'>
        <img className='graph-img'src={GrantRatesByNationalityImg} alt='A circle graph'/>
        <h1 className='h1-under-img'>Search Grant Rates By Nationality</h1> 
        </div>
        <div className='graph-cont'>
        <img className='graph-img'src={GrantRatesOverTimeImg} alt='A line graph'/>
        <h1 className='h1-under-img'>Search Grant Rates Over Time</h1>
      </div>
      </div>
  
      <div className="under-graphs-btn-container" //changed class name
      >
        <Button //added the classes to buttons
          className='ant-btn'
          type="default"
          style={{background:'#404C4A', color:'#FFFFFF'}}
          onClick={() => history.push('/graphs')}
        >
          View the Data
        </Button>
        <Button
          className='ant-btn'
          type="default"
          style={{background:'#404C4A', color:'#FFFFFF'}}
          onClick={() => history.push('/graphs')}
        >
          Download the Data
          </Button>
        </div>


      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>
      <div> 
        <h1 className='bottom-header1'>Systemic Disparity Insights</h1>
        <div className='bottom-section' /*put bottom section under the header to be able to style the bottom section properly */>
        <div className='bottom-information'>
          <h2 className='bottom-header2'>36%</h2>
        By the end of the Trump administration, the average asylum office grant rate had fallen 36 percent from an average of 44 percent in fiscal year 2016 to 28 percent in fiscal year 2020.
        </div>
        <div className='bottom-information'>
          <h2 className='bottom-header2'>5%</h2>
        The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.
        </div>
        <div className='bottom-information'>
          <h2 className='bottom-header2'>6x Lower</h2>
        Between fiscal year 2017 and 2020, the New York asylum office’s average grant rate was six times lower than the San Francisco asylum office.
        </div>
        </div>

        <a //added link to readmore button and styled it
         href='https://humanrightsfirst.org/library/uscis-records-reveal-systemic-disparities-in-asylum-decisions/'>
          <div className='btn-container'>
            <button
            className='ant-btn'
            type='default'
            style={{background:'#404C4A', color:'#FFFFFF'}}
            > 
            Read More 
            </button>
          </div>
        </a>

        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
