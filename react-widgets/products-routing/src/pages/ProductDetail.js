import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();

  return (
    <section>
      <h1>product detail</h1>
      <p>{params.productId}</p>
    </section>
  );
}
