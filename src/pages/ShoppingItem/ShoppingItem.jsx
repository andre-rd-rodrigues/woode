import Loading from "components/Loading/Loading";
import useProduct from "hooks/useProduct";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import AdditionalInfo from "./AdditionalInfo";
import MainSection from "./MainSection";
import RelatedProducts from "./RelatedProducts";

function ShoppingItem() {
  const { id } = useParams();

  const { item, isLoading, error } = useProduct(id);

  return (
    <Container style={{ minHeight: "100vh" }}>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <>
          <MainSection item={item} />
          <AdditionalInfo item={item} />
          <RelatedProducts item={item} />
        </>
      )}
    </Container>
  );
}

export default ShoppingItem;
