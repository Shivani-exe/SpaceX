export const Card = (prop) => (
  <div className="col-sm-6">
    <div className="card" key={prop.r.id}>
      <img src={prop.r.flickr_images[1]} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{prop.r.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a
          href="#"
          class="btn-primary"
          data-toggle="modal"
          data-target={`#popup${prop.r.id}`}
        >
          View More
        </a>
      </div>
    </div>
  </div>
);
