export default function AsideBody(data) {
  return (
    <>
      <div>
        <div className="d-flex justify-content-between">
          <div>
            <div className="d-flex  ">
              <img
                width="20"
                height="20"
                className="rounded-circle"
                src={data.data.profile}
              />
              <p className="aside-name">{data.data.firstName}</p>
              <p className="aside-name">{data.data.lastName}</p>
            </div>
            <p className="aside-text">{data.data.text}</p>
          </div>
          <img className="mx-2" width="56" height="55" src={data.data.img} />
        </div>
      </div>
    </>
  );
}
