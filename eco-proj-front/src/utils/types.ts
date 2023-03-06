export type routeType = {
  id: number;
  title: string;
  path: string;
};

export type courseType = {
  Valute: mainValutes;
};

export type mainValutes = {
  USD: valuteType;
  EUR: valuteType;
  CNY: valuteType;
};

export type spendingType = {
  category: string;
  value: number;
};

export type valuteType = {
  CharCode: string;
  ID: string;
  Nominal: number;
  NumCode: string;
  Previous: number;
  Value: number;
};
