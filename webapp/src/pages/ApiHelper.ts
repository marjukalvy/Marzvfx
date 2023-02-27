import axios from "axios";
import { arrayOf } from "prop-types";
import { Order, OrderData, Product, ProductData } from "../components/interfaces";


const INPIPELINE_URL = '/api/orders/inpipeline';
const UPDATE_STATUS_URL = '/api/orders/update_status';

const getInPipelineData = async () => {
  const orderData: OrderData = {
    Queued: [],
    InProgress: [],
    QA: [],
  };
  let errorOccured = false;
  try {
    const response = await axios.get(INPIPELINE_URL);
    if (response?.status === 200) {
      const { data } = response.data;
      data.forEach((order: Order) => {
        orderData[order.OrderStatus as keyof OrderData].push(order);
      });
    } else {
      const { message } = response.data;
      throw message;
    }
  } catch (err) {
    console.error(err);
    errorOccured = true;
  }
  return { orderData, errorOccured };
};



const updateOrderStatus = async (order: Order, newOrderStatus: string) => {
  const updatedOrder = { ...order, OrderStatus: newOrderStatus };
  let orderStatusUpdated = false;
  try {
    const response = await axios.post(UPDATE_STATUS_URL, updatedOrder);
    if (response?.status === 200) orderStatusUpdated = true;
    else {
      const { message } = response.data;
      throw message;
    }
  } catch (err) {
    console.error(err);
  }
  return orderStatusUpdated;
};


const PRODUCTS_URL = '/api/products/products';
//async function to get json object from product endpoint
const getProducts = async () => {
  let productList: Product[] = [];
  let errorOccured = false;
  try {
    const response = await axios.get(PRODUCTS_URL);
    if (response?.status === 200) {
      const { data } = response.data;
      data.forEach((order: Product) => {
        productList.push(order);
      });
      //Filters out which products are active and which are not
      productList = productList.filter((order) => order.ProductStatus === 'Active');

    } else {
      const { message } = response.data;
      throw message;
    }
  } catch (err) {
    console.error(err);
    errorOccured = true;
  }
  return { productList, errorOccured };
};



export { getInPipelineData, INPIPELINE_URL, updateOrderStatus, UPDATE_STATUS_URL, getProducts, PRODUCTS_URL };