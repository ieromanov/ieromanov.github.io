export function sendEmail(email) {
  return fetch("https://squareconsulting.net/api/signup/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
}
