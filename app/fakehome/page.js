import Head from "next/head";
import { attributes } from "../../content/home.md";

export default function () {
  let { title, cats } = attributes;
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <article>
        <h1>{title}</h1>
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
              <img style={{ width: "50px" }} src={cat.thumbnail} />
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
