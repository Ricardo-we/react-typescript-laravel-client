import API_URL from './requests.config';
import { Task } from '../interfaces/task';

export default class TaskRequest {
    HEADERS = {}
    ENDPOINT = `${API_URL}/tasks`

    async get_(){
        const response = await fetch(this.ENDPOINT)
        return await response.json();
    }

    async getOne(taskId: number){
        const response = await fetch(`${this.ENDPOINT}/${taskId}`)
        return await response.json();
    }

    async post_({ title, description }: Task){
        const response = await fetch(this.ENDPOINT, {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: { 'Content-Type': 'application/json' }
        })
        return await response.json();
    }

    async delete_(taskId: number){
        const response = await fetch(`${this.ENDPOINT}/${taskId}`, { method: 'DELETE' })
        return await response.json();
    }

    async put_(taskId: number, { title, description }: Task){
        const response = await fetch(`${this.ENDPOINT}/${taskId}`, {
            method: 'PUT',
            body: JSON.stringify({title, description}),
            headers: { 'Content-Type': 'application/json' }
        })
        return await response.json();
    }

}