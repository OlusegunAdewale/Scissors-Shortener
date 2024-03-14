import { useContext } from "react";

import "./Myurl.css";
import { DatabaseContext } from "../../Providers/DatabaseProvider";

export default function MyUrl() {
  const { histories } = useContext(DatabaseContext);
  return (
    <>
      <section className="URLs">
        <h1>My URLs</h1>
        <br />
        <br />
        <br />
        <button onClick={() => history.back()}>Back</button>
        {histories.map((history) => (
          <div>
            <pre>created_at: {history.created_at}</pre>
            <pre>link: {history.link}</pre>
            <pre>long_url: {history.long_url}</pre>
            <br />
          </div>
        ))}
      </section>
    </>
  );
}
