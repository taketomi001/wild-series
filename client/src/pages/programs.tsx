import { useEffect, useState } from "react";
interface Program {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

function Program() {
  // return(<><p>faebfbai</p></>)
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  //   const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetching the programs from the server
    const fetchPrograms = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/programs");
        if (!response.ok) {
          throw new Error("Failed to fetch programs");
        }
        const data = await response.json();
        setPrograms(data); // Store the data in state
      } catch (error) {
        console.error(error);

        // setError(console.error(error));
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <div>
      <h1>Our Programs</h1>

      {loading && <p>Loading programs...</p>}

      {/* {error && <p>{error}</p>} */}

      {programs.length > 0 ? (
        <div>
          {programs.map((program) => (
            <div key={program.id} style={{ marginBottom: "20px" }}>
              <h2>
                {program.title} ({program.year})
              </h2>
              <img src={program.poster} alt={program.title} width="200" />
              <p>{program.synopsis}</p>
              <p>
                <strong>Origin:</strong> {program.country}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No programs found.</p>
      )}
    </div>
  );
}

export default Program;
