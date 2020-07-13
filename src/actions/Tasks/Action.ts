import TasksActionType from "./ActionType";
import OneTaskState from '../../states/OneTask'
import TasksState from '../../states/Tasks'

export type AddTask = {
    type: TasksActionType.ADD_TASK,
    taskSet: OneTaskState
}

export type DeleteTask = {
    type: TasksActionType.DELETE_TASK,
    taskId: string
}

export type ChangeColor = {
    type: TasksActionType.CHANGE_COLOR,
    taskSet: OneTaskState
}

export type SetAllTasks = {
    type: TasksActionType.SET_ALL_TASKS,
    tasks: TasksState
}

type TasksAction = AddTask | DeleteTask | ChangeColor | SetAllTasks;

export default TasksAction;