import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from "../components/Form";
import TaskRequest from "../services/tasks.requests";

const defaultInputs = (defaults: Array<string>) => [
    { name: 'title', placeholder: 'title', value: defaults[0] || '' },
    { name: 'description', placeholder: 'description', type: 'textarea', value: defaults[1] || '' }
]

function UpdateTask() {
    const request = new TaskRequest();
    const navigate = useNavigate();
    const params = useParams();
    const taskId = params.taskId ? parseInt(params.taskId) : 0;

    const [inputs, setInputs] = useState(defaultInputs(['', '']));

    useEffect(() => {
        request.getOne(taskId)
            .then(res => {
                setInputs(defaultInputs([res.title, res.description]))
            })
    }, [])

    return (
        <Form
            inputs={inputs}
            onSubmit={(inputs) => {
                request.put_(taskId,{ title: inputs.title, description: inputs.description })
                    .then(() => navigate('/'))
                    .catch(error => alert(error.toString()));
            }}
        />
    );
}

export default UpdateTask;