import { Container, Card } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { API } from "../../config/api";

function DetailArticleComponent() {
  let { id } = useParams("id");

  let { data: article } = useQuery("myArticlesCache", async () => {
    const response = await API.get("/article/" + id);
    console.log("ini respon detail cokk", response);
    return response.data.data;
  });

  return (
    <Container>
      <h1 className="mt-5">{article?.title}</h1>
      <p>{article?.createdAt}</p>
      <p>
        Author :{" "}
        <span className="text-primary-color">Dr.{article?.user.fullname}</span>
      </p>
      <Card className="py-5 shadow my-5 border-0">
        <Card.Img
          variant="top"
          src={"http://localhost:5000/uploads/" + article?.image}
          className="mx-auto rounded-0"
          style={{ width: "85%", height: "30%" }}
        />
        <Card.Body className="mx-auto" style={{ width: "85%" }}>
          <Card.Title className="mt-3">
            <p className="category px-3 py-1 rounded-pill">
              {article?.category}
            </p>
          </Card.Title>
          <Card.Text className="mt-5">{article?.desc}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default DetailArticleComponent;
