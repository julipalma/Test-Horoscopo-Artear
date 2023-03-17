import { useState } from "react";
import ListContainer from "../ListContainer/ListContainer";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";

function GeneralContainer() {
  const [sortValue, setSortValue] = useState("0");
  const [search, setSearch] = useState("");
  const [view, setView] = useState("grid");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSortChange = (e) => {
    setSortValue(e.target.value);
  };
  const handleChangeView = (e) => {
    setView(e.target.value);
}

  return (
    <Container>
      <h1 className="text-center">Horóscopo</h1>
      <div className="form-container mb-4">
        <div className="form-container__form-group">
          <Form.Label className="me-3">Orden</Form.Label>
          <Form.Select onChange={handleSortChange}>
            <option value={0}>alfabético descendente</option>
            <option value={1}>alfabético ascendente</option>
            <option value={2}>Fecha descendente</option>
            <option value={3}>Fecha ascendente</option>
          </Form.Select>
        </div>
       
        <div className="form-container__form-group">
            <Form.Label className="me-3">Ver como</Form.Label>
            <Form.Select onChange={handleChangeView}>
                <option value="grid">Grilla</option>
                <option value="list">Lista</option>
            </Form.Select>
        </div>
        <div className="form-container__form-group search-container">
          <Form.Control
            type="text"
            placeholder="buscar signo"
            onChange={handleChange}
          />
        </div>
      </div>
      <ListContainer sortValue={sortValue} search={search} view={view} />
    </Container>
  );
}

export default GeneralContainer;
