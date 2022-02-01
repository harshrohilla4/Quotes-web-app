import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { Fragment } from "react";
import Comments from "../components/comments/Comments"
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES=[
    {id:"q1" ,author:"satya",text:"Majani lyf"},
    {id:"q2",author:"harsh" ,text:"pajame lyf"}
  
  ];

const QuotesDetail=()=>{

    const param=useParams();

    const quote=DUMMY_QUOTES.find(quote=> quote.id === param.quoteId);

    if(!quote)
    {
        return <p className="centered">Quote not found..!!</p>
    }

    return <Fragment>
        <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path="/quotes/:qouteId/comments">
            <Comments/>
        </Route>
    </Fragment>
};
export default QuotesDetail;