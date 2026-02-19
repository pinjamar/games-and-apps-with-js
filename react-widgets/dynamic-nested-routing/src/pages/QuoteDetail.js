import { Fragment } from "react";
import { useParams, Outlet } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";

const dummy_quotes = [
  {
    id: "q1",
    author: "John",
    text: "learning react",
  },
  {
    id: "q2",
    author: "Max",
    text: "learning react",
  },
  {
    id: "q3",
    author: "Stu",
    text: "learning react",
  },
];

export default function QuoteDetail() {
  const params = useParams();

  const quote = dummy_quotes.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>no quote</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <p>{params.quoteId}</p>
      <Outlet />
    </Fragment>
  );
}
