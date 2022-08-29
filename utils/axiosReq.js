import axios from "axios";

export default async function axiosReq(url, method, payload) {
  const controller = new AbortController();
  let [data, error, loaded] = [null, "", false];

  const cancel = () => {
    controller.abort();
  };

  try {
    const response = await axios.request({
      data: payload,
      signal: controller.signal,
      method,
      url,
      headers: payload?.headers || "",
    });

    data = response;
  } catch (err) {
    error = err.response.data;
  } finally {
    loaded = true;
  }
  return { cancel, data, error, loaded };
}
