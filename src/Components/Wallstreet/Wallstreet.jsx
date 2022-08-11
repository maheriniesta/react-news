import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Wallstreet() {
  let [getNewsWal,setNewsWal]=useState([]);
  async function getnewsWall(){
    let {data} = await axios.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5165bce6a664437cab0604685c6f8ab5");
    setNewsWal(data.articles);
  }
  useEffect(()=>{
    getnewsWall();
  },[])

  return (
    <>
    <h2 className=' text-center py-5 text-uppercase'>wall street</h2>
    <div className="row">
      <div className="col-md-8">
        <div>
          <a href="https://www.wsj.com/articles/us-inflation-july-2022-consumer-price-index-11660077986?mod=hp_lead_pos1"><h3 className='mb-3'>U.S. Inflation Eased Slightly to 8.5% in July</h3></a>
          <a href="https://www.wsj.com/articles/us-inflation-july-2022-consumer-price-index-11660077986?mod=hp_lead_pos1"><h5 className='mb-5'>CPI held close to its highest annual rate in four decades despite easing energy costs</h5></a>
          <img src="./66.png" alt="" className='w-100'/>
          <p className='my-5'>Price pressures eased across energy categories, with gasoline down 7.7% in July from the prior month. Grocery prices rose at the fastest annual pace since 1979</p>
          <ul className='mb-5'>
            <a href="https://www.wsj.com/livecoverage/stock-market-news-today-08-10-2022-inflation-cpi"><li>Live Markets Updates: Stocks Rally After Data</li></a>
            <a href="https://www.wsj.com/livecoverage/stock-market-news-today-08-10-2022-inflation-cpi/card/how-markets-are-reacting-to-the-cpi-report-b93LweeekI2XxmB8512M"><li className='my-3'>How Markets Are Reacting</li></a>
            <a href="https://www.wsj.com/livecoverage/stock-market-news-today-08-10-2022-inflation-cpi/card/forget-that-75-basis-point-rate-increase-in-september-iE8AxtYzotYU0iL2Jk1B"><li>Forget That 75-Basis-Point Rate Increase in September</li></a>
            <a href="https://www.wsj.com/articles/inflation-tracker-cpi-data-prices-11657717467"><li className='my-3'>Build Your Own Basket to Track Inflation</li></a>
            <a href="https://www.wsj.com/articles/social-security-benefits-are-heading-for-the-biggest-increase-in-40-years-11660138256"><li >Social Security Benefits Head for Biggest Gain in 40 Years</li></a>
          </ul>
        </div>
      </div>
      <div className="col-md-4">
        <div>
         <a href="https://www.wsj.com/market-data/quotes/index/DJIA"> <img src="./19.png" alt="" className='w-100'/></a>
          <div className='line w-100 my-4'></div>
          
          <a href="https://www.wsj.com/news/opinion?mod=hp_opin_strap"><h3 className=' text-warning'>OPINION <i className="fa-solid fa-angle-right ms-4" /></h3></a>
          <a href="https://www.wsj.com/articles/the-fbis-dangerous-donald-trump-search-mar-a-lago-merrick-garland-justice-department-11660074118?mod=hp_opin_pos_1"><h4>The FBI’s Dangerous Search at Trump’s Mar-a-Lago</h4>
          <p>By The Editorial Board | Review and Outlook</p></a>
          <div className='line w-100 my-4'></div>
          <a href="https://www.wsj.com/articles/tilting-at-climate-windmills-chuck-schumer-joe-manchin-tax-climate-bill-bjorn-lomborg-11659993292?mod=hp_opin_pos_2#cxrecs_s"><h4>Tilting at Climate Windmills</h4>
          <p>By The Editorial Board | Review and Outlook</p></a>
          <div className='line w-100 my-4'></div>
          <a href="https://www.wsj.com/articles/whistles-start-to-blow-at-the-fbi-trump-mar-a-lago-hunter-biden-russia-disinformation-briefing-leak-grassley-johnson-crossfire-hurricane-11660071125?mod=hp_opin_pos_3#cxrecs_s"><h4>Whistles Start to Blow at the FBI</h4>
          <p>By Thomas J. Baker | Commentary</p></a>
          <div className='line w-100 my-4'></div>

        </div>
      </div>
    </div>
    

  <div className="row">
    

    {getNewsWal.map((neww,index)=>
    <div className='col-md-3' key={index}>
      <div>
        <img src={neww.urlToImage} alt="" className='w-100 img--h' />
        <h3 className='h6 mt-3 text-center'>{neww.title}</h3>
        <a href={neww.url} className='btn btn-info text-capitalize mb-3 '>see more</a>
      </div>
    </div>
    )}
  </div>
  </>
  )
}
