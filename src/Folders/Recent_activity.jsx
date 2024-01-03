import React, { useEffect } from 'react'
import HOC from './HOC'
import { useDispatch, useSelector } from 'react-redux';
import { getproject, getrecentactivity } from '../Redux/Action/action';
import DataTable from 'react-data-table-component';


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
const Recent_activity = () => {

  let dispatch = useDispatch();
  let state = useSelector(store => store.api);

  
  useEffect(() => {
    dispatch(getrecentactivity())
  }, [])

  const col1 = [
    
    {
     
      name: "id",
      selector: (row) => row.id,
      // sortable : true
    },
    {
     
      name: "createdDate",
      selector: (row) => row.createdDate,
      // sortable : true
    },
    {
     
      name: "updatedDate",
      selector: (row) => row.updatedDate,
      // sortable : true
    },
    { 
      name: "type",
      selector: (row) => row.type,
      // sortable : true
    },
    {
      name: "title",
      selector: (row) => row.title,
      // sortable : true 
    }
  ];
 
  console.log(state);
  return (
    <>
     
            <main className='main-container ' style={{backgroundColor : '#151519', height: '100vh'}}>

                    <div className='main-title-profile'>
                    <h2>Reacent Activity</h2>
                    <br />

              <DataTable
              title="Recent Activity"
              columns={col1}
              customStyles={customStyles}
              data={state.recentActivity}
              defaultSortFieldId={1}
            />

                </div>

                </main>

    </>

  )
}

export default HOC(Recent_activity)