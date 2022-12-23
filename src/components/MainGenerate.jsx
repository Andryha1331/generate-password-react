import React, { useState } from 'react';
import ViewGenerpass from './ViewGenerpass';
import generatedRandomPassword from "../helpers/MainGenerate-helper"

const MainGenerate = function () {
  const [characterCount, setCharacterCount] = useState("");
  const [passOne, setPassOne] = useState("");
  const [passTwo, setPassTwo] = useState("");

  const MIN_LENGTH_PASSWORD = 0;
  const MAX_LENGTH_PASSWORD = 8;

  const characterCountNumber = Number(characterCount);

  function onGeneratePasswords() {
    if (!characterCount) {
      return alert('Enter password length!');
    }

    if (!Number.isInteger(characterCountNumber)) {
      return alert('Enter only number as password length');
    }

    if (!(characterCountNumber > MIN_LENGTH_PASSWORD && characterCountNumber <= MAX_LENGTH_PASSWORD)) {
      return alert('Enter password length in range between 1 and 8!');
    }

    setPassOne(generatedRandomPassword(characterCountNumber));
    setPassTwo(generatedRandomPassword(characterCountNumber));
  }

  return (
    <><div className="generate">
      <p className="generate-label">
        Generate a <span className="colortext">random password</span>
      </p>

      <p className="generate-label-warning">
        Never use an insecure password again.
      </p>

      <label htmlFor="character-count" className="character-count-label">Number of password characters:</label>
      <input type="text" value={characterCount} onChange={(event) => setCharacterCount(event.target.value)} id="character-count" className="character-count-input" placeholder="max:8" maxLength={1} />

      <button className="generate-start" onClick={onGeneratePasswords}>Generate passwords</button>

      <ViewGenerpass passOne={passOne} passTwo={passTwo} />
    </div></>
  )
}

export default MainGenerate;