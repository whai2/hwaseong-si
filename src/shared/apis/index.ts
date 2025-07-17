export const defaultHeaders = {
  "Content-Type": "application/json",
};

export const streamHeaders = {
  Accept: "text/event-stream",
  Connection: "keep-alive",
  "Cache-Control": "no-cache",
};

const apiUrl = "http://localhost:8010";

export const apiClient = () => {
  const baseUrl = `${apiUrl}`;

  const request = async (
    path: string,
    options: RequestInit = {}
  ): Promise<any> => {
    const url = `${baseUrl}${path}`;

    const mergedOptions: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...(options.headers || {}),
      },
    };

    return await fetch(url, mergedOptions);
  };

  return {
    get: (path: string, options: RequestInit = {}) =>
      request(path, { ...options, method: "GET" }),

    post: (path: string, body: any, options: RequestInit = {}) =>
      request(path, {
        ...options,
        method: "POST",
        body: JSON.stringify(body),
      }),

    put: (path: string, body: any, options: RequestInit = {}) =>
      request(path, {
        ...options,
        method: "PUT",
        body: JSON.stringify(body),
      }),

    patch: (path: string, body: any, options: RequestInit = {}) =>
      request(path, {
        ...options,
        method: "PATCH",
        body: JSON.stringify(body),
      }),

    delete: (path: string, options: RequestInit = {}) =>
      request(path, { ...options, method: "DELETE" }),
  };
};
