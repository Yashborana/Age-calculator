document.addEventListener('DOMContentLoaded', () => {
  const birth = document.getElementById('birth');
  const calc = document.getElementById('calc');
  const clear = document.getElementById('clear');
  const result = document.getElementById('result');
  const themeToggle = document.getElementById('themeToggle');

  // initialize theme
  if(localStorage.getItem('theme') === 'light'){
    document.body.classList.add('light');
    themeToggle.checked = true;
  } else {
    document.body.classList.remove('light');
    themeToggle.checked = false;
  }

  themeToggle.addEventListener('change', () => {
    if(themeToggle.checked){
      document.body.classList.add('light');
      localStorage.setItem('theme','light');
    } else {
      document.body.classList.remove('light');
      localStorage.setItem('theme','dark');
    }
  });

  function calculateAge(birthDate){
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if(days < 0){
      months -= 1;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if(months < 0){
      years -= 1;
      months += 12;
    }

    return { years, months, days };
  }

  calc.addEventListener('click', () => {
    if(!birth.value){
      result.textContent = 'Please choose your birth date.';
      return;
    }
    const b = new Date(birth.value);
    const now = new Date();
    if(b > now){
      result.textContent = 'Birth date cannot be in the future.';
      return;
    }
    const age = calculateAge(b);
    const totalDays = Math.floor((now - b) / (1000*60*60*24));
    result.textContent = `${age.years} years, ${age.months} months, ${age.days} days (≈ ${totalDays} days total)`;
  });

  clear.addEventListener('click', () => {
    birth.value = '';
    result.textContent = 'Enter your date of birth and click Calculate.';
  });

  birth.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') calc.click();
  });
});