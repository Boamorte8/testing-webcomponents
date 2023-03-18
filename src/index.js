import './components/BoaCard';
import './components/BoaCounter';
import './components/BoaIncrement';
import './components/BoaLabel';
import './components/BoamorteHeader';
import './components/BoaStep';

const header = document.querySelector('boamorte-header');
const label = document.querySelector('boa-label');

setTimeout(() => {
  header.changeExtraText('New text for testing');
  label.setAttribute('label', 'New label for testing');
}, 5000);
