const cookies = [{ name: "Chocolate Cookies" }, { name: "Macaron Cookies" }];
const newCookie = { name: "Biscotti Cookies" };

// Progression 1: create a function to get all the cookies
function getCookies() {
  // Progression 2: using setTimeout() -- use 1000 units for time parameter
  setTimeout(() => {
    document.body.innerHTML = cookies.map(cookie => `<li>${cookie.name}</li>`).join('');
  }, 1000);
}

// Progression 3: Create a function to create cookies and create an object of Promise.
function createCookie(newCookie) {
  return new Promise((resolve, reject) => {
    // Progression 4: using setTimeout() -- use 2000 units for time parameter
    setTimeout(() => {
      // Progression 5: handling errors and adding new cookie to the list
      cookies.push(newCookie);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('There are no such cookies');
      }
    }, 2000);
  });
}

// Progression 6: call function using `.then`
createCookie(newCookie).then(getCookies);
