const jobForm = document.getElementById('jobForm');
const jobsContainer = document.getElementById('jobsContainer');

jobForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const company = document.getElementById('company').value;
  const description = document.getElementById('description').value;

  const jobCard = document.createElement('div');
  jobCard.classList.add('job-card');

  jobCard.innerHTML = `
    <h3>${title}</h3>
    <strong>${company}</strong>
    <p>${description}</p>
  `;

  jobsContainer.appendChild(jobCard);

  jobForm.reset();
});
