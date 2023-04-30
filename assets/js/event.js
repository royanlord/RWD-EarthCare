const api_event = 'https://644dfece4e86e9a4d8ef004c.mockapi.io/events/1';

fetch(api_event)
     .then(res => res.json())
     .then(value => {
          console.log(value);
     })
