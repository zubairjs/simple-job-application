function checkEligibility() {
  const age = parseFloat(prompt('What is your age?'));
  const language = prompt(
    'What programming language do you know?'
  ).toLowerCase();

  if (age >= 18 && language === 'javascript') {
    alert("You're eligible to apply!\nWelcome, JavaScript Developer!");
  } else if (age < 18) {
    alert('You must be at least 18.');
  } else if (language !== 'javascript') {
    alert('We are only hiring JavaScript developers at the moment.');
  }
}
