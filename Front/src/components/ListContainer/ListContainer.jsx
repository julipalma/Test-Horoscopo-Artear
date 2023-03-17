import { useEffect, useState } from "react";
import Article from "../Article/Article";
import moment from "moment/moment";
import WithoutResults from "../WithoutResults/WithoutResults";
import Error from "../Error/Error";
import { handleGetItems } from "../../helpers/integrationService";

function ListContainer(props) {
  const [article, setArticle] = useState([]);
  const [filteredArticle, setFilteredArticle] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    handleGetItems()
      .then((data) => {
        setArticle(data);
        setError("");
        sortArticles(data, props.sortValue);
      })
      .catch((error) => setError("Ocurrio un error"));
  }, [props.sortValue]);

  useEffect(() => {
    sortArticles(article, props.sortValue);
  }, [article, props.sortValue]);

  useEffect(() => {
    setFilteredArticle(
      article.filter((x) =>
        x.name.toLowerCase().includes(props.search.toLowerCase())
      )
    );
  }, [article, props.search]);

  const sortArticles = (data, value) => {
    const itemsList = [...data];
    if (value === "0") {
      itemsList.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (value === "1") {
      itemsList.sort((a, b) => a.name.localeCompare(b.name)).reverse();
    }
    if (value === "2") {
      itemsList.sort(
        (a, b) =>
          new Date(
            moment(
              `${a.init_date}-${new Date().getFullYear()}`
                .split("-")
                .reverse()
                .join("-")
            ).format()
          ) -
          new Date(
            moment(
              `${b.init_date}-${new Date().getFullYear()}`
                .split("-")
                .reverse()
                .join("-")
            ).format()
          )
      );
    }
    if (value === "3") {
      itemsList
        .sort(
          (a, b) =>
            new Date(
              moment(
                `${a.init_date}-${new Date().getFullYear()}`
                  .split("-")
                  .reverse()
                  .join("-")
              ).format()
            ) -
            new Date(
              moment(
                `${b.init_date}-${new Date().getFullYear()}`
                  .split("-")
                  .reverse()
                  .join("-")
              ).format()
            )
        )
        .reverse();
    }
    setFilteredArticle(itemsList);
  };

  return (
    <div>
      {error === "" ? (
        filteredArticle.length > 0 ? (
          <ul className={`item-list ${props.view}`}>
            {filteredArticle.map((i) => (
              <Article data={i} key={i.name} />
            ))}
          </ul>
        ) : (
          <WithoutResults />
        )
      ) : (
        <Error message={error} />
      )}
    </div>
  );
}

export default ListContainer;
