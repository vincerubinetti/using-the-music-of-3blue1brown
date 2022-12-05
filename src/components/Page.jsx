import "./Page.css";

// layout for each page
const Page = ({ title, description, children }) => (
  <>
    <div className="page">
      {title && <h2 id="label">{title}</h2>}

      <p id="description" className="description">
        {description}
      </p>

      {children}
    </div>
  </>
);

export default Page;
