function DetailsData({data:{id,detail}}) {
  return (
    <div className="main">
      <h3>Content {id}</h3>
      <p>{detail}</p>
    </div>
  );
}

export default DetailsData;
