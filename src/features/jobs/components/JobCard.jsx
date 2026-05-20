const JobCard = ({ job }) => {

  return (
    <div className="">
      <div className="card rounded shadow border-left-primary border-start border-5 border-success border-0 shadow pb-3 px-3" style={{ width: "80%" }}>
        <div className="card-body">
          <h5 className="card-title">{job.title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{job.company}</h6>
          <p className="card-text">
            {job.description}
          </p>
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
        <hr/>
        <a href="a" className="text-decoration-none text-info fw-bold">
          View Details
        </a>
      </div>
    </div>
  );
};

export default JobCard;
