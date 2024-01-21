import { useEffect, useState } from "react";
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onSubmit({
      name,
      link
    });
  }

  useEffect(() => {
    setName('');
    setLink('');
}, [props.isOpen]);

  return(
    <PopupWithForm 
        isOpen={props.isOpen}
        name={'cards'}
        title={'Новое место'}
        button={'Создать'}
        onSubmit={handleSubmit}
        onCloseMouseClick={props.onCloseMouseClick}
        onClose={props.onClose}
    >
          <input type="text" minLength={2} maxLength={30} id="card-name" value={name} onChange={handleNameChange} name="name" className="form__input form__input_type_title" placeholder="Название" required="" />
          <span id="card-name-error" className="form__input-error" />
          <input type="url" name="link" id="card-link" value={link} onChange={handleLinkChange} className="form__input form__input_type_link" placeholder="Ссылка на картинку" required="" />
          <span id="card-link-error" className="form__input-error" />
    </PopupWithForm>
  )
}

export default AddPlacePopup;