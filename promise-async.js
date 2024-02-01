const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

function getCookies() {
  setTimeout(() => {
    document.body.innerHTML = cookies.map(cookie => `<li>${cookie.name}</li>`).join('');
  }, 1000);
}

function createCookie(newCookie) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cookies.push(newCookie);
      resolve();
    }, 2000);
  });
}

async function dance() {
  await createCookie(newCookie);
  getCookies();
}

dance();
