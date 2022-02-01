
import QuoteList from "../components/quotes/QuoteList"

const DUMMY_QUOTES=[
    {id:"q1" ,author:"satya",text:"Majani lyf"},
    {id:"q2",author:"harsh" ,text:"pajame lyf"}

];
const AllQuotes=()=>{

    return <QuoteList quotes={DUMMY_QUOTES}/>
};
export default AllQuotes;