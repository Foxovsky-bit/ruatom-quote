import './QuoteGenerator.scss';
import React, {useEffect, useState} from "react";
import {getQuote} from "../requests/getQuote";

const QuoteGenerator = () => {

    type QuoteResponse = {
        quoteAuthor:string
        quoteLink:string
        quoteText:string
        senderLink:string,
        senderName: string
    }

    const [quote,setQuote] = useState<QuoteResponse>();
    const [change,setChange] = useState(false)

    useEffect(() => {
        getQuote()
        .then(response => setQuote(response))
        .catch(error => alert(error))
    },[change])

    return (
        <div className='quote-block'>
            <div className='quote-title'>Cлучайная цитата:</div>
            {
                quote &&
                <>
                    <div className='quote-text'>{quote.quoteText}</div>
                    <div className='quote-author'>{quote.quoteAuthor}</div>
                </>
            }
            <button className='change-quote' onClick={()=>setChange(!change)}>Новая цитата</button>
        </div>
    );
}

export default QuoteGenerator;