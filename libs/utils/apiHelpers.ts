import axiosInstance from 'libs/config/axios';

type AxiosType = 'get' | 'delete' | 'patch';

export const fetchApi = async ({
  token,
  url,
  type = 'get',
}: {
  type?: AxiosType;
  url: string;
  token?: string | null;
}) => {
  return axiosInstance[type](url, {
    headers: {
      Authorization: `${token}`,
    },
  });
};

export const deleteApi = async <Response>(
  url: string,
  authToken?: string | null
): Promise<Response> => {
  const config = {
    headers: {
      Authorization: authToken,
    },
  };
  return await axiosInstance.delete(url, config);
};

type ResquestApi<Data> = {
  url: string;
  data: Data;
  type?: 'post' | 'put' | 'patch';
  authToken?: string | null;
};

export const resquestApi = async <Response, Data>({
  data,
  authToken,
  type = 'post',
  url,
}: ResquestApi<Data>): Promise<Response> => {
  const config = {
    headers: {
      Authorization: authToken,
    },
  };

  return await axiosInstance[type](url, data, config);
};
