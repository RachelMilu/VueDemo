import * as types from './mutation-types'

export const setterUrl = makeAction(types.SET_URL)

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}
