const { useEffect } = require("react");

function useCurrecyInfo(currency){
    const [ data ,setdata ] = useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/036f9c28633d8c35f5d0ebae/latest/${currency}`)
        .then(res=>res.json())
        .then(data=>setdata(data[conversion_rates]))
        
    },[currency])
    return data
}
export default useCurrecyInfo;