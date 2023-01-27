export function getList() {
    return fetch('https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1')
      .then(data => data.json())
  }