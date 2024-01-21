import PopupWithForm from './PopupWithForm';

function DeleteCardPopup(props) {
  function handleSubmit(evt) {
    evt.preventDefault();

    props.onSubmit(props.card);
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onCloseMouseClick={props.onCloseMouseClick}
      onClose={props.onClose}
      name={'delete'}
      title={'Вы уверены?'}
      button={'Да'}
      onSubmit={handleSubmit}
    />
  );
}

export default DeleteCardPopup;