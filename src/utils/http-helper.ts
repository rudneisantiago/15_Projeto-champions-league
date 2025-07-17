import { HttpResponse } from "../models/http-response-model";

/**
 * Returns an object with statusCode and body properties
 * @param {(Array|undefined)} data Data to be returned into the body
 * @returns {object} Object {statusCode: 200, body: data}
 */
export const ok = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 200,
    body: data,
  };
};

export const noContent = async (): Promise<HttpResponse> => {
  return {
    statusCode: 204,
    body: [],
  };
};
