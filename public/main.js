

const completedOrder = (e) => {
  const id = e.target.id;
  console.log(id)
  const awaiting = "true";
  const completed = "false";
  fetch('barista', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: id,
    }),
  }).then(function (res) {
    console.log(res)
    console.log(res.body)
    return res.json()
  })
  .then(function (res) {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(" order for " + res.value.customer));
  })
  window.location.reload();
};


document.querySelectorAll('.complete-order').forEach((e) => {
  e.addEventListener('click', completedOrder);
});

const deleteAllCompleted = (e) => {
  fetch('barista', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: 'all',
    }),
  }).then(function () {
    
    window.location.reload();
  });
};

document.querySelectorAll('.clear-all-completed').forEach((e) => {
  e.addEventListener('click', deleteAllCompleted);
});

