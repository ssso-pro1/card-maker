import React from 'react';
import CardEditForm from '../card_edit/card_edit_form';
import CardAddForm from '../card_add/card_add_form';
import styles from './editor.module.css';

const Editor = ({ cards, addCard, updateCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>

    {Object.keys(cards).map(key => (
      <CardEditForm //
        key={key} //
        card={cards[key]}
        updateCard={updateCard}
        deleteCard={deleteCard}
      />
    ))}
    <CardAddForm onAdd={addCard} />
  </section>
);

export default Editor;
