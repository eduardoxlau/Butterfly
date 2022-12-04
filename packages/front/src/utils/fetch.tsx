export const fetchApi = async ({
  url,
  method,
  data,
}: {
  url: string;
  method: "POST" | "GET";
  data?: any;
}) => {
  let parameters: any = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (method === "POST") {
    parameters.body = JSON.stringify(data);
  }
  const response = await fetch(url, parameters);

  return response.json();
};
