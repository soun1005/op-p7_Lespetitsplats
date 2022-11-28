/* eslint-disable import/prefer-default-export */
const noMatch = document.querySelector('.no-match');

// to display error message when there is no recipe that matches
export function displayNoMatch(hasMatch) {
  if (hasMatch) {
    noMatch.classList.remove('active');
  } else {
    noMatch.classList.add('active');
  }
}
