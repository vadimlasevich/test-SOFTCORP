import { ItcCustomSelect } from './itc-custom-select.js';

export const form = () => {
  const inputRange = document.querySelector('.input-range');
  const displayInputRange = document.querySelector('.order-form__range-value');
  const inputFile = document.querySelector('.input-file');
  const inputFileLabel = inputFile.nextElementSibling;
  const inputFileLabelValue = inputFileLabel.querySelector('.input-file_text');
  const select = document.querySelector('#select-1');
  const select1 = new ItcCustomSelect(select);

  inputFile.addEventListener('change', () => {
    let countFiles = '';
    if (inputFile.files && inputFile.files.length >= 1) countFiles = inputFile.files.length;

    if (countFiles) inputFileLabelValue.textContent = `Выбрано файлов: ${countFiles}`;
    else inputFileLabelValue.textContent = inputFileLabelValue.textContent;
  });

  inputRange.addEventListener('input', ({ target }) => {
    displayInputRange.textContent = `${target.value} %`;
  });
};
