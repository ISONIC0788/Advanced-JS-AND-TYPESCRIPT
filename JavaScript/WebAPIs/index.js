console.log(1);

setTimeout(()=> console.log(2) , 0)

console.log(3)


/*

| Component          | Role                                         |
| ------------------ | -------------------------------------------- |
| **Call Stack**     | Runs synchronous functions                   |
| **Web APIs**       | Handles async tasks like timers or fetch     |
| **Callback Queue** | Holds callbacks from completed async tasks   |
| **Event Loop**     | Moves callbacks to the stack when it's empty |


*/