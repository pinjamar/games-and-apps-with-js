import QuoteList from "../components/quotes/QuoteList";

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

export default function AllQuotes() {
  return <QuoteList quotes={dummy_quotes} />;
}
