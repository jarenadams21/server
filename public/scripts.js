const data = {
    folk: 4,
    knife: 3
}

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}
async function fetchData() {
const response = await fetch('/api', options);
const json = await response.json();
console.log(json);
}

async function getData() {
    const response = await fetch('/api');
    const data = await response.json();

    for (item of data) {
        const root = document.createElement('div');
        const time = document.createElement('div');
        const timeString = new Date(item.timestamp).toLocaleString();
        time.textContent = `time: ${item.timestamp}`;
        root.append(time);
        document.body.append(root);

    }

    console.log(data);
    }