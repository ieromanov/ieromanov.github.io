export function sendEmail(email) {
  return fetch("/api/signup", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}
