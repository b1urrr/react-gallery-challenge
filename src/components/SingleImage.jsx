import { useState } from "react";
import styled from "styled-components";
import {
  BsXLg,
  BsSearch,
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsFillHandThumbsUpFill,
} from "react-icons/bs";

const SingleImage = ({ photo, photos, index }) => {
  const { urls, all_description, id, likes } = photo;
  const [openModal, setOpenModal] = useState(false); // Controls Modal Open/Close
  const [slideNumber, setSlideNumber] = useState(0); // Controls the current image slide number
  const [updatedLikes, setUpdatedLikes] = useState(likes); // Controls the likes, initially available in the API data
  const [buttonClicked, setButtonClicked] = useState(false); // Like/unlike functionality

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    slideNumber === 0
      ? setSlideNumber(photos.length - 1)
      : setSlideNumber(slideNumber - 1);
  };
  const nextSlide = (e) => {
    e.stopPropagation();
    slideNumber + 1 === photos.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  const handleLike = () => {
    if (buttonClicked) {
      setUpdatedLikes(updatedLikes - 1);
      setButtonClicked(false);
      return;
    }
    setButtonClicked(true);
    setUpdatedLikes(updatedLikes + 1);
  };

  return (
    <Wrapper key={id}>
      {openModal && (
        <div className="modal" onClick={handleCloseModal}>
          <BsXLg className="btn-close" onClick={handleCloseModal} />
          <BsArrowLeftCircle className="btn-previous" onClick={prevSlide} />
          <BsArrowRightCircle className="btn-next" onClick={nextSlide} />
          <div className="full-screen" onClick={(e) => e.stopPropagation()}>
            <img src={photos[slideNumber].urls.regular} alt={all_description} />
          </div>
        </div>
      )}
      <div className="container">
        <img className="photo" src={urls.small} alt={all_description} />
        <div className="overlay-image" onClick={() => handleOpenModal(index)}>
          <BsSearch />
        </div>
      </div>
      <div className="likes-container">
        <h3>{updatedLikes} Likes</h3>
        <div
          className={
            buttonClicked ? "thumbs-icons thumbs-icons-active" : "thumbs-icons"
          }
          onClick={handleLike}
        >
          <h3>{buttonClicked ? "Liked" : "Like"}</h3>
          <BsFillHandThumbsUpFill />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    position: relative;
  }
  .photo {
    width: 350px;
    height: 350px;
    object-fit: cover;
    cursor: pointer;
  }
  .overlay-image {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;

    cursor: pointer;
  }
  .container:hover .overlay-image {
    opacity: 1;
  }
  .overlay-image svg {
    color: var(--clr-light);
    font-size: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .modal .btn-close,
  .modal .btn-previous,
  .modal .btn-next {
    position: fixed;
    cursor: pointer;
    opacity: 0.6;
    color: #fff;
    z-index: 9999;
  }

  .btn-close:hover,
  .btn-previous:hover,
  .btn-next:hover {
    opacity: 1;
  }
  .btn-close {
    top: 40px;
    right: 40px;
    font-size: 40px;
  }
  .modal .btn-previous {
    top: 50%;
    transform: translateY(-50%);
    left: 40px;
    font-size: 40px;
  }

  .modal .btn-next {
    top: 50%;
    transform: translateY(-50%);
    right: 40px;
    font-size: 40px;
  }
  .full-screen {
    width: calc(100%-40px);
    height: calc(100%-40px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .full-screen img {
    max-width: 100%;
    max-height: 100%;
    pointer-events: none;
    user-select: none;
  }

  .likes-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .thumbs-icons {
    display: flex;
    align-items: center;
    gap: 15px;
    border: 2px solid var(--clr-main);
    padding: 0.25rem;
    border-radius: 5px;
    color: var(--clr-main);
  }
  .thumbs-icons svg {
    font-size: 25px;
  }

  .thumbs-icons:hover {
    background: var(--clr-main);
    cursor: pointer;
    color: var(--clr-light);
  }
  .thumbs-icons-active {
    background: var(--clr-main);
    color: var(--clr-light);
  }
`;

export default SingleImage;
