export default function StyleGuide() {
  return (
    <body className="m-4">
      <h1>Button</h1>
      <br />
      <br />

      <div className="d-flex gap-3">
        <button
          type="button"
          title="Watch the watches"
          className="button button-primary-outline"
        >
          View all
        </button>
        <a
          href="/"
          title="Watch the watches"
          className="button button-primary-outline"
        >
          View all
        </a>
      </div>

      <br />
      <br />

      <div className="d-flex gap-3">
        <button
          type="button"
          title="Watch the watches"
          className="button button-primary-outline button-lg"
        >
          View all
        </button>
        <a
          href="/"
          title="Watch the watches"
          className="button button-primary-outline button-lg"
        >
          View all
        </a>
      </div>
    </body>
  );
}
