import { Input, StyledForm } from 'pages/Form.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  let queryFilter;
  const handleChange = e => {
    queryFilter = e.currentTarget.value;
    dispatch(setFilter(queryFilter));
  };
  return (
    <StyledForm
      style={{
        width: '280px',
        backgroundColor: 'rgba(0,0,0,0',
        marginBottom: '0',
        marginTop: '0',
      }}
    >
      <label htmlFor="fContact">Find contacts by name</label>
      <Input
        id="fContact"
        type="text"
        value={queryFilter}
        onChange={handleChange}
      />
    </StyledForm>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
