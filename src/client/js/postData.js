export const postData = async (apiData) => {
    fetch("http://localhost:8000/apiData", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({apiData}),
    })
    .then((response) => response.json())
};