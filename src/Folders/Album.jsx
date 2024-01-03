import React, { useEffect } from 'react'
import HOC from './HOC'
import { useDispatch, useSelector } from 'react-redux';
import { getproject } from '../Redux/Action/action';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DataTable from 'react-data-table-component';

const Album = () => {

  const customStyles ={
    width : '100%',
    backgroundColor : '#1D1D21',
    headRow : {
      style:{
        backgroundColor :'#1D1D21',
        color : 'white',
        fontsize : '20px'
      }
    },
    headCells:{
      style :{
        fontsize : '16px',
        textTransform : 'uppercase'
  
      }
    },
    cells :{
      style:{
        fontsize: '15px'
      }
    }
  }  

  let dispatch = useDispatch();
  let state = useSelector(store => store.api);

  
  useEffect(() => {
    dispatch(getproject())
  }, [])

  const col1 = [
    {
      id: 1,
      name: "albumId",
      selector: (row) => row.albumId
    },
    {
      id: 2,
      name: "albumName",
      selector: (row) => row.albumName
    }
  ];
  const col2 = [
    {
      id: 1,
      name: "licenceId",
      selector: (row) => row.licenceId
    },
    {
      id: 2,
      name: "licenceName",
      selector: (row) => row.licenceName
    }
  ];
  const col3 = [
    {
      id: 1,
      name: "singleId",
      selector: (row) => row.singleId
    },
    {
      id: 2,
      name: "songTitle",
      selector: (row) => row.songTitle
    }
  ];
  console.log(state);
  return (
    <>

<main className='main-container ' style={{backgroundColor : '#151519', height: '100vh'}}>

          <div className='main-title-profile'>
          <h2>All Profiles</h2>
          <br />

          {/* <DataTable 
              title="All Profiles"
              columns={col1}
              customStyles={customStyles}
              data={state}
              defaultSortFieldId={1}
              // pagination
            /> */}

            <DataTable
              title="albums Responses"
              columns={col1}
              customStyles={customStyles}
              data={state.albumsResponses}
              defaultSortFieldId={1}
              pagination
            />

<DataTable
              title="licences Responses"
              columns={col2}
              customStyles={customStyles}
              data={state.licencesResponses}
              defaultSortFieldId={1}
              pagination
            />

<DataTable
              title="singles Responses"
              columns={col3}
              customStyles={customStyles}
              data={state.singlesResponses}
              defaultSortFieldId={1}
              pagination
            />



            </div>
</main>

       


        {/* <div style={{padding : "10px 10%" ,width : '100%' , backgroundColor : '#1d1d20'}}>

        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        > */}
{/* 
          <Tab eventKey="albumsResponses" title="albumsResponses">
            <DataTable
              title="albums Responses"
              columns={col1}
              data={state.albumsResponses}
              defaultSortFieldId={1}
              pagination
            />
          </Tab>
          <Tab eventKey="licencesResponses" title="licencesResponses">
          <DataTable
              title="licences Responses"
              columns={col2}
              data={state.licencesResponses}
              defaultSortFieldId={1}
              pagination
            />
          </Tab>
          <Tab eventKey="singlesResponses" title="singlesResponses">
          <DataTable
              title="singles Responses"
              columns={col3}
              data={state.singlesResponses}
              defaultSortFieldId={1}
              pagination
            />
          </Tab>
        </Tabs>
      </div> */}

    </>
  )
}

export default HOC(Album)