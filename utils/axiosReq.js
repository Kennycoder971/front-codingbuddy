import axios from "axios";
import { getCookie } from "@/utils/cookieHelpers";

export default async function axiosReq(url, method, payload) {
  const controller = new AbortController();
  let [data, error, loaded] = [null, "", false];

  const jwt = getCookie("jwt");
  const payloadJWT = {
    Authorization: `Bearer ${jwt}`,
  };

  const cancel = () => {
    controller.abort();
  };

  try {
    const response = await axios.request({
      data: payload,
      signal: controller.signal,
      method,
      url,
      headers: payload?.headers || payloadJWT || "",
    });

    data = response.data;
  } catch (err) {
    error = err.response.data;
  } finally {
    loaded = true;
  }
  return { cancel, data, error, loaded };
}
