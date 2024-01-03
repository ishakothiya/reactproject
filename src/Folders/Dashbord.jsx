import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../Folders/Css/Dashbord.css'
import HOC from "./HOC";

import React from 'react'
import 
{ BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import { FaReceipt } from "react-icons/fa6";
 import { PiBookOpenTextFill } from "react-icons/pi";
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, AreaChart, Area, ComposedChart } 
 from 'recharts';
 import { ImProfile } from "react-icons/im";
 import { IoBarChart } from "react-icons/io5";



function Dashbord (props) {
    // const navigate = useNavigate()

    // const close = ()=>{
    //     localStorage.removeItem('islogin' )
    //     props.setislogin(false)
    //     navigate('/login')
    // }

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

      // ===========piechart====================

      const data01 = [
        {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 300
        },
        {
          "name": "Group C",
          "value": 300
        },
        {
          "name": "Group D",
          "value": 200
        },
        {
          "name": "Group E",
          "value": 278
        },
        {
          "name": "Group F",
          "value": 189
        }
      ];
      const data02 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        },
        {
          "name": "Group E",
          "value": 3908
        },
        {
          "name": "Group F",
          "value": 4800
        }
      ];
     

    return (

        <main className='main-container ' style={{backgroundColor : '#151519'}}>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
            {/* <button type="button" onClick={close}>close</button> */}
        </div>

        <div className='main-cards'>

        <div data-v-2e41071b="" className="card card-statistics"><div data-v-2e41071b="" className="card-body"><div data-v-2e41071b="" className="clearfix"><div data-v-2e41071b="" className="float-left"><i data-v-2e41071b="" className="mdi mdi-cube text-danger icon-lg">
            <PiBookOpenTextFill/>
            </i></div><div data-v-2e41071b="" className="float-right"><p
             data-v-2e41071b="" className="mb-0 title text-right">Total Revenue</p><div data-v-2e41071b="" className="fluid-container">
                
                <h2 data-v-2e41071b="" className="font-weight-large text-right mb-10 px-10 Title" >$6,560</h2>
                
                </div></div></div><p data-v-2e41071b="" className="text-muted mt-3 mb-0"><i data-v-2e41071b="" aria-hidden="true" className="mdi mdi-alert-octagon mr-1"></i> 65% lower growth </p></div></div>


        <div data-v-2e41071b="" className="card card-statistics"><div data-v-2e41071b="" className="card-body"><div data-v-2e41071b="" className="clearfix"><div data-v-2e41071b="" className="float-left"><i data-v-2e41071b="" class="mdi mdi-receipt text-warning icon-lg">
        <FaReceipt />
            </i></div><div data-v-2e41071b="" className="float-right"><p
             data-v-2e41071b="" className="mb-0 title text-right">Orders</p><div data-v-2e41071b="" className="fluid-container">
                
                <h2 data-v-2e41071b="" className="font-weight-large text-right mb-10 px-10 Title" >$3455</h2>
                
                </div></div></div><p data-v-2e41071b="" className="text-muted mt-3 mb-0"><i data-v-2e41071b="" aria-hidden="true" className="mdi mdi-alert-octagon mr-1"></i>Product-wise sales </p></div></div>

        <div data-v-2e41071b="" className="card card-statistics"><div data-v-2e41071b="" className="card-body"><div data-v-2e41071b="" className="clearfix"><div data-v-2e41071b="" className="float-left"><i data-v-2e41071b="" class="mdi mdi-poll-box text-success icon-lg">
        <IoBarChart />
            </i></div><div data-v-2e41071b="" className="float-right"><p
             data-v-2e41071b="" className="mb-0 title text-right">Sales</p><div data-v-2e41071b="" className="fluid-container">
                
                <h2 data-v-2e41071b="" className="font-weight-large text-right mb-10 px-10 Title" >$5693</h2>
                
                </div></div></div><p data-v-2e41071b="" className="text-muted mt-3 mb-0"><i data-v-2e41071b="" aria-hidden="true" className="mdi mdi-alert-octagon mr-1"></i> Weekly Sales</p></div></div>

        <div data-v-2e41071b="" className="card card-statistics"><div data-v-2e41071b="" className="card-body"><div data-v-2e41071b="" className="clearfix"><div data-v-2e41071b="" className="float-left"><i data-v-2e41071b="" class="mdi mdi-account-box-multiple text-info icon-lg">
        <ImProfile />
            </i></div><div data-v-2e41071b="" className="float-right"><p
             data-v-2e41071b="" className="mb-0 title text-right">Employees</p><div data-v-2e41071b="" className="fluid-container">
                
                <h2 data-v-2e41071b="" className="font-weight-large text-right mb-10 px-10 Title" >$563</h2>
                
                </div></div></div><p data-v-2e41071b="" className="text-muted mt-3 mb-0"><i data-v-2e41071b="" aria-hidden="true" className="mdi mdi-alert-octagon mr-1"></i>Product-wise sales</p></div></div>   
        </div>

        <div className='charts'>

        <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>

            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
            <ComposedChart width={730} height={250} data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#f5f5f5" />
  <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
  <Bar dataKey="pv" barSize={20} fill="#413ea0" />
  <Line type="monotone" dataKey="uv" stroke="#ff7300" />
</ComposedChart>

            </ResponsiveContainer>
            


        </div>
    </main>
    );
}

export default  HOC(Dashbord) 