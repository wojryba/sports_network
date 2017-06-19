const BASE_URL = ''

function callApi(endpoint, authenticated, method, data) {

  let token = localStorage.getItem('id_token') || null
  let config = {}

  if(authenticated) {
    if(token) {
      // check if post method is specifed, if so append proper config
      if (method === 'POST') {
        config = {
          method: "POST",
          body: JSON.stringify({data}),
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${token}`
          },
        }
      } else { // if not just normal auth confing
        config = {
          headers: {
            'Authorization': `Bearer ${token}`
          },
        }
      }
    }
    else {
      let error = {error: "No token saved!"};
      throw error
    }
  }

  return fetch(BASE_URL + endpoint, config)
    .then(response =>
      response.text().then(text => ({ text, response }))
    ).then(({ text, response }) => {
      if (!response.ok) {
        return Promise.reject(text)
      }

      return text
    }).catch(err => {
      console.log(err);
      return Promise.reject(err);
    })
}

export const CALL_API = Symbol('Call API')

export default store => next => action => {

  const callAPI = action[CALL_API]

  // So the middleware doesn't get applied to every single action
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint, types, authenticated, method, data } = callAPI

  const [ successType, errorType ] = types
  //console.log(errorType)

  // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes
  return callApi(endpoint, authenticated, method, data).then(
    response =>
      next({
        response,
        authenticated,
        type: successType
      }),
    error => next({
      error: error.message || 'There was an error.',
      type: errorType
    })
  )
}
