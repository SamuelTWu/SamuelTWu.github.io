// Settings
const minSize = 30; // px
const maxSize = 50; // px
const colors = ["var(--color-2)", "var(--color-3)", "var(--color-4)"];
const words = ["Tech is best when it builds community","Create","Imagine", "HEY UR CUTE!"]; // Pool of random letters
const letter_spacing = 30;

// Generate dots
function createLetters() {
  const viewportWidth = window.innerWidth;
  const viewerHeight = window.innerHeight;
  for (let j = 0; j < words.length; j++) {
    const letters = words[j];
    const scroll_offset = Math.random();
    const y_offset = ((j*53)%97);
    const x_offset = ((j*53)%97)*2;
    const randomColor = colors[(j%colors.length)];

    for (let i = 0; i < letters.length; i++) {
      const letter = document.createElement('div');
      letter.classList.add('letter');
      // Random letter from the pool
      const randomLetter = letters.charAt(i);
      letter.textContent = randomLetter;
      // Random size for each letter
      const size = Math.random() * (maxSize - minSize) + minSize;
      letter.style.fontSize = `${size}px`;
      // Random position across the entire document
      letter.style.left = `${(letter_spacing*i)+((viewportWidth-(letter_spacing*letters.length))/2)+x_offset}px`;
      const y = Math.random() * viewerHeight
      letter.style.top = `${y}px`;
      // Random speed for parallax effect
      letter.dataset.speed = (((viewerHeight*scroll_offset) - (y+y_offset)) / ((viewerHeight*scroll_offset))) * 0.1995;
      //random color
      
      letter.style.color = randomColor;
  
      document.body.appendChild(letter);
    }
  }
  
}

function handleScroll() {
  const scrollTop = window.scrollY;
  document.querySelectorAll('.letter').forEach(letter => {
    const speed = letter.dataset.speed;
    const offset = scrollTop * speed;
    letter.style.transform = `translateY(${offset}px)`;
  });
}

createLetters();
window.addEventListener('scroll', handleScroll);