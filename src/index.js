import './components/BoamorteHeader';

const header = document.querySelector('boamorte-header');

setTimeout(() => {
  header.changeExtraText('New text for testing');
}, 5000);
