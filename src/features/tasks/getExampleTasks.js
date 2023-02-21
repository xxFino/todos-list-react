export const getExampleTasks = async () => {
    const respone = await fetch("/todos-list-react/exampleTasks.json");

    if (!respone.ok) {
        new Error(respone.statusText);
    }

    return await respone.json();
};