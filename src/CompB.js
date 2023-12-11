import CompC from './CompC'

function CompB({data}){
    console.log(data)
    return(
        <CompC data={data}/>
    )
}

export default CompB