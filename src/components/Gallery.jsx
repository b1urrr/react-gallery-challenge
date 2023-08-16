import styled from "styled-components";
import SingleImage from "./SingleImage";

const Gallery = ({ photos }) => {
  return (
    <Wrapper>
      {photos < 1 ? (
        <div className="not-found">
          <h2>
            No items matched your search criteria, try looking for something
            else...
          </h2>
        </div>
      ) : null}
      {photos.map((photo) => {
        return <SingleImage key={photo.id} photo={photo} photos={photos} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  width: var(--view-width);
  max-width: 90vw;
  margin: 3rem auto;
  gap: 2rem;

  .not-found {
    position: fixed;
    left: 10%;
    right: 10%;
  }

  .not-found h2 {
    font-size: 35px;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    .not-found {
      left: 25%;
      right: 25%;
    }
  }
`;

export default Gallery;
