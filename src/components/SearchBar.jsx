import styled from "styled-components";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };

  return (
    <Wrapper className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          name="search"
          placeholder={searchTerm}
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  .form {
    padding: 1rem;
  }
  .input {
    font-size: 25px;
    height: 50px;
    padding: 0.55rem;
    border: 2px solid var(--clr-dark);
    border-right: none;
    outline: none;
    border-radius: 10px 0px 0px 10px;
    vertical-align: bottom;
  }
  .btn {
    height: 100%;
    width: 100px;
    background: var(--clr-dark);
    color: var(--clr-light);
    font-size: 20px;
    border: none;
    border-radius: 0px 10px 10px 0px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  .btn:hover {
    background: var(--clr-main);
    border: 2px solid var(--clr-dark);
  }
`;

export default SearchBar;
