import '../styles/DogTable.css';

function DogTable({theadData, tbodyData}){
    console.log('DogTable: ');
    console.log(theadData);

  return (
       <table className="table">
           <thead>
              <tr>
               {theadData.map(heading => {
                 return <th className="th" key={heading}>{heading}</th>
               })}
             </tr>
           </thead>
           <tbody>
               {tbodyData.map((row, index) => {
                   return <tr className='tr' key={index}>
                       {theadData.map((key, index) => {
                            return <td className="td" key={row[key]}>{row[key]}</td>
                       })}
                 </tr>;
               })}
           </tbody>
       </table>
  );
}

export default DogTable;