import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const selectNameFilter = useSelector((state) => state.filter.filters.name);
  const dispatch = useDispatch();

  const onChangeFilter = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.searchContainer}>
      <p className={css.inputText}>Find contacts by name</p>
      <input
        className={css.inputSearch}
        type="text"
        value={selectNameFilter}
        onChange={(e) => {
          onChangeFilter(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default SearchBox;
