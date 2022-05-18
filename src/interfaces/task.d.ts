export interface Task {
    title: string
    description?: string
}

export interface FullTask {
    id: number
    title: string
    description: string
    created_at: Date
    updated_at: Date
}