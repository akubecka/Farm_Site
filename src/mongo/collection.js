const dbConnection = require("./connection");

/* This will allow you to have one reference to each collection per app */
/* Feel free to copy and paste this this */
const getCollectionFn = collection => {
  let _col = undefined;

  return async () => {
    if (!_col) {
      const db = await dbConnection();
      _col = await db.collection(collection);
    }

    return _col;
  };
};

/* Now, you can list your collections here: */
module.exports = {
  admins: getCollectionFn("admins"),
  cart: getCollectionFn("cart"),
  tempCart: getCollectionFn("tempCart"),
  orderLog: getCollectionFn("orderLog"),
  products: getCollectionFn("products")
};