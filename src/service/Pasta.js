import request from "../../request/request";

export const getPastas = async () => {
    const response = await request({
        method: "get",
        url: "/pasta",
      });
  return response.data.content;
};

export const toggleActivationpastas = async (id) => {
    await request({
    url: `/pasta/${id}/ativo`,
    method: "PUT",
  });
};

