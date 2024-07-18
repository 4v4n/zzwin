import axios, { AxiosInstance, AxiosRequestConfig } from "axios"

const instance: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 20000,
  headers: {
    // "x-lang": "en",
    // "x-session-platform-code": "plat1",
  },
})

instance.interceptors.response.use(
  (response) => {
    const result = response.data

    // Assuming the PokeAPI does not have a `success` field.
    // Handle the result based on its actual structure.
    // Uncomment and adjust the following if there's a specific error structure.
    // if (!result.success) {
    //   return Promise.reject(new Error(result.msg || 'Unknown error'))
    // }

    return result
  },
  (error) => {
    const response = error.response
    // Handle specific status codes or other error details here if needed
    if (response) {
      return Promise.reject(new Error(response.statusText || 'An error occurred'))
    }
    return Promise.reject(error)
  },
)

function request<T = unknown>(
  config: AxiosRequestConfig & { noErrToast?: boolean },
): Promise<T> {
  return instance.request<T, T>({ ...config })
}

export default request
