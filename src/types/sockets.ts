export interface LocationPayload {
  orders: Order[];
  lat: number;
  lng: number;
}

export interface JoinOrderPayload {
  orderId: string;
}

export interface Order {
  id: number;
}
