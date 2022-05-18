import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import '../assests/css/Form.css';

interface FormProps {
    inputs: Array<{
        name: string;
        value?: string;
        placeholder?: string;
        type?: string;
    }>;
    onSubmit: (inputs: any) => void
}

function Form({ inputs, onSubmit }: FormProps) {
    const [formData, setFormData] = useState({});

    const handleChange = (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        console.log(formData)
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit({...formData});
    }

    useEffect(() => {
        for(let input of inputs){
            setFormData(prev => ({...prev, [input.name]: input.value || ''  }))
        }
    }, [inputs])
    
    return (
        <>
            <form className="form w-100" onSubmit={handleSubmit}>
                {inputs &&
                    inputs.map((input, index) => {
                        if (input.type === "textarea") {
                            return (
                                <div className="form-group w-100" key={index}>
                                    <label>{input.placeholder}</label>
                                    <textarea
                                        className="form-control"
                                        onChange={handleChange}
                                        name={input.name}
                                        cols={30}
                                        rows={10}
                                        defaultValue={input.value}
                                        placeholder={input.placeholder}
                                    ></textarea>
                                </div>
                            );
                        }
                        return (
                            <div className="form-group w-100" key={index}>
                                <label>{input.placeholder}</label>
                                <input
                                    className="form-control"
                                    placeholder={input.placeholder}
                                    onChange={handleChange}
                                    type={input.type}
                                    name={input.name}
                                    defaultValue={input.value}
                                />
                            </div>
                            );
                    })
                }
                <button className="btn btn-outline-primary w-100">Submit</button>
            </form>
        </>
    );
}

export default Form;
