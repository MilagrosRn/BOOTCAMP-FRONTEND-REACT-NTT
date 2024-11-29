import { productMock, productMock2 } from "../../__mocks__/datamock";
import fetchMock from "jest-fetch-mock";
import { getAllProducts, searchProduct } from "../market.services";
import React from "react";

fetchMock.enableMocks();
const query = "example";
describe("getAllProducts", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should fetch all products successfully", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        products: [productMock, productMock2],
      })
    );

    const result = await getAllProducts();
    expect(result).toHaveLength(2);
  });

  it("should throw an error if the API response is not OK", async () => {
    fetchMock.mockRejectOnce(new Error("Error en la respuesta de la API"));

    await expect(getAllProducts()).rejects.toThrow(
      "Error en la respuesta de la API"
    );
  });
});

describe("searchProduct", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should return a list of products when the API call is successful", async () => {
    const mockResponse = {
      products: [productMock, productMock2],
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));
    const result = await searchProduct(query);

    expect(result).toEqual(mockResponse.products);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      `https://dummyjson.com/products/search?q=${query}`
    );
  });

  it("should throw an error when the API response is not ok", async () => {
    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    fetchMock.mockResponseOnce('', { status: 500 });
  
    const result = await searchProduct("example");

    expect(result).toEqual([]);
    expect(consoleErrorSpy).toHaveBeenCalledWith("Hubo un error al buscar el producto:", expect.any(Error));
    expect(fetchMock).toHaveBeenCalledTimes(1);
    consoleErrorSpy.mockRestore();
});

  it("should return an empty array when an error occurs", async () => {
    fetchMock.mockReject(new Error("Error"));

    const result = await searchProduct(query);
    expect(result).toEqual([]);
  });
});
