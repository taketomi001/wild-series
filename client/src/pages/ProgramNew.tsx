import { useNavigate } from "react-router-dom";

import ProgramForm from "../components/CategoryForm";

function ProgramNew() {
  const navigate = useNavigate();

  const newCategory = {
    name: "",
  };

  return (
    <ProgramForm
      defaultValue={newCategory}
      onSubmit={(categoryData) => {
        fetch(`${import.meta.env.VITE_API_URL}/api/programs`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(categoryData),
        })
          .then((response) => response.json())
          .then((data) => {
            navigate(`/programs/${data.insertId}`);
          });
      }}
    >
      Ajouter
    </ProgramForm>
  );
}

export default ProgramNew;
