import { toast } from "./toast";

export async function get(url) {
  return await _httpClient(url, "GET");
}

export async function post(url, body?) {
  return await _httpClient(url, "POST", body);
}

// internal generic hanlder
async function _httpClient(url, method, body?) {

  try {
    const res = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    console.log("response here...");
    const json = await res.json();
    console.log(json);

    if (!res.ok){

      const { reason } = json;

      throw {
        status: res.status,
        reason: reason ? reason : res.statusText
      };
    }

    return json;
  }
  catch (e) {
    console.log("catching an error here...");
    console.log(e);

    toast(e.reason);

    return {
      success: false
    };
  }

}
