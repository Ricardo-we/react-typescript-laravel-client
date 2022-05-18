import { useState, useEffect } from "react";
import TaskRequest from "../services/tasks.requests";
import { FullTask } from "../interfaces/task";
import List from "../components/List";
import Form from "../components/Form";
import { useNavigate } from 'react-router-dom';

const inputs = (defaults: Array<string>) => [
	{ name: 'title', placeholder: 'title', value: defaults[0] || '' },
	{ name: 'description', placeholder: 'description', type: 'textarea', value: defaults[1] || '' }
]

export default function Tasks(){
    const navigate = useNavigate();
    const request = new TaskRequest();
	const [tasks, setTasks] = useState<Array<FullTask>>();

	const getTasks = () => {
		return request.get_()
			.then(setTasks)
	}

	useEffect(() => {
		getTasks();
	}, [])

	return (
		<div className="container">
			<h2>Laravel + react-typescript</h2>
			<Form
				inputs={inputs(['', ''])}
				onSubmit={(inputs) => {
					request.post_({ title: inputs.title, description: inputs.description })
						.then(getTasks)
						.catch(error => alert(error.toString()));
				}}
			/>

			<List
                onDelete={(task) => request.delete_(task.id).then(getTasks)}
                onUpdate={(task) => {
                    console.log(task)
                    navigate(`/${task.id}`)}}
				items={tasks ? tasks.map(task => ({value: <ListItem task={task}/>})) : null}
			/>

		</div>
	);
}

const ListItem = (props: {task: FullTask}) => {
	const {task} = props;
	if(!task) return <h3>Not task</h3>
	return (
		<>
			<h4>{task.title}</h4>
			<strong>{task.description}</strong>
		</>
	)
}