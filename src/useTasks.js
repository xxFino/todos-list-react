import { useEffect, useState } from "react";

export const useTasks = () => {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const [hideDone, setHideDone] = useState(false);
    const toogleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    const removeTasks = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toogleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })));
    };

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                content,
                done: false,
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            },
        ]);
    };

    return {tasks, removeTasks, toogleTaskDone, setAllDone, addNewTask, toogleHideDone, hideDone};
};