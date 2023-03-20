export interface Values {
  readonly name: string
  readonly email: string
  readonly company: string
  readonly subject: string
  readonly message: string
}

export interface State {
  readonly status: 'idle' | 'progress' | 'success'
  readonly error?: string
}

export interface SubmitAction {
  readonly type: 'submit'
  readonly values: Values
}

export interface SuccessAction {
  readonly type: 'success'
}

export interface FailedActionn {
  readonly type: 'failed'
  readonly error?: string
}

export interface ResetAction {
  readonly type: 'reset'
}

export const reducer = (
  state: State,
  action: SubmitAction | SuccessAction | FailedActionn | ResetAction
): State => {
  switch (action.type) {
    case 'submit':
      return { ...state, status: 'progress' }
    case 'success':
      return { ...state, status: 'success' }
    case 'failed':
      return { ...state, status: 'idle', error: action.error }
    case 'reset':
      return { ...state, status: 'idle', error: undefined }
    default:
      return state
  }
}
