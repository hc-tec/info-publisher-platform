export default interface Task {
    title: string,
    message: string,
    publisher: object,
    publish_time: string,
    time_left: string,
    importance: number,
    checked: boolean
}
