// Fetch winning combinations from API

export const getLines = () =>
    fetch('http://localhost:4000/').then((res) => res.json());
