import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Oval } from 'react-loader-spinner';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Item, IconButton  } from './ContactItemStyled';
import { Box } from '../Styled/Box';
import {
  useDeleteContactByIdMutation
} from 'redux/contactsSlice';
import { toast } from 'react-toastify';

export const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isSuccess, isLoading, isError }] =
    useDeleteContactByIdMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success('Contact deleted');
    }

    if (isError) {
      toast.error('Oops!! Something went wrong!');
    }
  }, [isSuccess, isError]);

	return (
    <>
      <Box display="flex" justifyContent="space-between" gridGap="10px">
        <Item>
          {name}: {number}
        </Item>
        <Box display="flex" gridGap="10px">
          <IconButton
            type="button"
            onClick={() => deleteContact(id)}
            disabled={isLoading}
          >
            {isLoading ? (
              <Oval
                height={10}
                width={10}
                color="red"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="red"
                strokeWidth={10}
                strokeWidthSecondary={10}
              />
            ) : (
              <FaRegTrashAlt color="red" />
            )}
          </IconButton>
        </Box>
      </Box>
    </>
  );
};


ContactItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};