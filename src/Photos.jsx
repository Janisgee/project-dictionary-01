import "./Photo.css";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div key={index} className="col-4 photoGroup">
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img src={photo.src.tiny} alt={photo.alt} />
                </a>
              </div>
            );
          })}
          <div className="phoneSizePhoto">
            <img
              src={props.photos[0].src.original}
              alt={props.photos[0].alt}
              className="phoneSizePhoto"
            />
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
