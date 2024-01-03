// import React, { useEffect } from 'react'
// import HOC from './HOC'
// import { useDispatch, useSelector } from 'react-redux';
// import { getprofiles } from '../Redux/Action/action';
// import DataTable from 'react-data-table-component';

// const customStyles ={
//   width : '100%',
//   backgroundColor : '#1D1D21',
//   headRow : {
//     style:{
//       backgroundColor :'#1D1D21',
//       color : 'white',
//       fontsize : '20px'
//     }
//   },
//   headCells:{
//     style :{
//       fontsize : '16px',
//       textTransform : 'uppercase'

//     }
//   },
//   cells :{
//     style:{
//       fontsize: '15px'
//     }
//   }


// }

// const AllProfiles = () => {

//   let dispatch = useDispatch();
//   let state = useSelector(store => store.api);

  
//   useEffect(() => {
//     dispatch(getprofiles())
//   }, [])

//   const col1 = [
//     {
     
//       name: "id",
//       selector: (row) => row.id,
//       sortable : true
//     },
   
//     {
//       name: "displayName",
//       selector: (row) => row.displayName,
//       sortable : true
//     },
//     { 
//       name: "address",
//       selector: (row) => row.address,
//       sortable : true
//     },
//     {
//       name: "email",
//       selector: (row) => row.email,
//       sortable : true
//     }
//   ];

//   console.log(state)
 
//   return (
//     <>
//             <main className='main-container ' style={{backgroundColor : '#151519', height: '100vh'}}>

// <div className='main-title-profile'>
// <h2>All Profiles</h2>
// <br />

// <DataTable 
//               title="All Profiles"
//               columns={col1}
//               customStyles={customStyles}
//               data={state}
//               defaultSortFieldId={1}
//               // pagination
//             />

// </div>

// </main>

//     </>

//   )
// }

// export default HOC(AllProfiles)