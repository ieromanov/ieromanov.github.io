export function sendEmail(email) {
  return fetch("https://squareconsulting.org/api/signup", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}
