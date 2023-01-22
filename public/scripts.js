var postButton = document.getElementById('send');



postButton.addEventListener("click", postData());

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

async function postData() {
     const data = {
        text: document.getElementById('inputfield').value,
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
        const response = await fetch('/api', options);
        const json = await response.json();
        console.log(json);
        }